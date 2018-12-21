<template>
    <div id="product">
      <div class="main-image">
        <Swiper :lists="product.images"></Swiper>  <!--主图，轮播组件-->
      </div>
      <div class="main-content">
        <div class="title-price">
          <h5 class="price">{{format.format(product.price / 100)}}</h5>
          <h6 class="title">{{product.title}}</h6>
          <p class="ship-sale-location">
            <span>快递:{{product.shipping}}</span><span>月销:{{product.sales}}</span><span>{{product.location}}</span>
          </p>
        </div>
      </div>
      <div class="discount-ship-date">
        <div class="discount"><span>优惠</span><span>购买可获得18天猫积分.<i class="el-icon-arrow-right"></i></span></div>
        <div class="ship"><span>物流</span><span>天猫当日达:今天11点前下单，当天送达.<i class="el-icon-arrow-right"></i></span></div>
        <div class="service"><span>服务</span><span>破损包赔.正品保证.极速退款<i class="el-icon-arrow-right"></i></span></div>
      </div>
      <div class="rate">
        <p class="rate-title"><span>宝贝评价</span><span>查看全部<i class="el-icon-arrow-right"></i></span></p>
        <div class="rate-tags">
          <span>{{product.rateShip}}</span><span>{{product.rateQuality}}</span><span>{{product.rateService}}</span>
        </div>
        <div class="rate-customer">
          <div class="rate-customer-name">
            <div class="avatar">
              <img src="../../../src/assets/default20.png" alt="">
              <span>Tom***ly</span>
            </div>
            <div>
              <el-rate v-model="rateValue" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
            </div>
          </div>
          <div class="rate-customer-content">
            <span>{{product.rateContent}}</span>
          </div>
        </div>
      </div>
      <div class="add-to-cart">
        <div class="addToCart btn-buy"><el-button type="primary" @click="showPopupHandle(false)">加入购物车</el-button></div>
        <div class="buyNow btn-buy"><el-button type="primary" @click="showPopupHandle(true)">立即购买</el-button></div>
      </div>
      <div class="rate">
        <p class="rate-title"><span>宝贝详情</span></p>
        <div class="description">
          描述部分<p>当前商品的id:{{id}}</p>
        </div>
      </div>
      <AddToCart :data="product" :id="id" :now="isBuyNow"></AddToCart>
    </div>
</template>
<script>
  import Swiper from './Swiper.vue'
  import AddToCart from '../module/AddToCart.vue'
  import axios from 'axios'
  import {mapMutations,mapGetters} from 'vuex'
  const formatter = new Intl.NumberFormat('cn-CN', {
    style: 'currency',
    currency: 'CNY',
    minimumFractionDigits: 2
  });
  export default {
    data(){
      return {
        isBuyNow:false,
        format: formatter,
        rateValue:5,
        id: this.$route.params.id,
        loading:false,
        product:''
      }
    },
    methods:{
      ...mapMutations([
        'showPopupHandle'
      ])
    },
    components:{
      Swiper,
      AddToCart
    },
    mounted(){
      let that = this;
      axios.get('/product.json').then(function (res) {
        let myData = res.data.data;
        myData.map((item,index)=>{
          if(item.id === that.id){
            that.product = item.product
          }
        })
      })
    }
  }
</script>
<style lang="css" scoped>
  .main-content{
    padding: 5px;
    border-bottom: 14px solid #f1f1f1;
  }
  .title-price{
    text-align: left;
  }
  .price{
    color: #f33264;
  }
  .title{
    font-weight: 550;
  }
  .ship-sale-location{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    color: #333;
    margin-bottom: 0;
  }
  .add-to-cart{
    position: fixed;
    left: 0;
    bottom:0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 11;
    background-color: #fff;
    padding: 5px 5px;
    border-top:1px solid #eee
  }
  .btn-buy{
    width: 49%;
  }
  .btn-buy a{
    color: #fff;
  }
  .btn-buy button{
    width: 100%;

    border-radius: 15px;
  }
  .addToCart button{
    background-color: #ff902a;
    border-color: #ff902a;
  }
  .buyNow button{
    background-color: orangered;
    border-color: orangered;
  }
  .discount-ship-date{
    padding: 5px;
    border-bottom: 14px solid #f1f1f1;
  }
  .discount-ship-date span:nth-child(2){
    font-size: 12px;
    color: #666;
  }
  .el-button{
    padding: 9px 20px;
  }
  .discount-ship-date span:first-child{
    margin-bottom: 0;
    font-size: 13px;
    color: #333;
    margin-right: 10px;
    font-weight: 500;
  }
  .discount-ship-date div{
    text-align: left;
  }
  .discount-ship-date div i{
    float: right;
    right:0;
    top:0;
    line-height: 24px;
  }
  .rate{
    padding: 5px;
    border-bottom: 14px solid #f1f1f1;
  }

  .rate-title{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .rate-title span{
    font-size: 14px;
    font-weight: 500;
    color: #333;
  }
  .rate-tags{
    text-align: left;
  }
  .rate-tags span{
    padding: 5px 10px;
    color: #666;
    border-radius: 5px;
    font-size: 13px;
    margin-right: 5px;
    background-color: rgba(0,0,0,.1);
  }
  .rate-customer-name{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }
  .rate-customer-name .el-rate__item .el-rate__icon{
    margin-right: 0 !important;
  }
  .avatar{
    width: 100px;
  }
  .avatar img{
    width: 35%;
  }
  .rate-customer-content{
    text-align: left;
  }
  .rate-customer-content span{
    font-size: 13px;
    color: #666;
  }
</style>
