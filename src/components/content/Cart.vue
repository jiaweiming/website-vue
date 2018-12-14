<template>
  <div id="cart">
    <h2>{{message}}</h2>
    <div class="cart" v-if="totalList.length">
      <table class="table table-dark">
        <thead>
        <tr>
          <th scope="col">
            <label for="all-checkbox">全选</label>
            <input type="checkbox" id="all-checkbox" @click="checkAll()" v-model="checkedAll">
          </th>
          <th scope="col">名称</th>
          <th scope="col">数量</th>
          <th scope="col">单价</th>
          <th scope="col">总价</th>
          <th scope="col">操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in addedToCart">
          <th>
            <label :for="item.id">选择</label>
            <input type="checkbox" :id="item.id" :value="item" v-model="checked"
                   @click="!checked.includes(item) ? selectSingleInCart(item) : deleteSingleInCart(item)">
          </th>
          <td>{{item.name}}</td>
          <td><span @click="item.count > 1 ? item.count-- : 1">-</span>
            <span class="count" v-model="item.count">{{item.count}}</span>
            <span @click="item.count++">+</span>
          </td>
          <td>{{item.price}}</td>
          <td>{{item.price * item.count}}</td>
          <td>
            <button class="btn btn-danger" @click="removeSingleInList(item,index)" :disabled="!checked.includes(item)">
              删除
            </button>
          </td>
        </tr>
        </tbody>
      </table>
      <p>
        {{productsTotalPrice}}总计{{totalCount}}件商品，共{{totalPrice}}元
      </p>
    </div>
    <div v-else>
      购物车空空如也、、、
    </div>

  </div>
</template>
<script>
  import $ from 'jquery'
  import store from '../../vuex/stores'
  import {mapGetters, mapMutations} from 'vuex'

  const formatter = new Intl.NumberFormat('cn-CN', {
    style: 'currency',
    currency: 'CNY',
    minimumFractionDigits: 2
  });
  //  formatter.format(333)
  export default {
    data() {
      return {
        message:'Shopping Cart',
        totalList: store.state.addedToCart,
        totalPrice: 0,
        totalCount: 0,
        checkedAll: false,
        checked: store.state.selectedInCart
      }
    },
    methods: {
      ...mapMutations([
        'selectAllInCart',
        'selectSingleInCart',
        'deleteSingleInCart',
        'removeSingleInList',
        'unSelectAllInCart'
      ]),
      checkAll: function () {
        let _this = this;
        if (this.checkedAll) {
          this.checked = []
        } else {
          this.checked = [];
          this.totalList.forEach(function (item) {
            _this.checked.push(item)
          })
        }
        if (this.checked.length === this.totalList.length) {
          this.checkedAll = true
        }
      }
    },
    computed: {
      ...mapGetters([
        'addedToCart',
        'selectedInCart'
      ]),
      productsTotalPrice: function () {
        let totalCount = 0;
        let totalPrice = 0;
        this.checked.map((item) => {
          totalCount += Number(item.count);
          totalPrice += Number(item.count) * Number(item.price)
        });
        this.totalCount = totalCount;
        this.totalPrice = formatter.format(totalPrice)
      }
    }
  }
</script>
<style lang="css">
  .cart {
    text-align: left;
    flex: 1 0 auto
  }
</style>
