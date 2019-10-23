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
    }
</style>