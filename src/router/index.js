import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import('../views/Home.vue')
  },
  {
    path: '/class',
    name: 'class',
    component:  ()=>import('../views/class.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: ()=>import('../views/cart.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: ()=>import('../views/mine.vue')
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
