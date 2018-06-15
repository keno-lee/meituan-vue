import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/pages/home'
import Market from '@/pages/market'
import Cart from '@/pages/cart'
import User from '@/pages/user'

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/market/:id?',
      component: Market
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/user',
      component: User
    }
  ],
  linkActiveClass:"mui-active"
})
