<template>
    <main class="about">
        <AboutHeader><span>Hello, I'm </span><span>Trevor</span>  </AboutHeader>
        <AboutSubHeader :text="'I\'m a software developer and designer. Follow my daily design work on Dribbble. You can also find me on Twitter, GitHub, and LinkedIn.'"/>
        <AboutButton>View Projects</AboutButton>
    </main>
</template>

<script>
import AboutHeader from '../components/About/AboutHeader'
import AboutSubHeader from '../components/About/AboutSubHeader'
import AboutButton from '../components/About/AboutButton'
export default {
components:{ AboutButton, AboutSubHeader, AboutHeader}
}
</script>

<style lang="scss">

    main.about{
        @include absoluteCenter;
        width:86rem;
        text-align: center;

        @media only screen and (max-width: 62.5em)
        {
          width: 85%;
        }
        @media only screen and (max-width: 44.375em)
        {
          width: 75%;
        }
    }

</style>