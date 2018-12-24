<template>
    <div id="product">
      <div class="order-confirm">
        <div class="back-to-cart" @click="backToCart(-1)">
          <i class="el-icon-back"></i>
        </div>
        <div>
          <h5 class="order-title">{{message}}</h5>
        </div>
        <div></div>
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
</template>
<script>
  export default {
    data() {
      return {
        message:'全部评价',
        id: this.$route.params.id,
        rateValue:5,
        product:{
          rateContent:'发货迅速，包装结实，生产日期新鲜，5星好评!'
        }
      }
    },
    methods:{
      backToCart(m){
        this.$router.go(m)
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
  .rate-customer{

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
