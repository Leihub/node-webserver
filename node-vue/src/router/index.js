import Vue from 'vue'
import Router from 'vue-router'
import Archive from '../components/archive'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Archive',
      component: Archive
    }
  ]
})
