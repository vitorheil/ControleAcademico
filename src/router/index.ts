import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import UsersView from "../views/UsersView.vue"
import HomeAdmin from "../components/HomeAdmin.vue"
import LoginAdmin from "../components/LoginAdmin.vue"
const routes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    component: LoginAdmin,
    name: "LoginAdmin"
  },
  {
    path: "/home",
    name: "HomeAdmin",
    component: HomeAdmin,
  },
  {
    path: "/users",
    component: UsersView,
    name: "UsersView"
  },
 
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
