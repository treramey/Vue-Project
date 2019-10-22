<template>
  <main>
    <HeaderComponent>Portfolio</HeaderComponent>
    <SubHeaderComponent>Have a look at some of my latest work!</SubHeaderComponent>
    <ProjectsComponent></ProjectsComponent>
  </main>
</template>

<script>
import ProjectsComponent from "../components/ProjectsComponent";
import HeaderComponent from "../components/HeaderComponent";
import SubHeaderComponent from "../components/SubHeaderComponent";

export default {
  components: { ProjectsComponent, HeaderComponent, SubHeaderComponent }
};
</script>
