import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BrowseView from '../views/Browse.vue'
import CartView from '../views/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/browse',
    name: 'Browse',
    component: BrowseView
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
