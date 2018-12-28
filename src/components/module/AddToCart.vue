<template>
  <div :style="showPopupInProduct ? 'bottom:0':'bottom:-440px'" class="popup-add-to-cart">
    <span class="close-popup" @click="hideBox"><i class="el-icon-circle-close-outline"></i></span>
    <div class="variant-box">
      <div class="top-title">
        <div class="first-image">
          <img :src="selectProduct.image" :alt="selectProduct.name">
        </div>
        <div class="title">
          <h6>{{format(data.price)}}</h6>
          <p class="inventory">库存:{{data.inventory}}件</p>
          <p class="inventory">已选" {{selectProduct.color}} / {{selectProduct.size}} "</p>
        </div>
      </div>
      <div class="colors">
        <p>颜色</p>
        <el-radio-group v-model="selectProduct.color" @change="switchChange" size="small">
          <el-radio-button class="color-btn" v-for="(item,index) in data.colors" :label="item.color" :key="index"></el-radio-button>
        </el-radio-group>
        <p>尺码</p>
        <el-radio-group v-model="selectProduct.size" size="small">
          <el-radio-button class="color-btn" v-for="(item,index) in data.sizes" :label="item" :key="index"></el-radio-button>
        </el-radio-group>
        <div class="buy-count">
          <p>购买数量</p>
          <p class="count-number-box">
            <span class="num-count-child" :style="selectProduct.count === 1 ? 'color:#ddd':'color:#222'"
                  @click="selectProduct.count > 1 ? selectProduct.count-- : 1">
              <i class="el-icon-minus"></i>
            </span>
            <span class="num-count-number" v-model="selectProduct.count">{{selectProduct.count}}</span>
            <span class="num-count-child" @click="selectProduct.count++">
              <i class="el-icon-plus"></i>
            </span>
          </p>
        </div>
      </div>
      <el-button class="sure-add" type="primary"
                 @click="sendVariantToCart(selectProduct);turnToCart(ifBuyNow);open(ifBuyNow)">确定
      </el-button>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapActions} from 'vuex'
  import store from '../../../src/vuex/stores'
  import axios from 'axios'
  import formatMoney from '../module/formatMoney.js'
  export default {
    data() {
      return {
        format: formatMoney,
        selectProduct: {
          count: 1,
          color: '',
          size: '',
          price: '',
          id:'',
          name: '',
          image:'',
        }
      }
    },
    props: ['data', 'now','id'],
    computed: {
      ...mapGetters([
        'showPopupInProduct',
        'ifBuyNow'
      ])
    },
    methods: {
      ...mapActions([
        'hideBox',
        'sendVariantToCart'
      ]),
      turnToCart(m) {
        if (m) {
          this.$router.push({path: '/cart'})
        }
      },
      switchChange(val){
        this.data.colors.map((item,index)=>{
          if(item.color === val){
            this.selectProduct.image = this.data.colors[index].image;
          }
        })
      },
      open(m) {
        if(!m){
          this.$message({
            message: '成功加入购物车，快去结算吧!',
            type: 'success'
          })
        }
      },
    },
    mounted() {
      let that = this;
      axios.get('/product.json').then(function (res) {
        let myData = res.data.data;
        myData.map((item,index)=>{
          if(item.id === that.id){
            that.selectProduct.color = item.product.colors[0].color;
            that.selectProduct.image = item.product.colors[0].image;
            that.selectProduct.size = item.product.sizes[0];
            that.selectProduct.id = item.product.id;
            that.selectProduct.price = item.product.price;
            that.selectProduct.name = item.product.title;
          }
        })
      })
    }
  }
</script>
<style lang="scss" scoped>
  .popup-add-to-cart {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 400px;
    background-color: #fff;
    z-index: 22;
    padding: 10px;
    transition: all .3s ease-in-out;
    box-shadow: 1px 1px 3px #333;
  }

  .close-popup {
    position: absolute;
    right: 10px;
    top: 10px;
  }

  .close-popup i {
    color: #666;
    font-size: 20px;
  }

  .variant-box {
    margin-top: 10px;
  }

  .first-image {
    width: 80px;
  }

  .first-image img {
    width: 100%;
  }

  .top-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .inventory {
    text-align: left;
    color: #333;
    font-size: 14px;
    margin-bottom: 0;
  }

  .title {
    width: calc(100% - 90px);
  }

  .title h6 {
    text-align: left;
    color: #e60000;
    font-weight: 500;
  }

  .colors {
    margin-top: 10px;
    overflow-y: scroll;
    height: 100%;
    max-height: 280px;
    padding-bottom: 40px;
  }

  .el-radio-group {
    margin-bottom: 5px;
  }

  .el-radio-group .color-btn:first-child {
    border-left: none;
  }

  .buy-count {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .count-number-box {
    float: right;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .buy-count p {
    margin-bottom: 0 !important;
  }

  .count-number-box .num-count-child {
    border: 1px solid #f0f0f0;
    background-color: #f1f1f1;
    border-radius: 3px;
    color: #333;
    width: 32px;
    height: 26px;
    text-align: center;
    line-height: 26px;
  }

  .count-number-box .num-count-number {
    border: 1px solid #f0f0f0;
    margin: 0 5px;
    background-color: #f1f1f1;
    border-radius: 3px;
    color: #333;
    width: 40px;
    height: 26px;
    text-align: center;
    line-height: 26px;
  }

  .el-radio-button__inner {
    background-color: #ff902a;
    border-color: #ff902a;
  }

  .color-btn {
    margin-right: 5px;
    border-left: 1px solid #dcdfe6;
    border-radius: 4px;
  }

  .colors {
    text-align: left;
  }

  .colors p {
    margin-bottom: 5px;
    font-size: 14px;
    color: #333;
  }

  .sure-add {
    background-color: #ff902a;
    border-color: #ff902a;
    margin-left: 10px;
    width: calc(100% - 20px);
    border-radius: 15px;
    position: absolute;
    left: 0;
    bottom: 5px;
  }
</style>
