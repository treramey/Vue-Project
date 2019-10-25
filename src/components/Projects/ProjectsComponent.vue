<template>
  <div class="row portfolio">
    <ProjectGrid img="movieapp01233.png"/>
    <ProjectGrid img="weather-app.png"/>
  </div>
</template>

<script>


import ProjectGrid from './ProjectGrid'


export default {
  components:{ProjectGrid}
}
</script>

<style>
.row.portfolio {
    margin-top: 4rem
}

</style>