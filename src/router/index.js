import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home.vue'
import User from '../components/content/User.vue'
import Tablet from '../components/header/Tablet.vue'
import Header from '../components/header/Header.vue'
import Cart from '../components/content/Cart.vue'
import Main from '../components/home/Main.vue'
import Product from '../components/content/Product.vue'
import Collection from '../components/content/Collection.vue'
import Payment from '../components/content/Payment.vue'
import Address from '../components/content/Address.vue'
import NewAddress from '../components/module/NewAddress.vue'
import PayMethods from '../components/module/PayMethods.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: 'tablet',
          component: Tablet
        },
        {
          path: 'header',
          component: Header
        }
      ]
    },
    {
      path: '',
      component: Home
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User
    },
    {
      path: '/products/:id',
      name: 'products',
      component: Product
    },
    {
      path: '/collections/:query',
      name: 'collections',
      component: Collection
    },
    {
      path: '/account',
      component:User,
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/order',
      component: Payment
    },
    {
      path: '/address',
      component:Address,
    },
    {
      path: '/newaddress',
      componnet:NewAddress
    },
    {
      path:'/payment',
      component:PayMethods
    }

  ]
})
