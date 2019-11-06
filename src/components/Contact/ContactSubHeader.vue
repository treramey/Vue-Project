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
        font-size: 2rem;
        line-height: 1.7em;
        color: #8a8a8a;
        font-family: $font-secondary;
        display: inline-block;
        margin: 1.2rem 0;
        user-select: text;
        
        opacity: 1;
        visibility: visible;
        transition: all 300ms ease-out;
    }

</style>