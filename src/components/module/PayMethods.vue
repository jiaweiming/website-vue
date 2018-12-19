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
        <template>
          <el-radio-group v-model="radio" @change="getPay">
            <el-radio :label="1"><div class="pay-png"><img src="../../../src/assets/pay/alipay.png" alt=""></div></el-radio>
            <el-radio :label="2"><div class="pay-png"><img src="../../../src/assets/pay/wechat_payment.png" alt=""></div></el-radio>
          </el-radio-group>
        </template>
      </div>
      <div class="pay-success">
        <el-dialog class="message-box"
          title="支付成功"
          :visible.sync="dialogVisible"
          width="100%">
          <span v-if="radio === 1">{{alipay}}{{OrderTotalPrice}}，感谢大佬的支持!</span>
          <span v-else-if="radio === 2">{{wechat}}{{OrderTotalPrice}}，感谢大佬的支持!</span>
          <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="returnToHome">确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        message:'选择支付',
        radio:0,
        wechat:'微信支付',
        alipay:'支付宝支付',
        dialogVisible: false
      }
    },
    computed:{
      ...mapGetters([
        'OrderTotalPrice'
      ])
    },
    methods:{
      backToOrder(m){
        this.$router.go(m)
      },
      getPay(){
        console.log(this.radio)
        let _this = this;
        document.getElementsByClassName('loading')[0].style.display = 'block';
        setTimeout(function () {
          document.getElementsByClassName('loading')[0].style.display = 'none';
          _this.dialogVisible = !_this.dialogVisible;
        },400)
      },
      returnToHome(){
        this.dialogVisible = !this.dialogVisible;
        this.$router.push({path:'/'})
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
  .pay-png{
    width: 40px;
  }
  .pay-png img{
    width: 100%;
  }
  .message-box{
    padding: 0 10px;
  }
</style>
