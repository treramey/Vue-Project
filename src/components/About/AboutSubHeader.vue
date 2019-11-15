<template>
  <sub class="primary-sub">
    <div
      class="primary-sub__word"
      v-for="(word, index) in textArray"
      :key="index"
      @mouseover="wordActive($event.target)"
    >
      <div class="primary-sub__top">{{ word }}</div>
      <div class="primary-sub__bottom">{{ word }}</div>
    </div>
  </sub>
</template>

<script>
export default {
  props: ["text"],
  data() {
    return {
      textArray: []
    };
  },
  created() {
    this.textArray = this.text.split(" ");
  },
  methods: {
    wordActive(e) {
      if (
        e.classList.contains("primary-sub__top") ||
        e.classList.contains("primary-sub__bottom")
      ) {
        e.parentNode.classList.add("primary-sub__word--active");
        setTimeout(() => {
          e.parentNode.classList.remove("primary-sub__word--active");
        }, 2000);
      }
    }
  }
};
</script>

<style lang="scss">
.primary-sub {
  color: $color-primary-text;
  line-height: 1;
  font-size: 3rem;
  display: block;
  opacity: 1;
  visibility: visible;
  transition: all 300ms ease-out;
  @media only screen and (max-width: 44.375em)
  {
    font-size: 2.5rem;
    line-height: 1.1;
  }

  &__word {
    display: inline-block;
    vertical-align: top;
    height: 3.9rem;
    overflow: hidden;
    @media only screen and (max-width: 44.375em)
    {
      height: 2.5rem;
      
    }

    * {
      transition: all 250ms;
    }
    &__bottom {
      visibility: hidden;
    }
    &--active * {
      transform: translateY(-4rem);
    }
    &--active &__bottom {
      visibility: visible;
    }
  }
  &__top {
    margin-bottom: 1.01rem;
  }
  &__bottom {
    color: #22262a;
    background-color: $color-white;
    padding: 5px;
  }
}
</style>