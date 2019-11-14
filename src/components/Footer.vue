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
  bottom: -6.9rem;
  left: 0;
  width: 100%;
  height: auto;
  padding: 3rem;
  background: $color-primary;
  color: $color-white;
  font-size: 1.6rem;
  font-family: $font-secondary;
  user-select: text; 
  border-top: 1px solid $color-primary-dark-2;
  @media screen and (max-width: 768px) {
    padding: 2rem;
    bottom: -7.9rem;
  } 

  &__item {
    display: flex;
    flex-direction: row;
    @media only screen and (max-width: 50em) {
      flex-direction: column;
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
  &__name{
    flex:1
  }
}
</style>