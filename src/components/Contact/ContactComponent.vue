<template>
  <div class="wrapper">
    <ContactForm :class="{'slide-left': loading}" />
  </div>
</template>

<script>
import ContactForm from "./ContactForm";

export default {
  components: { ContactForm },
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 400);
  }
};
</script>

<style lang="scss">
.slide-left {
  opacity: 0;
  visibility: hidden;
  // transform: translateX(-5rem)
}
</style>