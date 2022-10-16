import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailGame from '../views/DetailGame.vue'
import NotFoundPage from '../views/error/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:catchNotMatchPath(.*)',
      name: 'NotFound',
      component: NotFoundPage
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detail/:gameId',
      name: 'detail',
      component: DetailGame
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/error/NotFound.vue')
    }
  ]
})

export default router
