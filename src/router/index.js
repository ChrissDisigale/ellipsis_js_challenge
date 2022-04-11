import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Movie from '../components/Movie.vue'
import Series from '../components/Series.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie',
    name: 'Movie',
    component: Movie
  },
  {
    path: '/series',
    name: 'Series',
    component: Series
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
