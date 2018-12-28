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
      <div class="add-new-address">
        <p class="add-new" @click="addNew">添加新地址</p>
        <el-form v-if="showForm" :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-form-item label="收件姓名">
            <el-input v-model="formLabelAlign.name" aria-required="true"></el-input>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="formLabelAlign.phone" type="number" aria-required="true"></el-input>
          </el-form-item>
          <el-form-item label="联系地址">
            <el-input v-model="formLabelAlign.address" aria-required="true"></el-input>
          </el-form-item>
          <el-button type="primary" v-on:click="hideForm" @click="addNewAddress(formLabelAlign)">添加</el-button>
        </el-form>
        <el-alert class="fixed-center" v-if="showAlert"
          title="新增地址错误"
          type="error"
          show-icon
          description="为了让您成功收到货，请输入完整的姓名、电话和地址"
          @close="closeMention">
        </el-alert>
      </div>
    </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'
  import store from '../../vuex/stores'
  export default {
    data() {
      return {
        showForm:false,
        message:'更换地址',
        address: '1',
        radio2:'1',
        showAlert:false,
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          phone: '',
          address: ''
        },
        list:store.state.orderAddress.list
      }
    },
    methods:{
      ...mapActions([
        'changeAddress',
        'addNewAddress'
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
      },
      addNew(){
        this.showForm = !this.showForm
      },
      hideForm(){
        if(!this.formLabelAlign.name.length || !this.formLabelAlign.phone.length || !this.formLabelAlign.address){
          this.showAlert = !this.showAlert;
        }else{
          this.showForm = !this.showForm
        }
      },
      closeMention(){
        this.showAlert = !this.showAlert;
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
  .add-new{
    text-align: right;
    text-decoration: underline;
    color: #3a8ee6;
  }
  .el-form-item{
    margin-bottom: 5px;
  }
  .fixed-center{
    position: fixed;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
  }
</style>
