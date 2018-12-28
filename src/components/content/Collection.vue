<template>
    <div id="collection">
      <div class="banner">
        <img src="https://cdn.shopify.com/s/files/1/0040/2322/2390/files/sweater.jpg?10290704098713452830" alt="">
      </div>
      <div class="content">
        <h3>{{title.toUpperCase()}}</h3>
        <div class="product-list">
          <el-row :gutter="10" class="product-container">
            <el-col :span="12" v-for="(item,index) in lists" :key="index" class="product-single">
              <router-link tag="div" :to="'/collections/' + title + '/products/'+item.id">
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
      <Pagination></Pagination>
    </div>
</template>
<script>
  import formatMoney from '../module/formatMoney.js'
  import Pagination from '../module/Pagination.vue'
  export default {
    data() {
      return {
        money:formatMoney,
        title:this.$route.params.query,
        currentPage:1,
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
    },
    components:{
      Pagination
    },
    watch:{
      $route(to,from){
        this.title = to.params.query;
        this.currentPage = to.query.page;
        console.log(to.query.page)
      }
    },
  }
</script>
<style lang="css" scoped>
  .content{
    padding: 20px 10px;
  }
  .banner img{
    width: 100%;
  }

  h3{
    margin-bottom: 20px;
  }
  .product-single {
    text-align: left;
  }

  .title {
    color: #000;
    font-size: 1rem;
    font-weight:500;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
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
    background-color: #f1f1f1;
    border: 1px solid #f1f1f1;
    margin-bottom: 15px;
  }
  .bg-purple img{
    width: 100%;
  }
</style>
