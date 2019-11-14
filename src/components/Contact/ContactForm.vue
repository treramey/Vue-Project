<template>
  <form
    v-on:submit.prevent="onSubmit"
    class="gform"
    method="POST"
    action="https://script.google.com/macros/s/AKfycbw7Fq4TAJC0MEFF5GKfbMO77Jyc1D818aSTiJ9k/exec"
  >
    <div class="gform__inputContainer form-elements">
      <fieldset class="gform__styledInput">
        <input
          id="name"
          name="name"
          placeholder="what your mom calls you..."
          type="text"
          required
        />
      </fieldset>
      <fieldset class="gform__styledInput gform__styledInput--flexOne">
        <input
          id="email"
          name="email"
          type="email"
          value
          required
          placeholder=" email@address.com"
        />
      </fieldset>
      <fieldset class="gform__styledInput">
        <textarea
          id="message"
          name="message"
          rows="10"
          placeholder="Tell me what's on your mind..."
          required
        ></textarea>
      </fieldset>
      <fieldset class="honeypot-field">
        <label for="honeypot"
          >To help avoid spam, utilize a Honeypot technique with a hidden text
          field; must be empty to submit the form! Otherwise, we assume the user
          is a spam bot.</label
        >
        <input id="honeypot" type="text" name="honeypot" value />
      </fieldset>
    </div>
    <button class="gform__Btn" type="submit">
      <font-awesome-icon icon="paper-plane" class="fa-fw" />&nbsp;Send Message
    </button>

    <div class="thankyou_message" style="display:none;">
      <h2><em>Thanks</em> for contacting us! We will get back to you soon!</h2>
    </div>
  </form>
</template>

<script>
export default {
  methods: {
    onSubmit: function handleFormSubmit(event) {
      // handles form submit without any jquery
      event.preventDefault(); // we are submitting via xhr below
      var form = event.target;
      var formData = this.getFormData(form);
      var data = formData.data;

      // If a honeypot field is filled, assume it was done so by a spam bot.
      if (formData.honeypot) {
        return false;
      }

      this.$swal(
        "Thank you for getting in touch!",
        "I'll make sure to contact you as soon as possible!",
        "success"
      );
      this.disableAllButtons(form);
      var url = form.action;
      var xhr = new XMLHttpRequest();
      xhr.open("POST", url);
      // xhr.withCredentials = true;
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          form.reset();
        }
      };
      // url encode form data for sending as post data
      var encoded = Object.keys(data)
        .map(function(k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
        })
        .join("&");
      xhr.send(encoded);
    },

    getFormData(form) {
      var elements = form.elements;
      var honeypot;

      var fields = Object.keys(elements)
        .filter(function(k) {
          if (elements[k].name === "honeypot") {
            honeypot = elements[k].value;
            return false;
          }
          return true;
        })
        .map(function(k) {
          if (elements[k].name !== undefined) {
            return elements[k].name;
            // special case for Edge's html collection
          } else if (elements[k].length > 0) {
            return elements[k].item(0).name;
          }
        })
        .filter(function(item, pos, self) {
          return self.indexOf(item) == pos && item;
        });

      var formData = {};
      fields.forEach(function(name) {
        var element = elements[name];

        // singular form elements just have one value
        formData[name] = element.value;

        // when our element has multiple items, get their values
        if (element.length) {
          var data = [];
          for (var i = 0; i < element.length; i++) {
            var item = element.item(i);
            if (item.checked || item.selected) {
              data.push(item.value);
            }
          }
          formData[name] = data.join(", ");
        }
      });

      // add form-specific values into the data
      formData.formDataNameOrder = JSON.stringify(fields);
      formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
      formData.formGoogleSend = form.dataset.email || ""; // no email by default

      return { data: formData, honeypot: honeypot };
    },

    loaded() {
      // bind to the submit event of our form
      var forms = document.querySelectorAll("form.gform");
      for (var i = 0; i < forms.length; i++) {
        forms[i].addEventListener("submit", this.handleFormSubmit, false);
      }
    },
    disableAllButtons(form) {
      var buttons = form.querySelectorAll("button");
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
    }
  }
};
</script>

<style lang="scss">
.gform {
  font-family: $font-secondary;
  opacity: 1;
  visibility: visible;
  transition: all 300ms ease-out;

  &__inputContainer {
    display: flex;
    flex-flow: column wrap;
    align-items: stretch;
  }

  &__styledInput {
    border: none;
    display: flex;
    flex-direction: column;
    margin: 1rem;
    border-radius: 4px;

    &--flexOne {
      flex: 1;
    }

    input,
    textarea {
      padding: 30px;
      border: 0;
      width: 100%;
      font-size: 2rem;
      background-color: #2d2d2d;
      color: white;
      border-radius: 5px;
      resize: vertical;
    }

    input:focus,
    textarea:focus {
      outline: 0;
    }

    input:focus ~ span,
    textarea:focus ~ span {
      width: 100%;
      -webkit-transition: all 0.075s ease;
      transition: all 0.075s ease;
    }

    textarea {
      width: 100%;
      max-height: 15em;
    }
    input:required:focus {
      border: 1px solid red;
      outline: none;
    }
  }

  &__Btn {
    display: inline-block;
    float: right;
    margin: 1rem;
    border: 1px solid $color-secondary;
    text-decoration: none;
    color: $color-white;
    font-size: 2.2rem;
    letter-spacing: 1px;
    border-width: 1px 1px 2px 1px;
    border-style: solid;
    background-color: $color-button;
    border-color: #222;
    border-radius: 3px;
    box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    transition: all 200ms;
    position: relative;
    font-family: $font-primary;

    &:hover {
      transform: translateY(2px);
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1),
        0 1px 1px 0 rgba(0, 0, 0, 0.09);
    }
    @media (max-width: 768px) {
      width: 90%;
      float: none;
      text-align: center;
    }
  }
  .honeypot-field {
    display: none;
  }
}
</style>
