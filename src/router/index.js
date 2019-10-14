import Vue from 'vue'
import Router from 'vue-router'
import PuzzleGame from '@/views/puzzleGame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PuzzleGame',
      component: PuzzleGame
    }
  ]
})
