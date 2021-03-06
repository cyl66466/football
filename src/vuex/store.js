//store.js
import Vue from 'vue'
import Vuex from 'vuex'

// 头部分类
import detail from './modules/detail'
import category from './modules/category'
import login from './modules/login'
import search from './modules/search'
import sayBall from './modules/sayBall'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    detail,
    category,
    login,
    search,
    sayBall
  }
})
