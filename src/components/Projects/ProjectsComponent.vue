<template>
  <div class="portfolio">
    <ProjectGrid :project="projects.ReactMovie" :class="{'slide-left': loading}"/>
    <ProjectGrid :project="projects.WeatherApp" :class="{'slide-right': loading}"/>
  </div>
</template>

<script>


import ProjectGrid from './ProjectGrid'


export default {
  components: {ProjectGrid},
    data(){return{
        loading: true,
        projects:{

          WeatherApp: 
            {
                name: 'Weather app',
                summary: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
                img: 'weather.png',
                demo: '#',
                code: '#',
                technologies: 
                [
                    {name: 'HTML & CSS'},
                    {name: 'JavaScript'},
                    {name: 'SASS'},
                    {name: 'Vue.JS'},
                    {name: 'MySQL'},
                    {name: 'Responsive'},
                    {name: 'UI/UX'},
                ]
            },

            ReactMovie: 
            {
                name: 'React Movie App',
                summary: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
                img: 'movie.png',
                demo: '#',
                code: '#',
                technologies: 
                [
                    {name: 'HTML & CSS'},
                    {name: 'JavaScript'},
                    {name: 'SASS'},
                    {name: 'Vue.JS'},
                    {name: 'MySQL'},
                    {name: 'Responsive'},
                    {name: 'UI/UX'},
                ]
            },
          
        }
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
  .portfolio {
    grid-area: main;
    display: flex;
    flex-wrap: wrap;
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