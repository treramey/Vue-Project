<template>
  <sub class="sub-header">
      <slot></slot>
      
  </sub>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .sub-header{
        font-family: $font-secondary;
        font-size: 1.8rem;
        color: $color-primary-text;
        display: inline-block;
        margin: 1.2rem 0 3rem 0;
        line-height: 1.5;
        user-select: text;
        opacity: 1;
        visibility: visible;
        transition: all 300ms ease-out;
    }

</style>