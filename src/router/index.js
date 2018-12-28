import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home.vue'
import User from '../components/content/User.vue'
import Header from '../components/header/Header.vue'
import Cart from '../components/content/Cart.vue'
import Main from '../components/home/Main.vue'
import Product from '../components/content/Product.vue'
import Collection from '../components/content/Collection.vue'
import Payment from '../components/content/Order.vue'
import Address from '../components/content/Address.vue'
import PayMethods from '../components/module/PayMethods.vue'
import Search from '../components/content/Search.vue'
import Rate from '../components/module/Rate.vue'
import NotFound from '../components/module/NotFound.vue'

Vue.use(Router);

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      component: Main,
      children: [
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
      path: '/products/:id',
      component: Product
    },
    {
      path: '/collections/:query',
      component: Collection
    },
    {
      path: '/collections/:query/products/:id',
      component: Product,
    },
    {
      path: '/account',
      component: User,
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
      component: Address,
    },
    {
      path: '/payment',
      component: PayMethods
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/rate-:id',
      component: Rate
    },
    {
      path: '*',
      component: NotFound
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
