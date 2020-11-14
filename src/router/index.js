import { createRouter, createWebHashHistory } from 'vue-router'
const Category=()=>import('@/views/category/Category')
const Home=()=>import('@/views/home/Home')
const Profile=()=>import('@/views/profile/Profile')
const ShopCart=()=>import('@/views/shopCart/ShopCart')

const routes = [
  {path:'',redirect:'/home'},
  {path:'/home',component:Home},
  {path:'/profile',component:Profile},
  {path:'/category',component:Category},
  {path:'/shopCart',component:ShopCart}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
