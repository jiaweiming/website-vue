<template>
    <div id="address">
      <div class="order-confirm">
        <div class="back-to-cart" @click="backToCart(-1)">
          <i class="el-icon-back"></i>
        </div>
        <div>
          <h4 class="order-title">{{message}}</h4>
        </div>
        <div>
        </div>
      </div>
      <div class="change-address">
        <el-radio-group v-model="radio2" @change="getSelectAddress">
          <div v-for="(address,index) in list" :key="index" class="radio-select">
            <el-radio :label="address" v-on:change="changeAddress(address)">
              <div>
                <div class="address-details">
                  <div class="details-name">
                    <span>收货人:{{address.userName}}</span><span>{{address.phoneNumber}}</span>
                  </div>
                  <div class="details-address">
                    <span>收货地址:{{address.address}}</span>
                  </div>
                </div>
              </div>
            </el-radio>
          </div>
        </el-radio-group>
      </div>
    </div>
</template>
<script>
  import {mapGetters, mapMutations} from 'vuex'
  import store from '../../vuex/stores'
  export default {
    data() {
      return {
        message:'更换地址',
        address: '1',
        radio2:'1',
        list:store.state.orderAddress.list
      }
    },
    methods:{
      ...mapMutations([
        'changeAddress'
      ]),
      backToCart(m){
        this.$router.go(m)
      },
      getSelectAddress(){
        let that = this;
        document.getElementsByClassName('loading')[0].style.display = 'block';
        setTimeout(function () { //延迟0.3秒，修改默认收货地址，并返回到提交页面
          document.getElementsByClassName('loading')[0].style.display = 'none';
          that.$router.go(-1)
        },300)
      }
    },
    computed:{
      ...mapGetters([
        'userAddressList'
      ])
    }
  }
</script>
<style lang="css" scoped>
  #address{
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
  .el-radio{
    display: flex;
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
  .change-address{
    text-align: left;
    width: 100%;
  }
  .details-name{
    margin-bottom: 5px;
  }
  .el-radio-group{
    width: 100%;
  }
  .radio-select{
    margin: 10px 0;
    width: 100%;
    border:1px solid #eee;
    box-shadow: 1px 1px 1px #ddd;
    padding: 5px;
  }
  .address-details{
    width: 100%;
  }
</style>
