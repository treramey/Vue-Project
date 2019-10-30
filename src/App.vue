<template>
  <div id="app">
    <NavComponent />
    
    <contact />
    <router-view />
    <Footer/>
  </div>
</template>
<script>
import NavComponent from "./components/NavComponent";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default {
  components: { NavComponent, Contact, Footer }
};
</script>
<style lang="scss">
#app {
  position: absolute;
  min-height: 100vh;
  min-width: 100vw;
  padding: 1.5rem;
  background-color: $color-secondary;
  user-select: none;
  
}
</style>
