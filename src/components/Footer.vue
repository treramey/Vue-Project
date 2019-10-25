<template>
  <footer class="footer">
    <div class="footer__item">
      <div class="footer__name">&copy; 2019 Trevor Ramey</div>
      <div class="footer__project">Looking to start a project? Let's talk</div>   
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  position: absolute;
  bottom: -7.5rem;
  left: 0;
  width: 100%;
  padding: 3rem;
  background: $color-primary;
  color: $color-white;
  font-size: 1.6rem;
  font-family: $font-secondary;

  &__item {
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 50em) {
      flex-direction: column;
    }
  }
  &__name{
    flex:1
  }
}
</style>