<template>
  <div class="portfolio">
    <ProjectGrid :project="projects.ReactMovie" :class="{'slide-left': loading}"/>
    <ProjectGrid :project="projects.WeatherApp" :class="{'slide-right': loading}"/>
    <ProjectGrid :project="projects.portfolio" :class="{'slide-left': loading}"/>
    <ProjectGrid :project="projects.CryptoDashboard" :class="{'slide-right': loading}"/>
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
                summary: "This poject was built with React, using Weatherstack's REST API. Designed to display weather updates day-by-day, it uses the location of the user to configure the current temperature, five-day forecast and displays the data to the user.",
                img: 'weather.png',
                imgCard: 'weatherCard.png',
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

            CryptoDashboard: 
            {
                name: 'Crypto Dashboard',
                summary: "This project was built with React, using CryptoCompare API. Designed to graph and display pricing data of crypto coins, it allows the user to save and configure their preferred currencies. Then the pricing data is graphed and presented to the user.",
                img: 'crypto.png',
                imgCard: 'cryptoCard.png',
                demo: '',
                code: '',
                technologies: 
                [
                    {name: 'HTML & CSS'},
                    {name: 'JavaScript'},
                    {name: 'Styled-components'},
                    {name: 'React'},
                    {name: 'CryptoCompare API'},
                    {name: 'Responsive'},
                    {name: 'HighCharts'},
                    {name: 'Lodash'},
                    {name: 'React Context'},
                ]
            },

            ReactMovie: 
            {
                name: 'React Movie App',
                summary: "This project was built with React, using The Movie Database API. Designed to pull movie information from user input, it displays the latest IMDB rating along with the running time, budget, revenue, and lists the actors that appear in the movie.",
                img: 'movie.png',
                imgCard: 'movieCard.png',
                demo: 'https://movieapp01233.netlify.com',
                code: 'https://github.com/treramey/TMDB-React',
                technologies: 
                [
                    {name: 'HTML & CSS'},
                    {name: 'JavaScript'},
                    {name: 'React'},
                    {name: 'The Movie Database API'},
                    {name: 'Responsive'},
                ]
            },

            portfolio: 
            {
                name: 'portfolio',
                summary: "A single page application built using Vue.js and SASS with BEM methodology; this portfolio is designated as a homepage for my recent works and designs. I wanted a simple and elegant look that showed my talent and style to any visiting guests interested in my services. ",
                img: 'portfolio.png',
                imgCard: 'portfolioCard.png',
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