<template>
    <main class="about">
        <AboutHeader :class="{'slide-top':loading}" ><span>Hello, I'm </span><span>Trevor Ramey</span>  </AboutHeader>
        <AboutSubHeader :class="{'slide-bottom':loading}" :text="'I\'m a software developer and designer. Follow my daily design work on Dribbble. You can also find me on Twitter, GitHub, and LinkedIn.'"/>
        <AboutButton :class="{'slide-bottom':loading}">View Projects</AboutButton>
    </main>
</template>

<script>
import AboutHeader from '../components/About/AboutHeader'
import AboutSubHeader from '../components/About/AboutSubHeader'
import AboutButton from '../components/About/AboutButton'
export default {
components:{ AboutButton, AboutSubHeader, AboutHeader},
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

    main.about{
        @include absoluteCenterAbout;
        width:96rem;
        text-align: center;

        @media only screen and (max-width: 62.5em)
        {
          width: 85%;
        }
        @media only screen and (max-width: 31.25em)
        {
            width: 100%;
        }

        .slide-top
      {
          opacity: 0;
          visibility: hidden;
          transform: translateY(-5rem)
      }
      .slide-bottom
      {
          opacity: 0;
          visibility: hidden;
          transform: translateY(5rem)
      }
    }

</style>