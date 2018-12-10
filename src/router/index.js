import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home.vue'
import About from '../components/test/About.vue'
import User from '../components/test/User.vue'
import Phone from '../components/header/Phone.vue'
import Computer from '../components/header/Computer.vue'
import Tablet from '../components/header/Tablet.vue'
import Header from '../components/header/Header.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'phone',
          component: Phone
        },
        {
          path: 'tablet',
          component: Tablet
        },
        {
          path: 'computer',
          component: Computer
        },
        {
          path: 'header',
          component: Header
        },
        {
          path: '',
          component: Phone
        }
      ]
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User
    }
  ]
})
