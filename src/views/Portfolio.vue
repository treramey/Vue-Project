<template>
  <main>
    <HeaderComponent>Portfolio</HeaderComponent>
    <SubHeaderComponent>Have a look at some of my latest work!</SubHeaderComponent>
    <ProjectsComponent></ProjectsComponent>
  </main>
</template>

<script>
import ProjectsComponent from "../components/Projects/ProjectCompent";
import HeaderComponent from "../components/Projects/HeaderComponent";
import SubHeaderComponent from "../components/Projects/SubHeaderComponent";

export default {
  components: { ProjectsComponent, HeaderComponent, SubHeaderComponent }
};
</script>
