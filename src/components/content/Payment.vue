<template>
    <div id="product">
      <div class="order-confirm">
        <div class="back-to-cart" @click="backToCart(-1)">
          <i class="el-icon-back"></i>
        </div>
        <div>
          <h4 class="order-title">{{message}}</h4>
        </div>
        <div></div>
      </div>
      <div class="order-address">
        <div class="location-icon">
          <i class="el-icon-location-outline"></i>
        </div>
        <div class="address-details">
          <div class="details-name">
            <span>收货人:{{userAddressDefault.userName}}</span><span>{{userAddressDefault.phoneNumber}}</span>
          </div>
          <div class="details-address">
            <span>收货地址:{{userAddressDefault.address}}</span>
          </div>
        </div>
        <router-link to="/address">
          <div class="location-icon change-address">
            <i class="el-icon-arrow-right"></i>
          </div>
        </router-link>
      </div>
      <div class="products-to-buy">
        <ul>
          <li v-for="product in selectedInCart">
            <div class="product-single-desc">
              <div class="left-img">
                <div>
                  <img style="width: 100%" :src="product.image" :alt="product.name">
                </div>
              </div>
              <div class="right-title">
                <h6>{{product.name}}</h6>
                <div class="bottom-nav">
                  <p class="single-total-price"><b>{{format((product.price))}}</b></p>
                  <p>x{{product.count}}</p>
                  <div style="clear: both"></div>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="subtotal-price">
          <p>{{productsTotalPrice}}合计:<b style="color: #d73b3b">{{subtotal}}</b></p>
          <el-button type="primary" class="submit-order" v-on:click="getOderTotalPrice(subtotal)" @click="submitOrder">
              提交订单
          </el-button>
        </div>
      </div>
    </div>
</template>
<script>
  import store from '../../vuex/stores'
  import {mapGetters, mapMutations} from 'vuex'
  import formatMoney from '../module/formatMoney'

  export default {
    data() {
      return {
        message:'确认订单',
        format: formatMoney,
        list:store.state.selectedInCart,
        subtotal:0,
        isSubmit:false
      }
    },
    methods:{
      backToCart(m){
        this.$router.go(m)
      },
      submitOrder(e){
        let that = this;
        e.target.setAttribute(':loading','true');
        document.getElementsByClassName('loading')[0].style.display = 'block';
        setTimeout(function () {
          document.getElementsByClassName('loading')[0].style.display = 'none';
          that.$router.push({path:'/payment'})
        },300)
      },
      ...mapMutations([
        'getOderTotalPrice'
      ])
    },
    computed:{
      ...mapGetters([
        'userAddressDefault',
        'userAddressList',
        'selectedInCart',
      ]),
      productsTotalPrice: function () {
        let totalPrice = 0;
        console.log(this.list)
        this.list.map((item) => {
          totalPrice += Number(item.count) * Number(item.price)
        });
        this.subtotal = this.format(totalPrice);
      }
    }
  }
</script>
<style lang="css" scoped>
  #product{
    padding: 10px;
  }
  .order-confirm{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .order-confirm div{
    width: 33%;
  }
  .back-to-cart{
    text-align: left;
  }
  .el-icon-location-outline{
    font-size: 24px;
  }
  .back-to-cart i{
    font-size: 24px;
  }
  .order-address{
    border:1px solid #eee;
  }
  .order-address{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
  }
  .location-icon{
    width: 30px;
    text-align: left;
  }
  .change-address{
    text-align: right;
  }
  .address-details{
    width: calc(100% - 70px);
  }
  .details-name{
    display: flex;
    justify-content: space-between;
    font-weight:600;
    font-size: 16px;
  }
  .details-address{
    text-align: left;
    font-weight:400;
    font-size: 14px;
  }
  .single-item{
    display: flex;
    justify-content: space-between;
  }

  .right-box h6{
    text-align: left;
  }
  .total-price{
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
  }
  .product-single-desc {
    display: flex;
    justify-content: space-between;
    background-color: #eee;
    margin: 5px 0;
  }

  .left-img {
    width: 24%;
  }

  .right-title {
    width: 74%;
    position: relative;
  }
  .right-title h6{
    text-align: left;
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
    border-top: 1px solid #eee;
  }
  .subtotal-price p{
    text-align: right;
    margin-bottom:0;
    margin-right: 20px;
  }
  .submit-order a{
    color: #fff;
  }
</style>
