<template>
  <form
    class="gform"
    method="POST"
    action="https://script.google.com/macros/s/AKfycbw7Fq4TAJC0MEFF5GKfbMO77Jyc1D818aSTiJ9k/exec"
  >
    <div class="gform__inputContainer">
      <div class="gform__styledInput">
        <input id="name" name="name" placeholder="what your mom calls you..." type="text" required />
      </div>
      <div class="gform__styledInput gform__styledInput--flexOne">
        <input
          id="email"
          name="email"
          type="email"
          value
          required
          placeholder=" your email"
        />
      </div>
      <div class="gform__styledInput">
        <textarea
          id="message"
          name="message"
          rows="10"
          placeholder="Tell me what's on your mind..."
          required
        ></textarea>
      </div>
    </div>
    <button class="gform__Btn" type="submit">Send Message</button>
  </form>
</template>

<script>
export default {};
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

    transition: all 300ms ease;

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
}
</style>