import Vue from 'vue'
import Vuex from 'vuex'
import {actions} from './action'
import {getters} from './getters'
import {mutations} from './mutation'
//import state from './state'
import utils from '../utils/utils'
console.log(utils)

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  blogslist: {
    blogs: [{
        title: 'myblog',
        content: 'this is my first chakshdjashdasdaksdhaksjdh dahsd'
      },
      {
        title: 'myblog',
        content: 'this is my first chakshdjashdasdaksdhaksjdh dahsd'
      },
    ]
  },
  user: {
    name: 'lei',
    induce: ['前端', 'hexo', '技术'],
    rizhi: 10,
    tags: 5,
    type: 2,
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
})
