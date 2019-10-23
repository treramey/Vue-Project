<template>
  <div class="row portfolio">
    <ProjectComponent img="movieapp01233.png"/>
    <ProjectComponent img="weather-app.png"/>
  </div>
</template>

<script>


import ProjectComponent from './ProjectCompent'


export default {
  components:{ProjectComponent}
}
</script>

<style>
.row.portfolio {
    margin-top: 4rem
}

</style>