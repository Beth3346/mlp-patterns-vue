import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Elements from './views/Elements'
import Compounds from './views/Compounds'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/elements',
      name: 'elements',
      component: Elements
    },
    {
      path: '/compounds',
      name: 'compounds',
      component: Compounds
    }
  ]
})
