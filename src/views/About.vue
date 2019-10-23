<template>
    <main class="about">
        <AboutHeader>Hello, my name is Trevor Ramey. </AboutHeader>
        <AboutSubHeader :text="'I\'m a software developer and designer.'"/>
        <AboutSubHeader :text="'Follow my daily design work on Dribbble. You can also find me on Twitter, GitHub, and LinkedIn.'"/>
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
    }

</style>