import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "dashboard" */ '../components/Dashboard.vue'),
    children: [
      {
        path: '/',
        component:() => import(
          '../components/Home.vue'
        )
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router