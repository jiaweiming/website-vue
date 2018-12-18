<template>
  <div id="cart">
    <h4 class="cart-title">{{message}}</h4>
    <div class="cart" v-if="totalList.length">
      <h6>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll"
                     v-on:change="selectAllInCart(checkAll)"
                     @change="handleCheckAllChange">
        </el-checkbox>
        全选
      </h6>
      <hr style="margin: 10px 0">
      <ul>
        <el-checkbox-group v-model="checked" @change="handleCheckedChange" >
          <li v-for="(item,index) in totalList">
            <div class="product-single-cart">
              <div class="top-icons">
                <el-checkbox :label="item" :key="index" :id="''+item.id" :value="item.id" v-model="checked" v-on:change="checked.includes(item) ? selectSingleInCart(item,index):selectSingleInCart(false)">
                </el-checkbox>
                <i class="el-icon-delete" @click="removeOne(item.id,index,item)"
                   :disabled="!checked.includes(item)" v-on:click="removeSingleInList(item,index,item.id)"></i>
              </div>
              <div class="product-single-desc">
                <div class="left-img">
                  <router-link :to="'/products/'+ item.id" >
                    <img style="width: 100%" :src="item.image" :alt="item.name">
                  </router-link>
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
      <div class="subtotal-price">
        <p>{{productsTotalPrice}}合计:<b style="color: #d73b3b">{{totalCount}}</b>件商品，共 <b style="color: #d73b3b">{{totalPrice}}</b> 元</p>
        <el-button class="payment-button" type="primary" :disabled="!this.checked.length" @click="submitCart">
          <!--<router-link :to="this.checked.length? '/order':'/cart'">结算</router-link>-->
          结算
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
        message: '我的购物车',
        totalList: store.state.addedToCart,
        totalPrice: 0,
        totalCount: 0,
        checked: store.state.selectedInCart,
        checkAll: false,
        cartProducts: cartList,
        isIndeterminate: true
      }
    },
    methods: {
      ...mapMutations([
        'selectAllInCart',
        'selectSingleInCart',
        'removeSingleInList'
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
      removeOne(id, index, val) {
        this.checked.map((item, index) => {
          if (item.id === id) {
            this.checked.splice(index, 1)
          }
        });
      },
      submitCart(){
        let that = this;
        document.getElementsByClassName('loading')[0].style.display = 'block';
        setTimeout(function () {
          document.getElementsByClassName('loading')[0].style.display = 'none';
          that.$router.push({path:'/order'})
        },300)
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
        this.totalPrice = formatter.format(totalPrice / 100);
      }
    },
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

  #pay {
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
  .subtotal-price{
    position: fixed;
    right:0;
    bottom:0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 11;
    background-color: #fff;
    padding: 0 10px;
  }
  .subtotal-price p{
    text-align: right;
    margin-bottom:0;
    margin-right: 20px;
  }
</style>
