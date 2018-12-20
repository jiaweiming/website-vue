<template>
  <div :style="showPopupInProduct ? 'bottom:0':'bottom:-440px'" class="popup-add-to-cart">
    <span class="close-popup" @click="hideBox"><i class="el-icon-circle-close-outline"></i></span>
    <div class="variant-box">
      <div class="top-title">
        <div class="first-image">
          <img ref="picture" :src="data.images[0]" alt="">
        </div>
        <div class="title">
          <h6>{{format.format(data.price / 100)}}</h6>
          <input ref="price" type="hidden" :value="data.price">
          <input ref="title" type="hidden" :value="data.title">
          <input ref="color" type="hidden" :value="data.colors[0]">
          <p class="inventory">库存:{{data.inventory}}件</p>
          <p class="inventory">已选" {{selectProduct.selectedColor}} / {{selectProduct.selectedSize}} "</p>
        </div>
      </div>
      <div class="colors">
        <p>颜色</p>
        <el-radio-group v-model="selectProduct.selectedColor" size="small">
          <el-radio-button class="color-btn" v-for="(item,index) in data.colors" :label="item" :key="index"></el-radio-button>
        </el-radio-group>
        <p>尺码</p>
        <el-radio-group v-model="selectProduct.selectedSize" size="small">
          <el-radio-button class="color-btn" v-for="(item,index) in data.sizes" :label="item" :key="index"></el-radio-button>
        </el-radio-group>
        <div class="buy-count">
          <p>购买数量</p>
          <p class="count-number-box">
            <span class="num-count-child" :style="selectProduct.selectedCount === 1 ? 'color:#ddd':'color:#222'"
                  @click="selectProduct.selectedCount > 1 ? selectProduct.selectedCount-- : 1">
              <i class="el-icon-minus"></i>
            </span>
            <span class="num-count-number" v-model="selectProduct.selectedCount">{{selectProduct.selectedCount}}</span>
            <span class="num-count-child" @click="selectProduct.selectedCount++">
              <i class="el-icon-plus"></i>
            </span>
          </p>
        </div>
      </div>
      <el-button class="sure-add" type="primary" @click="sendVariantToCart(selectProduct);turnToCart(ifBuyNow)">确定
      </el-button>
    </div>
  </div>
</template>
<script>
  import {mapMutations, mapGetters} from 'vuex'
  import store from '../../../src/vuex/stores'

  const formatter = new Intl.NumberFormat('cn-CN', {
    style: 'currency',
    currency: 'CNY',
    minimumFractionDigits: 2
  });
  export default {
    data() {
      return {
        format: formatter,
        selectProduct: {
          selectedColor: 'Red',
          selectedSize: 'S',
          selectedCount: 1,
          price: '',
          picture: '',
          title: ''
        }
      }
    },
    computed: {
      ...mapGetters([
        'showPopupInProduct',
        'ifBuyNow'
      ])
    },
    methods: {
      ...mapMutations([
        'hideBox',
        'sendVariantToCart'
      ]),
      turnToCart(m) {
        if (m) {
          this.$router.push({path: '/cart'})
        }
      }
    },
    props: ['data', 'now'],
    mounted() {
      this.selectProduct.price = this.$refs.price.value;
      this.selectProduct.picture = this.$refs.picture.src,
      this.selectProduct.title = this.$refs.title.value
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
    overflow-y: scroll;
    height: 100%;
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
    font-size: 500;
  }

  .colors {
    margin-top: 10px;
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
    padding: 2px 9px;
    background-color: #f1f1f1;
    border-radius: 3px;
    color: #333;
  }

  .count-number-box .num-count-number {
    border: 1px solid #f0f0f0;
    padding: 2px 16px;
    margin: 0 5px;
    background-color: #f1f1f1;
    border-radius: 3px;
    color: #333;
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
    bottom: 0;
  }
</style>
