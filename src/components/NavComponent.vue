<template>
  <div class="navigation">
    <input type="checkbox" class="navigation__checkbox" id="nav_toggle" v-model="navActive" />
    <label for="nav_toggle" class="navigation__button">
      <div class="navigation__line"></div>
      <div class="navigation__line"></div>
      <div class="navigation__line"></div>
    </label>

    <nav class="navigation__nav">
      <ul class="navigation__list">
        <li class="navigation__item" @click="navActive= false">
          <router-link to="/about" class="navigation__link" v-bind:class="{ 'navigation__colorNav': $route.path == '/about' }">
            <span>about</span>
          </router-link>
        </li>

        <li class="navigation__item"  @click="navActive= false">
          <router-link to="/portfolio" class="navigation__link" v-bind:class="{ 'navigation__colorNav': $route.path == '/portfolio' }">
            <span>portfolio</span>
          </router-link>
        </li>

        <li class="navigation__item" @click="navActive= false">
          <router-link to="/contact" class="navigation__link" v-bind:class="{ 'navigation__colorNav': $route.path == '/contact' }">
            <span>contact</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navActive: false,

    };
  }
};
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
    right: 3rem;
    z-index: $layer-burger;
    width: 4.05rem;
    cursor: pointer;
    @media only screen and (min-width: 1600px) {
      width: 4.6rem;
    }
  }

  &__line {
    display: inline-block;
    width: 100%;
    height: 2px;
    background-color: $color-white;
    transition: all 300ms $cubic-bezier-primary, background-color 300ms ease-in;
    vertical-align: middle;
    margin: auto;

    &:nth-child(1),
    &:nth-child(3) {
      transform-origin: 5.5% 50%;
      @media only screen and (min-width: 100em) {
        transform-origin: 10.5% 50%;
      }
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
    background-color: $color-text-nav-light;
    transition: all 300ms $cubic-bezier-primary, background-color 300ms ease-out;
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
    background: $color-nav;
    width: 100%;
    height: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 300ms ease-out;
  }
  //display navbar menu
  &__checkbox:checked ~ &__nav {
    height: 100%;
  }
  //remove list styling
  &__list {
    list-style: none;
    width: 60rem;
    margin: auto;
    @media only screen and (max-width: 31.25em){
      width: 80%;
      }
    @media only screen and (min-width: 100em){
      width: 80rem;
      }
        
  }

  &__item {
    width: 100%;
    }

  &__link {
    &:visited,
    &:link {
      display: block;
      width: 100%;
      padding: 4.5rem 0;
      text-align: center;
      font-size: 3.5rem;
      text-decoration: none;
      color: $color-text-nav;
      position: relative;
      background: $color-nav-link;
      font-family: $font-third; 
      font-weight: 700;
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
      background-color: $color-nav-link-hover;
      transform: scaleX(0);
      transition: all 300ms ease-out;
    }

    //Animate highlight box when hover and click
    &:hover,
    &:active,
    &:focus {
      text-decoration: none;
      color: $color-text-nav-hover;

      &:before {
        transition: all 300ms $cubic-bezier-primary;
        transform: scaleX(1);
        
      }
    }
  }
  &__colorNav{
        color: $color-text-nav-light !important;
      }
}
</style>