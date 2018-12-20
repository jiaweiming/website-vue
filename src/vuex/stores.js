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
  addedToCart: [
    // {id: 1001, name: 'Romantic Leaves Cold Shoulder Dress', count: '3', price: 36999, image:'https://cdn.shopify.com/s/files/1/2350/7085/files/Lapisara_Intarasut.jpg?9537767370978287527'},
    // {id: 1002, name: 'Elegant Panel Sleeveless Dress', count: '2', price: 69999, image:'https://cdn.shopify.com/s/files/1/2350/7085/files/ALEXANNE.jpg?9202050328886840239'},
    // {id: 1003, name: 'Escape Off-the-shoulder Floral Dress', count: '4', price: 79999, image:'https://cdn.shopify.com/s/files/1/2350/7085/files/Pichana_Yoosuk.jpg?9537767370978287527'}

    ],
};

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});

export default store

