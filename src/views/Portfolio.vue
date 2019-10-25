<template>
  <main>
    <ProjectHeader :class="{'slide-top': loading}">Portfolio</ProjectHeader>
    <ProjectSubHeader :class="{'slide-top': loading}">Have a look at some of my latest work!</ProjectSubHeader>
    <ProjectsComponent></ProjectsComponent>
  </main>
</template>

<script>
import ProjectsComponent from "../components/Projects/ProjectsComponent";
import ProjectHeader from "../components/Projects/ProjectHeader";
import ProjectSubHeader from "../components/Projects/ProjectSubHeader";

export default {
  components: { ProjectsComponent, ProjectHeader, ProjectSubHeader },
  data(){return{
        loading: true
    }},
    mounted()
    {
        setTimeout(() => 
        {
            this.loading = false
        }, 200)
    }

}
</script>

<style lang="scss">
    .slide-top
    {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-5rem)
    }
</style>

