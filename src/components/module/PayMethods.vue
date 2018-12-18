<template>
    <div id="product">
      <div class="order-confirm">
        <div class="back-to-cart" @click="backToOrder(-1)">
          <i class="el-icon-back"></i>
        </div>
        <div>
          <h4 class="order-title">{{message}}</h4>
        </div>
        <div></div>
      </div>
      <div class="pay-methods">
        <div class="wechat">微信支付</div>
        <div class="alipay">支付宝支付</div>
      </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        message:'选择支付'
      }
    },
    methods:{
      backToOrder(m){
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
  .el-icon-back{
    font-size: 24px;
  }
</style>
