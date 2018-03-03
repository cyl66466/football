import Util from '../../util/common'
import * as types from '../types'
const state = {
  token:'',
  fromPath:'',
  toPath:''
}

const mutations = {
  [types.CHANGE_TOKEN] (state,res) {
    state.token = res
  },
  GET_fromPath(state,res) {
    state.fromPath = res
  },
  GET_toPath(state,res) {
    state.toPath = res
  }
}


export default {
  state,
  mutations
}
