import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/about'
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "portfolio" */ '../views/About.vue')

  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import(/* webpackChunkName: "portfolio" */ '../views/Portfolio.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "portfolio" */ '../views/Contact.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
