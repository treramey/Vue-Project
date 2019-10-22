<template>
  <div id="app">
    <NavComponent/>
    <router-view/>
  </div>
</template>
<script>
import NavComponent from "./components/NavComponent"

export default {
  components:{NavComponent}  
}
</script>
<style lang="scss">
#app {
    min-height: 100%;
    padding: 1.5rem;
    background-color: $color-secondary;
}
</style>
