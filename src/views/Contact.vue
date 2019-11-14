<template>
    <main>
        <div class="wrapper">
          <ContactHeader :class="{'slide-top':loading}">Get in touch</ContactHeader> 
          <ContactSubHeader :class="{'slide-top':loading}">
            If you wanna get in touch, talk to me about a project collaboration or just say hi. Fill up the awesome form below or send an email me@treramey.dev and ~let's talk. 
          </ContactSubHeader>
          <ContactComponent/>
        </div>
    </main>
</template>

<script>
import ContactHeader from '../components/Contact/ContactHeader';
import ContactSubHeader from '../components/Contact/ContactSubHeader';
import ContactComponent from '../components/Contact/ContactComponent';


export default {
  components:{ContactHeader, ContactSubHeader, ContactComponent},
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

  .wrapper{
      max-width: 60vw;
      margin: 0 auto;
      @media (max-width: 768px) {
          max-width:100%;
          text-align:center;
        }
    .slide-top
      {
          opacity: 0;
          visibility: hidden;
          transform: translateY(-5rem)
      }
  }
  

</style>