<template>
  <div class="footerContact">
    <ul class="footerContact__list">
      <li class="footerContact__item">
        <a href="https://www.linkedin.com/in/treramey/" target="_blank" class="footerContact__link footerContact__link-linkedin">
          <span class="footerContact__label">Linkedin</span>
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
      </li>
      <li class="footerContact__item">
        <a href="https://github.com/treramey" target="_blank" class="footerContact__link footerContact__link-github">
          <span class="footerContact__label">Github</span>
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
      </li>

      <li class="footerContact__item">
        <a href="mailto:treramey@gmail.com" target="_blank" class="footerContact__link footerContact__link-email">
          <span class="footerContact__label">Email</span>
          <font-awesome-icon :icon="['far', 'envelope']" />
        </a>
      </li>

      <li class="footerContact__item">
        <a href="" target="_blank" class="footerContact__link footerContact__link-resume">
          <span class="footerContact__label">Resume</span>
          <font-awesome-icon :icon="['fas', 'portrait']" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footerContact {
  display:flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  @media screen and (max-width: 768px) {
    visibility: visible;
}

  &__list {
    list-style: none;
    display: table;
    width: 100%;

  }
  &__item{
    display: table-cell;
    
  }

  &__link {
    &:visited,
    &:link {
      display: flex;
      justify-content: center;
      align-items:center;
      color: $color-white;
      font-size: 1.5rem;
      padding: 2rem;
      text-decoration: none;
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
      // transform: translateX(6.4rem);
    }
  }

  &__label {
    margin-right: 2px;
    letter-spacing: 1px;
    
  }

}

</style>