import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex);

const state = {
  totalCount: 0,
  data: '',
  show:false,
  isBuyNow:false,
  showPopup:false,
  OrderTotalPrice:'',
  selectedInCart:[],
  orderAddress:{
    default:{userName:'张三',phoneNumber:'13912345678',address:'上海市松江区泗泾镇某某路518号'},
    list:[
      {userName:'李四',phoneNumber:'13912345678',address:'上海市松江区泗泾镇四通路518号'},
      {userName:'王五',phoneNumber:'13998766789',address:'上海市松江区九亭镇横港路815号'},
      {userName:'陈六',phoneNumber:'13900001111',address:'上海市松江区佘山镇全周路134号'}
      ]},
  addedToCart: [],
};

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});

export default store

