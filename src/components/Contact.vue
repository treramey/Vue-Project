<template>
  <div class="contact">
    <ul class="contact__list">
      <li class="contact__item">
        <a href="https://www.linkedin.com/in/treramey/" target="_blank" class="contact__link contact__link-linkedin">
          <span class="contact__label">Linkedin</span>
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
      </li>
      <li class="contact__item">
        <a href="https://github.com/treramey" target="_blank" class="contact__link contact__link-github">
          <span class="contact__label">Github</span>
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
      </li>

      <li class="contact__item">
        <a href="mailto:hello@treramey.dev" target="_blank" class="contact__link contact__link-email">
          <span class="contact__label">Email</span>
          <font-awesome-icon :icon="['far', 'envelope']" />
        </a>
      </li>

      <li class="contact__item">
        <a href="https://drive.google.com/file/d/1Ve9kGzylOyERVpH5iGphpWuwUfOs9nkf/view?usp=sharing" target="_blank" class="contact__link contact__link-resume">
          <span class="contact__label">Resume</span>
          <font-awesome-icon :icon="['far', 'file']" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.contact {
  position: absolute;
  top: 50%;
  left: -7rem;
  transform: translateY(-50%);
  z-index: $layer-contact;
  visibility: visible;
  @media screen and (max-width: 768px) {
    visibility: hidden;
  }
  @media only screen and (min-width: 100em) {
    left: -12.5rem;
  }

  &__list {
    list-style: none;
  }

  &__link {
    &:visited,
    &:link {
      display: block;
      color: $color-white;
      font-size: 2.5rem;
      padding: 1.2rem;
      transition: all 450ms $cubic-bezier-primary;
      text-decoration: none;
      @media only screen and (min-width: 100em) {
        padding: 1.5rem;
        font-size: 2.8rem;
      }
    }

    &-linkedin {
      background-color: $color-linkedin;
    }

    &-github {
      background-color: $color-github;
    }

    &-resume {
      background-color: $color-resume;
    }

    &-email {
      background-color: $color-email;
    }

    &:hover,
    &:active,
    &focus {
      transform: translateX(6.4rem);
    }
  }

  &__label {
    display: inline-block;
    vertical-align: middle;
    font-size: 1.6rem;
    margin-right: 1.2rem;
    width: 5.8rem;
    text-align: right;
    // letter-spacing: 1px;
    @media only screen and (min-width: 100em) {
      width: 10.8rem;
    }
  }

}
</style>