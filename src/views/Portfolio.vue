<template>
  <main>
    <div class="wrapper">
      <ProjectHeader :class="{ 'slide-top': loading }">Portfolio</ProjectHeader>
      <ProjectSubHeader :class="{ 'slide-top': loading }"
        >Check out my latest web software development portfolio projects!</ProjectSubHeader
      >
      <ProjectsComponent></ProjectsComponent>
    </div>
  </main>
</template>

<script>
import ProjectsComponent from "../components/Projects/ProjectsComponent";
import ProjectHeader from "../components/Projects/ProjectHeader";
import ProjectSubHeader from "../components/Projects/ProjectSubHeader";

export default {
  components: { ProjectsComponent, ProjectHeader, ProjectSubHeader },
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 200);
  }
};
</script>

<style lang="scss">
.wrapper {
  max-width: 60vw;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
}

.slide-top {
  opacity: 0;
  visibility: hidden;
  transform: translateY(-5rem);
}
</style>
