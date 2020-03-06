import Vue from 'vue'
import Router from 'vue-router'
import PuzzleGame from '@/views/puzzleGame'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/',
      name: 'sidebar',
      component: PuzzleGame,
      meta: {
          title: '首页'
      },
      children: [
      ]
    },
  
    {
      path: '/sidebar11',
      name: 'sidebar11',
      component:PuzzleGame,
      meta: {
          title: '首页1'
      },
      children: [
          {
              path: '/sideba1-1',
              name: 'sidebar11-1',
              component: PuzzleGame,
              meta: {
                  title: '首页11-1'
              }
          }
      ]
    },
  
    {
      path: '/sidebar21',
      name: 'sidebar21',
      component: PuzzleGame,
      meta: {
          title: '首页21'
      },
      children: []
    },
  
    {
      path: '/sidebar31',
      name: 'sidebar31',
      component: PuzzleGame,
      meta: {
          title: '首页31'
      },
      children: []
    }
  ]
})
