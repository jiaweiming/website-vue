<template>
  <div id="cart">
    <h3 class="cart-title">{{message}}</h3>
    <div class="cart" v-if="totalList.length">
      <h6>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange"></el-checkbox>
        全选
      </h6>
      <hr style="margin: 10px 0">
      <ul>
        <el-checkbox-group v-model="checked" @change="handleCheckedChange">
          <li v-for="(item,index) in totalList">
            <div class="product-single-cart">
              <div class="top-icons">
                <el-checkbox :label="item" :key="index" :id="''+item.id" :value="item.id" v-model="checked">
                </el-checkbox>
                <i class="el-icon-delete" @click="removeOne(item.id,index,item)" :disabled="!checked.includes(item)"></i>
              </div>
              <div class="product-single-desc">
                <div class="left-img">
                  <img style="width: 100%" :src="item.image" :alt="item.name">
                </div>
                <div class="right-title">
                  <h6>{{item.name}}</h6>
                  <h6>{{format.format((item.price) / 100)}}</h6>
                  <div class="bottom-nav">
                    <p class="single-total-price">{{format.format((item.price) / 100 * item.count)}}</p>
                    <p class="count-number">
                      <span class="num-count" @click="item.count > 1 ? item.count-- : 1"><i
                        class="el-icon-minus"></i></span>
                      <span class="count num-count" v-model="item.count">{{item.count}}</span>
                      <span class="num-count" @click="item.count++"><i class="el-icon-plus"></i></span>
                    </p>
                    <div style="clear: both"></div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </el-checkbox-group>
      </ul>
      <p>
        {{productsTotalPrice}}总计 <b>{{totalCount}}</b>件商品，共 <b>{{totalPrice}}</b> 元
      </p>
      <div id="pay">
          <el-button class="payment-button" type="primary" :disabled="!this.checked.length">
            <router-link :to="this.checked.length? '/payment':'/cart'">结算</router-link>
          </el-button>
      </div>
    </div>
    <div v-else>
      购物车空空如也、、、
      <p>
        <router-link to="/">逛一逛</router-link>
      </p>
    </div>

  </div>
</template>
<script>
  import Vue from 'vue'
  import store from '../../vuex/stores'
  import {mapGetters, mapMutations} from 'vuex'

  const formatter = new Intl.NumberFormat('cn-CN', {
    style: 'currency',
    currency: 'CNY',
    minimumFractionDigits: 2
  });

  let cartList = [];
  store.state.addedToCart.map((item, index) => {
    cartList.push(item)
  });

  export default {
    data() {
      return {
        format: formatter,
        message: 'Shopping Cart',
        totalList: store.state.addedToCart,
        totalPrice: 0,
        totalCount: 0,
        checked: [],
        checkAll: false,
        cartProducts: cartList,
        isIndeterminate: true,
      }
    },
    methods: {
      ...mapMutations([
        'selectAllInCart',
      ]),
      handleCheckAllChange(val) {
        this.checked = val ? cartList : [];
        this.isIndeterminate = false;
      },
      handleCheckedChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cartProducts.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cartProducts.length;
      },
      removeOne(id, index,val) {
        this.checked.map((item, index) => {
          if (item.id === id) {
            this.checked.splice(index, 1)
          }
        });
        this.totalList.map((item, index) => {
          if (item.id === id) {
            this.totalList.splice(index, 1)
          }
        });
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
        this.totalPrice = formatter.format(totalPrice/100);
      }
    },
    mounted:function () {
      Vue.nextTick(function () {

      })
    }
  }
</script>
<style lang="css">
  h6, label {
    margin: 0;
  }

  .cart-title {
    margin: 10px 0;
  }

  p {
    margin-bottom: 0;
  }

  .num-count {
    width: 24px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    border: 1px solid #ccc;
  }

  #pay{
    display: flex;
    justify-content: flex-end;
  }
  .payment-button a {
    text-decoration: none;
    color: #fff;
  }
  .count {
    color: #2c3e50;
    width: 34px;
    height: 20px;
    text-align: center;
    display: block;
    border-left: none;
    border-right: none;
  }

  .cart {
    text-align: left;
    flex: 1 0 auto;
    padding: 0 10px 10px;
  }

  .el-checkbox-group {
    font-size: 16px;
  }

  .el-checkbox__label {
    display: none;
  }

  .product-single-cart {
    border-bottom: 1px solid #ddd;
    padding-bottom: 5px;
  }

  .product-single-desc {
    display: flex;
    justify-content: space-between;
  }

  .left-img {
    width: 35%;
  }

  .right-title {
    width: 63%;
    position: relative;
  }

  .top-icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
  }

  .bottom-nav {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
  }

  .count-number {
    float: right;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .single-total-price {
    float: left;
    left: 0;
    bottom: 0;
  }
</style>
