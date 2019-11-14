<template>
  <div class="project">
    <div class="project__item">
      <a class="project__link" @click="openModal">
        <img class="project__img" :src="'/img/' + project.img" alt="Project Image" />
        <div class="project__overlay">
          <div class="project__buttons">
            <div class="project__button">View Project</div>
          </div>
        </div>
      </a>
    </div>
    <div class="project__background" :class="{'project__background--show': showProject}">  
      <div v-scroll-lock="showProject" class="project__modal" :class="{'project__modal--show': showProject}">
        <button class="project__close" @click="closeModal">
          <font-awesome-icon icon="times" class="project__close--times" />
        </button>

        <div class="project__left">
          <img class="project__img--modal" :src="'/img/' + project.img" alt="Project Image" />
        </div>
        <div class="project__right">
          <h3 class="project__name">{{ project.name }}</h3>
          <div class="project__label">Technologies</div>
          <div class="project__break"></div>
          <ul class="project__technologies">
            <li
              class="project__technology"
              v-for="(technology, index) in project.technologies"
              :key="index"
            >{{ technology.name }}</li>
          </ul>
          <div class="project__label">About</div>
          <div class="project__break"></div>
          <p class="project__summary">{{ project.summary }}</p>
          <div class="project__buttonContainer">
            <a :href="project.demo" class="project__modalButton " target="_blank">
              <font-awesome-icon icon="external-link-alt" class="fa-fw"/> Demo
            </a>
            <a :href="project.code" class="project__modalButton" target="_blank">
              <font-awesome-icon icon="code" class="fa-fw"/> Code
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
  name: "modal",

  data() {
    return {
      showProject: false
    };
  },
  methods: {
    openModal() {
      this.showProject = true;
    },
    closeModal() {
      this.showProject = false;
    }
  }
};
</script>

<style lang="scss">
.project {
  flex: 1 0 40%;
  border-radius: 5px;
  overflow: hidden;
  margin: 2rem;
  box-shadow: 5px 5px 11px #121212;
  opacity: 1;
  transition: all 300ms ease-out;
  visibility: visible;

  &__item {
    position: relative;
  }

  &:hover &__overlay {
    opacity: 1;
    visibility: visible;
  }
  &:hover &__img {
    transform: scale(1.1);
  }

  &__link {
    cursor: pointer;
  }

  &__img {
    width: 100%;
    height: 100%;
    transition: all 200ms;
    &--modal {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 7px;
      @media only screen and (max-width: 45em) {
        object-fit: contain;
        height: auto;
      }
    }
  }
  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(transparent, rgba($color-black, 0.8));
    transition: all 200ms;
    opacity: 0;
    visibility: hidden;
    text-align: center;
    display: flex;
    align-items: flex-end;
  }
  &__buttons {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    @media only screen and (max-width: 31.25em) {
      bottom: 0.5rem;
    }
  }
  &__button {
    display: inline-block;
    text-decoration: none;
    font-family: $font-primary;
    font-size: 3.5rem;
    letter-spacing: 1px;
    background-color: rgba(#333333, 0.9);
    border: none;
    border-radius: 3px;
    padding: 0.5rem 2rem;
    transition: all 200ms;
    padding: 4.5rem 0;
    width: 100%;
    color: $color-white;

    @media only screen and (max-width: 31.25em){
    }

    svg {
      margin-right: 0.5rem;
    }
  }

  &__background {
    position: fixed;
    top: 0;
    left: 0;
    z-index: $layer-modal;
    width: 100%;
    height: 100%;
    background-color: rgba($color-black, 0.3);
    opacity: 0;
    visibility: hidden;
    transition: all 300ms $cubic-bezier-primary;

    &--show {
      opacity: 1;
      visibility: visible;
    }
  }

  &__modal {
    @include absoluteCenter;
    width: 120rem;
    height: 60rem;
    background-color: $color-primary;
    user-select: text;
    box-shadow: 0px 0px 11px #121212;
    border-radius: 5px;
    opacity: 0;
    transition: all 300ms 200ms $cubic-bezier-primary ;
    transform: translate(-50%, -50%) scale(.25);
    &--show 
      { 
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
      }

    @media only screen and (max-width: 76em) {
      width: 95%;
      min-height: 50rem;
    }
    @media only screen and (max-width: 45em) {
      width: 43rem;
      min-height: auto;
      overflow: auto;
    }
    @media only screen and (max-width: 25em) {
      width: 38rem;
    }
  }

  &__close {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    background-color: transparent;
    border: none;
    color: $color-white;
    font-size: 3rem;
    cursor: pointer;
    transition: all 200ms $cubic-bezier-primary;
    
    &--times{
      -webkit-filter: drop-shadow(0px 0px 1px #000);
    }

    &:hover {
      transform: scale(1.2);
    }
  }

  &__left {
    width:75rem;
    height: 100%;
    display: inline-block;

    @media only screen and (max-width: 56.25em) {
      width: 55%;
    }
    @media only screen and (max-width: 45em) {
      width: 100%;
      height: auto;
    }
  }

  &__right {
    width: calc(100% - 75.5rem);
    display: inline-block;
    vertical-align: top;
    padding: 1.5rem;
    color: $color-white;

    @media only screen and (max-width: 56.25em) {
      width: 45%;
    }
    @media only screen and (max-width: 45em) {
      width: 100%;
    }
  }

  &__label {
    margin-top: 1.5rem;
    margin-left: 5px;
    font-size: 1.9rem;
    color: $color-primary-text;
    letter-spacing: 1px;
  }

  &__name {
    font-size: 5rem;
    letter-spacing: 1px;
    font-weight: 300;
  }

  &__technologies {
    list-style: none;
  }

  &__technology {
    display: inline-block;
    margin: 3px;
    border: 1px solid $color-secondary;
    font-size: 1.8rem;
    padding: 8px 5px;
    letter-spacing: 1px;
    background-color: #313131;
    color: #999;
    border-width: 1px 1px 2px 1px;
    border-style: solid;
    border-color: #222;
    border-radius: 3px;
    box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);
    position: relative;
  }
  &__break {
    display: block;
    border-bottom: $color-text-nav-light 2px solid;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }

  &__summary {
    font-family: $font-secondary;
    font-size: 1.7rem;
    line-height: 1.5;
    color: rgb(209, 209, 209);
    overflow-y: scroll;
    height: 18rem;
    margin-top: 1.5rem;
    margin-left: 5px;
    white-space: pre-line;
  }

  &__modalButton {
    display: inline-block;
    margin: 10px;
    border: 1px solid $color-secondary;
    text-decoration: none;
    color: $color-white;
    font-size: 2.2rem;
    letter-spacing: 1px;
    border-width: 1px 1px 2px 1px;
    border-style: solid;
    background-color: $color-button;
    border-color: #222;
    border-radius: 3px;
    box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    transition: all 200ms;
    position: relative;
    &:hover {
      transform: translateY(2px);
      box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1),
        0 1px 1px 0 rgba(0, 0, 0, 0.09);
    }
  }

  &__buttonContainer {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    margin-top: 4rem;
  }
}
</style>