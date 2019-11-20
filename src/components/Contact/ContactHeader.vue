<template>
  <h2 class="header">
      <slot></slot>
      <!-- <div><button @click="showAlert">Hello world</button></div> -->
  </h2>
  
</template>

<script>
export default {
    // for testing
    // methods: {
    //         showAlert() {
    //             // Use sweetalert2
    //             this.$swal("Thank you for getting in touch!", "I'll make sure to contact you as soon as possible!", "success")
    //         },
    //     },

}
</script>

<style lang="scss">
    .header{
        margin-top: 2rem;
        font-size:5rem;
        color:$color-white;
        letter-spacing: 4px;
        user-select: text;
        text-shadow: 2px 2px 0 rgba(0,0,0,.15);
        font-weight: bold;


        opacity: 1;
        visibility: visible;
        transition: all 300ms ease-out;
    }
</style>