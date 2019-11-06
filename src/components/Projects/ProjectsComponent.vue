<template>
  <div class="portfolio">
    <ProjectGrid :project="projects.ReactMovie" :class="{'slide-left': loading}"/>
    <ProjectGrid :project="projects.WeatherApp" :class="{'slide-right': loading}"/>
    <ProjectGrid :project="projects.portfolio" :class="{'slide-left': loading}"/>
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
                summary: "This application was built in React, using Weatherstack REST API. Designed to display weather updates day-by-day, it uses the location of the user to configure the current temperature of the area and five-day forecast.",
                img: 'weather.png',
                demo: 'https://weather-app-55951b.netlify.com',
                code: 'https://github.com/treramey/weather-app',
                technologies: 
                [
                    {name: 'HTML & CSS'},
                    {name: 'JavaScript'},
                    {name: 'SASS'},
                    {name: 'React'},
                    {name: 'REST API'},
                    {name: 'UI/UX'},
                ]
            },

            ReactMovie: 
            {
                name: 'React Movie App',
                summary: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. ",
                img: 'movie.png',
                demo: 'https://movieapp01233.netlify.com',
                code: 'https://github.com/treramey/TMDB-React',
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

            portfolio: 
            {
                name: 'portfolio',
                summary: "A single page application built using Vue.js and SASS with BEM methodology; this portfolio is designated as a homepage for my recent works and designs. I wanted a simple and elegant look that showed my talent and style to any visiting guests interested in my services. ",
                img: 'portfolio.png',
                demo: '#',
                code: 'https://github.com/treramey/Vue-Project',
                technologies: 
                [
                    {name: 'HTML5'},
                    {name: 'CSS & SASS'},
                    {name: 'JavaScript'},
                    {name: 'Vue.JS'},
                    {name: 'UI/UX Design'},
                    {name: 'Responsive'},
                    {name: 'UI/UX Animations'},
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
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 768px){
            flex-flow: column wrap;
        }

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