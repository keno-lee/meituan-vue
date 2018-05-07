import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '@/components/home'
import Market from '@/components/market'
import Cart from '@/components/cart'
import User from '@/components/user'

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
