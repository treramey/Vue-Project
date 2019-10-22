<template>
  <div class="navigation">
    <input type="checkbox" class="navigation__checkbox" id="nav_toggle" />
    <label for="nav_toggle" class="navigation__button">
      <div class="navigation__line"></div>
      <div class="navigation__line"></div>
      <div class="navigation__line"></div>
    </label>

    <nav class="navigation__nav">
      <ul class="navigation__list">
        <li class="navigation__item">
          <router-link to="/about" class="navigation__link">
            <span>About</span>
          </router-link>
        </li>

        <li class="navigation__item">
          <router-link to="/portfolio" class="navigation__link">
            <span>Portfolio</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.navigation {
  //Remove check box from view
  &__checkbox {
    display: none;
  }
  //Button
  &__button {
    position: fixed;
    top: 3rem;
    right: 4rem;
    z-index: $layer-burger;
    width: 3.5rem;
    cursor: pointer;
  }

  &__line {
    display: inline-block;
    width: 100%;
    height: 2px;
    background-color: $color-gray-light;
    transition: all 300ms $cubic-bezier-primary, background-color 300ms ease-in;
    vertical-align: middle;
    margin: auto;

    &:nth-child(1),
    &:nth-child(3) {
      transform-origin: 5.5% 50%;
    }
  }
  // Button Hover Animation
  &__button:hover &__line:nth-child(1) {
    transform: translateY(-0.4rem);
  }

  &__button:hover &__line:nth-child(3) {
    transform: translateY(0.4rem);
  }

  // Button Function

  //Increase button size
  &__checkbox:checked + &__button {
    transform: scale(1.4);
    transition: all 300ms $cubic-bezier-primary;
  }
  //Hover animation when checkbox is clicked
  &__checkbox:checked + &__button:hover {
    transform: scale(1.6);
  }

  &__checkbox:checked + &__button &__line {
    background-color: $color-white;
    transition: background-color 300ms ease-out;
  }

  //Trransform into X

  //Remove middle line
  &__checkbox:checked + &__button &__line:nth-child(2) {
    transform: translateX(-100%);
    opacity: 0;
    visibility: hidden;
  }
  //Rotate 45 degrees
  &__checkbox:checked + &__button &__line:nth-child(1) {
    transform: rotate(45deg);
  }

  &__checkbox:checked + &__button &__line:nth-child(3) {
    transform: rotate(-45deg);
  }

  //Navigation menu
  &__nav {
    position: fixed;
    z-index: $layer-nav;
    top: 0;
    left: 0;
    background: $color-primary;
    width: 100%;
    height: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: all 300ms ease-out;
  }
  //display navbar menu
  &__checkbox:checked ~ &__nav {
    height: 100%;
  }
  //remove list styling
  &__list {
    list-style: none;
  }

  &__link {
    &:visited,
    &:link {
      display: block;
      width: 60rem;
      padding: 2.5rem 0;
      text-align: center;
      font-size: 3.5rem;
      text-decoration: none;
      color: $color-white;
      text-transform: uppercase;
      position: relative;
      background: $color-primary-dark;
    }

    span {
      position: relative;
    }
    //Highlight Box 
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: $color-primary-dark-2;
      transform: scaleX(0);
      transition: all 300ms ease-out;
    }

    //Animate highlight box when hover and click
    &:hover,
    &:active,
    &:focus {
      text-decoration: none;

      &:before {
        transition: all 300ms $cubic-bezier-primary;
        transform: scaleX(1);
      }
    }
  }
}
</style>