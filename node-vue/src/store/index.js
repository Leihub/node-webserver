import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import getters from './getter'
import mutations from './mutation'


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
  })