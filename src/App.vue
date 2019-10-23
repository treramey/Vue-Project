<template>
  <div id="app">
    <NavComponent/>
    <contact/>
    <router-view/>
  </div>
</template>
<script>
import NavComponent from "./components/NavComponent"
import Contact from './components/Contact'

export default {
  components:{NavComponent,Contact}  
}
</script>
<style lang="scss">
#app {
    min-height: 100%;
    padding: 1.5rem;
    background-color: $color-secondary;
    user-select: none;
}
</style>
