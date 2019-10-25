<template>
  <div class="row portfolio">
    <ProjectGrid img="movieapp01233.png" :class="{'slide-left': loading}"/>
    <ProjectGrid img="weather-app.png" :class="{'slide-right': loading}"/>
  </div>
</template>

<script>


import ProjectGrid from './ProjectGrid'


export default {
  components: {ProjectGrid},
    data(){return{
        loading: true
    }},
    mounted()
    {
        setTimeout(() => 
        {
            this.loading = false
        }, 400)
    }
}
</script>

<style lang="scss">
  .row.portfolio {
    margin-top: 4rem
  }
  .slide-left{
        opacity: 0;
        visibility: hidden;
        transform: translateX(-5rem)
    }
  .slide-right{
        opacity: 0;
        visibility: hidden;
        transform: translateX(5rem)
    }

</style>