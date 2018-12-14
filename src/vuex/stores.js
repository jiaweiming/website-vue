import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex);

const state = {
  count: 0,
  data: '',
  show:false,
  selectedInCart:[],
  addedToCart: [
    {id: 1001, name: '袜子', count: '3', price: 300},
    {id: 1002, name: '裤子', count: '2', price: 600},
    {id: 1003, name: '鞋子', count: '4', price: 900}],
};

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});

export default store

