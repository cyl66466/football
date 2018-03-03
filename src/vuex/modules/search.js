import Util from '../../util/common'
import * as types from '../types'
const state = {
    historySearch : []
}

const mutations = {
    CHANGE_historySearch (state,res) {      
        let index = state.historySearch.indexOf(res);
        if(index != -1 ){
            state.historySearch.splice(index,1)               
        }
        state.historySearch.unshift(res); 
    },
    DELETE_historySearch (state,res) {
        state.historySearch.length= 0;
    }
}

export default {
    state,
    mutations
}
