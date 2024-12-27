import { createMemoryHistory, createRouter } from 'vue-router'


const routes = [
  { path: '/', component: () => import('@/views/Home.vue') },
  { path: '/cart', component: () => import('@/views/Cart.vue') },
  { path: '/register', component: ()=>import('@/views/Register.vue')},
  { path: '/login', component: ()=>import('@/views/Login.vue')},
  { path: '/courses', component: ()=>import('@/views/Courses.vue')}
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router