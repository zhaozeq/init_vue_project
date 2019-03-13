import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import mutations from './mutations'
import moduleA from './moduleA'

Vue.use(Vuex)
const RootStore = {
  state: {
    count: 1
  },
  actions,
  mutations
}
/* eslint-disable no-new */
export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  ...RootStore,
  modules: {
    moduleA
  }
})
