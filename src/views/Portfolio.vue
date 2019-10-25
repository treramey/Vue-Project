<template>
  <main>
    <ProjectHeader>Portfolio</ProjectHeader>
    <ProjectSubHeader>Have a look at some of my latest work!</ProjectSubHeader>
    <ProjectsComponent></ProjectsComponent>
  </main>
</template>

<script>
import ProjectsComponent from "../components/Projects/ProjectsComponent";
import ProjectHeader from "../components/Projects/ProjectHeader";
import ProjectSubHeader from "../components/Projects/ProjectSubHeader";

export default {
  components: { ProjectsComponent, ProjectHeader, ProjectSubHeader }
};
</script>
