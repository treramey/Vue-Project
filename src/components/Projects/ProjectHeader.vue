<template>
  <h2 class="header">
      <slot></slot>
  </h2>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .header{
        margin-top: 4rem;
        font-size:4rem;
        color:$color-white;
        letter-spacing: 2px;
        user-select: text;


        opacity: 1;
        visibility: visible;
        transition: all 300ms ease-out;
    }
</style>