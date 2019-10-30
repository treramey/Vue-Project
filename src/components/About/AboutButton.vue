<template>
  <router-link to="/portfolio" class="button">
      <button class="button__top"><slot/></button>
      <button class="button__bottom"><slot/></button>
  </router-link>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.button{
    display: block;
    margin:auto;
    margin-top:8rem;
    height: 5rem;
    width:16rem;
    text-decoration: none;
    overflow: hidden;
    

    *{
        transition: all 150ms;
        display: block;
        width: 100%;
        height: 4.5rem;
        line-height: 1;
        font-size: 2.5rem;
        border:2px solid $color-white;
        background-color: $color-white;
        color:$color-secondary;
        font-family: $font-primary;
        border-radius: 6px;
    }
    
    &__bottom{
        margin-top: 1rem;
        background-color: $color-secondary;
        color:#e53332;
    }

    &:hover * {
        transform: translateY(-5.5rem);
        cursor:pointer;
    }
}

</style>