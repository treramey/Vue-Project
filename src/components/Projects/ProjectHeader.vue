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
        margin-top: 2rem;
        font-size:5rem;
        color:$color-white;
        letter-spacing: 2px;
        user-select: text;


        opacity: 1;
        visibility: visible;
        transition: all 300ms ease-out;
    }
</style>