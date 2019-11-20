<template>
  <div id="app">
    <ThreeComponent></ThreeComponent>
      <!-- <Preloader v-if="isLoading"></Preloader> -->
      <div class="hero">
        <NavComponent />
        <contact />
        <router-view />
      </div>
      <ContactFooter class="ConfootWrapper" />
      <Footer />
  </div>
</template>
<script>
import NavComponent from "./components/NavComponent";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ContactFooter from "./components/ContactFooter";
import ThreeComponent from "./components/ThreeComponent"

export default {
  components: { NavComponent, Contact, Footer, ContactFooter, ThreeComponent}
};
</script>
<style lang="scss">
.ConfootWrapper {
  position: absolute;
  bottom: 3px;
  width: 100%;
}
.hero {
  margin: 8em auto;
}


#app {
  position: absolute;
  min-height: 100vh;
  min-width: 100vw;
  // background: linear-gradient(to bottom right, rgba(255, 17, 0, 0.171),
  //                           rgba(38, 0, 255, 0.13)),
  //                           url(/img/northern-lights.svg);
  // background-image: url(/img/05.svg);
  // background-size: cover;
  // background-position: center; /* Center the image */
  // background-repeat: no-repeat; /* Do not repeat the image */
  // background-size: cover; /* Resize the background image to cover the entire container */
  
  user-select: none;
  @media (max-width: 400px) {
    min-height: none;
  }
}
</style>
