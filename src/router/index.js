import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

/* 避免 ) NavigationDuplicated: Avoided redundant navigation to current location: "/dashboard" */
let originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location) {
  return originalPush.call(this, location).catch((err) => {});
};
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
    component: () => import( /* webpackChunkName: "dashboard" */ '../components/Dashboard'),
    children: [{
        path: '',
        component: () => import(
          '../components/Home'
        ),
        meta: [{
          name: "首页",
          to: "/dashboard"
        }],
      },
      {
        path: "/userlist",
        component: () => import("../components/userlist"),
        meta: [{
            name: "首页",
            to: "/dashboard"
          },
          {
            name: "数据管理",
            to: ""
          },
          {
            name: "用户列表",
            to: ""
          },
        ],
      },
      {
        path: "/shoplist",
        component: () => import("../components/ShopList"),
        meta: [{
            name: "首页",
            to: "/dashboard"
          },
          {
            name: "数据管理",
            to: ""
          },
          {
            name: "商家列表",
            to: ""
          },
        ],
      },
      {
        path: "/foodlist",
        component: () => import("../components/foodlist"),
        meta: [{
            name: "首页",
            to: "/dashboard"
          },
          {
            name: "数据管理",
            to: ""
          },
          {
            name: "食品列表",
            to: ""
          },
        ],
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router