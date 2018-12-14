<template>
  <div id="main">
    <div class="block">
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="(item,index) in list" :key="index">
          <img :src="item.image" :alt="item.linkTo">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="banner">
      <el-row :gutter="10" class="product-container">
        <el-col :span="12" v-for="(item,index) in products" :key="index" class="product-single">
          <router-link  :to="'/products/'+item.id">
            <div class="grid-content bg-purple">
              <img :src="item.image[0]" :alt="item.title">
              <h5 class="title">{{item.title}}</h5>
              <span class="price">${{(item.price / 100).toFixed(2)}}</span><span class="compare-price">${{(item.comparePrice /100).toFixed(2)}}</span>
            </div>
          </router-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        message:'首页内容',
        list:[
          {image:'https://cdn.shopify.com/s/files/1/2350/7085/files/LA_a4976268-fadc-4bf9-a640-c3553cd6d295.jpg?6592442982536602437',linkTo:''},
          {image:'https://cdn.shopify.com/s/files/1/2350/7085/files/eternal_city_4f09dd92-5aaf-40f0-a4e4-14abf98b5f51_1920x.jpg?v=1524797012',linkTo:''},
          {image:'https://cdn.shopify.com/s/files/1/2350/7085/files/slide333333333.jpg?7039501553767062881',linkTo:''}
        ],
        products:[
          {id:123001,title:'Mini skirt summer dress',price:18000,comparePrice:19900,
            size:['S','M','L','XL'],color:['red','blue','green','white'],
            image:['https://cdn.shopify.com/s/files/1/2350/7085/files/Lapisara_Intarasut.jpg?9537767370978287527']
          },
          {id:123002,title:'Mini skirt summer dress',price:16800,comparePrice:19900,
            size:['S','M','L','XL'],color:['red','blue','green','white'],
            image:['https://cdn.shopify.com/s/files/1/2350/7085/files/MELLISA_1f8ac54a-c214-4a7f-991e-f22e7c90df0a.jpg?1628913698016665188']
          },
          {id:123003,title:'Mini skirt summer dress',price:12800,comparePrice:16900,
            size:['S','M','L','XL'],color:['red','blue','green','white'],
            image:['https://cdn.shopify.com/s/files/1/2350/7085/files/ALEXANNE.jpg?9202050328886840239']
          },
          {id:123004,title:'Mini skirt summer dress',price:23800,comparePrice:29900,
            size:['S','M','L','XL'],color:['red','blue','green','white'],
            image:['https://cdn.shopify.com/s/files/1/2350/7085/files/Pichana_Yoosuk.jpg?9537767370978287527']
          },
        ]
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
  }
  .price{
    color: red;
    margin-right: 10px;
  }
  .compare-price{
    text-decoration: line-through;
    color: #f1f1f1;
  }
  .bg-purple{
    background-color: #fff;
    border: 1px solid #f1f1f1;
    margin-bottom: 15px;
  }
</style>
