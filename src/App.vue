<template>
  <div id="app">
    <!-- <Preloader v-if="isLoading"></Preloader> -->
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
// import Preloader from './components/Preloader'

export default {
  components: { NavComponent, Contact, Footer, ContactFooter },
  // data() {
  //   return {
  //     isLoading: true
  //   };
  // },
  // mounted() {
  //   setTimeout(() => {
  //     this.isLoading = false;
  //   }, 3000);
  // }
};
</script>
<style lang="scss">

.ConfootWrapper{
  position: absolute;
  bottom: 3px;
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
  @media (max-width: 400px) {
          min-height: none;
        }
}
</style>
