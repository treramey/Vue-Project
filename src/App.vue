<template>
  <div id="app">
    <div class="hero">
      <NavComponent />
      <contact />
      <router-view />
    </div>
    <ContactFooter class="ConfootWrapper"/>
    <Footer />
  </div>
</template>
<script>
import NavComponent from "./components/NavComponent";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ContactFooter from './components/ContactFooter'

export default {
  components: { NavComponent, Contact, Footer, ContactFooter }
};
</script>
<style lang="scss">

.ConfootWrapper{
  position: absolute;
  bottom: 6px;
  width: 100%;
}
.hero {
  margin: 6em auto;
  padding: 1.5rem;
}

#app {
  position: absolute;
  min-height: 100vh;
  min-width: 100vw;
  background-color: $color-secondary;
  user-select: none;
}
</style>
