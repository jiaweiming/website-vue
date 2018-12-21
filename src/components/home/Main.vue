<template>
  <div id="main">
    <div class="block">
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="(item,index) in products.carousel" :key="index">
          <img :src="item.image" :alt="item.linkTo">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="banner">
      <el-row :gutter="10" class="product-container">
        <el-col :span="12" v-for="(item,index) in products.lists" :key="index" class="product-single">
          <router-link :to="'/products/'+item.id">
            <div class="grid-content bg-purple">
              <img :src="item.image[0]" :alt="item.title">
              <h5 class="title">{{item.title}}</h5>
              <span class="price">{{money(item.price )}}</span>
            </div>
          </router-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  import formatMoney from '../module/formatMoney.js'
  export default {
    data() {
      return {
        money:formatMoney,
        message: '首页内容',
        products:
          {
            carousel: [
              {
                image: 'https://cdn.shopify.com/s/files/1/2350/7085/files/LA_a4976268-fadc-4bf9-a640-c3553cd6d295.jpg?6592442982536602437',
                linkTo: ''
              },
              {
                image: 'https://cdn.shopify.com/s/files/1/2350/7085/files/eternal_city_4f09dd92-5aaf-40f0-a4e4-14abf98b5f51_1920x.jpg?v=1524797012',
                linkTo: ''
              },
              {
                image: 'https://cdn.shopify.com/s/files/1/2350/7085/files/slide333333333.jpg?7039501553767062881',
                linkTo: ''
              }
            ],
            lists: [
              {
                id: 123001, title: 'Elegant Panel Sleeveless Dress', price: 18000,handle:'elegant-panel-sleeveless-dress',
                image: ['https://cdn.shopify.com/s/files/1/2350/7085/products/68054c29-f1fc-45b4-942d-b612d0b149d0_deb4db18-b98e-4ff2-b849-91a90502a8b0.jpg?v=1533796276']
              },
              {
                id: 123002, title: 'Romantic Pure Lace Dress', price: 2999900,handle:'romantic-pure-lace-dress',
                image: ['https://cdn.shopify.com/s/files/1/2350/7085/products/88eeb4d1-f2a9-4683-b7ac-208c569f72c0.jpg?v=1534325547']
              },
              {
                id: 123003, title: 'Round Neck Floral Print Sleeveless Dress', price: 99800,handle:'round-neck-floral-print-sleeveless-dress',
                image: ['https://cdn.shopify.com/s/files/1/2350/7085/products/22-min_f566b4da-cd10-4e9d-8a6a-a38a326cf9f1.jpg?v=1527153943']
              },
              {
                id: 123004, title: 'Cozy Knit Collarless Cropped Cardigan With Buckle', price: 49900,handle:'cozy-knit-collarless-cropped-cardigan-with-buckle',
                image: ['https://cdn.shopify.com/s/files/1/2350/7085/products/20921_2.jpg?v=1519962444']
              },
            ]
          }
      }
    }
  }
</script>
<style lang="css" scoped>
  img {
    width: 100%;
  }

  .banner {
    padding: 20px 10px;
  }

  .product-single {
    text-align: left;
  }

  .title {
    color: #000;
    font-size: 1.05rem;
    font-weight:500;
  }

  .price {
    color: red;
    margin-right: 10px;
  }

  .compare-price {
    text-decoration: line-through;
    color: #f1f1f1;
  }

  .bg-purple {
    background-color: #fff;
    border: 1px solid #f1f1f1;
    margin-bottom: 15px;
  }
</style>
