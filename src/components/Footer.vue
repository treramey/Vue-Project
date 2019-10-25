<template>
  <footer class="footer">
    <div class="Bar">
      <div class="footer__item">
        <div>&copy; 2019 Trevor Ramey</div>
        <div></div>
        <div>Looking to start a project?</div>
        <div>Let's talk</div>   
      </div>
       
    </div>
    
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  position: absolute;
  bottom: -5.5rem;
  left: 0;
  width: 100%;
  padding: 2rem;
  background: $color-primary;
  color: $color-white;
  font-size: 1.6rem;
  text-align: center;
  font-family: $font-secondary;
  border-top: 1px solid $color-primary;
  
  &__item {
    display: grid;
    grid-template-columns: 152px auto 216px 112px;


    @media only screen and (max-width: 50em) {
      display: grid;
      grid-template-columns: 1fr;
      padding: 1em;
      
    }
  }
  // .bar{
  //   display: grid;
  //   grid-template-columns: 100px auto 100px 100px;
  // }
}
</style>