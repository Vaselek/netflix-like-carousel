import Vue from 'vue'
import Router from 'vue-router'
import MovieCarousel from '@/components/MovieCarousel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MovieCarousel',
      component: MovieCarousel
    }
  ]
})
