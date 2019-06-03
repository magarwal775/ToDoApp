import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state : {
    userid: '123'
  },
  mutations : {
    change(state,item) {
      state.userid= item.name
    }
  }
})
