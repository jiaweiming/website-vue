<template>
  <div id="search">
    <el-row class="demo-autocomplete">
      <el-col :span="18">
        <el-autocomplete
          class="inline-input"
          v-model="inputText"
          clearable
          :value="recommendWords"
          autofocus
          ref="input"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          :trigger-on-focus="false"
          @select="handleSelect">
        </el-autocomplete>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" icon="el-icon-search" @click="getInput">搜索</el-button>
      </el-col>
    </el-row>
    <div v-show="showList">
      <div class="search-history search-recommend">
        <h6>历史搜索:</h6>
        <ul>
          <li v-for="(item,index) in  history" :key="index">
            <span @click="clickRecommendkWords(item)">{{item}}</span>
          </li>
        </ul>
      </div>
      <div class="search-find search-recommend">
        <h6>搜索发现:</h6>
        <ul>
          <li v-for="(item,index) in find" :key="index">
            <span @click="clickRecommendkWords(item)">{{item}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="search-results" v-if="thisProduct !== null">
      <h4 style="text-align: left">搜索结果:</h4>
      <div>
        <router-link tag="div" class="box" :to="'/products/'+ thisProduct.id">
          <div class="img">
            <img :src="thisProduct.images[0]" :alt="thisProduct.title">
          </div>
          <div class="title">
            <h6>{{thisProduct.title}}</h6>
            <h6 class="price">{{format(thisProduct.price)}}</h6>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'
  import formatMoney from '../../components/module/formatMoney'
  import axios from 'axios'

  export default {
    data() {
      return {
        showList: true,
        format: formatMoney,
        message: '搜索',
        suggestions: [],
        inputText: '',
        recommendWords:'',
        thisProduct: null,
        history: [
          'Dress', 'Woman', 'Summer'
        ],
        find: [
          'Sleeveless ', 'Pure Lace Dress', 'Sleeveless Dress', 'Collarless', 'Cozy Knit'
        ]
      }
    },
    computed: {
      ...mapGetters([
        'productData'
      ])
    },
    methods: {
      ...mapActions([
        'getProductData'
      ]),
      querySearch(queryString, cb) {
        let suggestion = this.suggestions;
        let results = queryString ? suggestion.filter(this.createFilter(queryString)) : suggestion;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (suggestion) => {
          return (suggestion.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          {"value": "Elegant Panel Sleeveless Dress", "id": 123001},
          {"value": "Romantic Pure Lace Dress", "id": 123002},
          {"value": "Round Neck Floral Print Sleeveless Dress", "id": 123003},
          {"value": "Cozy Knit Collarless Cropped Cardigan With Buckle", "id": 123004},
        ]
      },
      handleSelect(item) {
        this.$router.push({path: '/search?q=' + this.productData.title.replace(/\s+/g, '-').toLowerCase()});
        this.showList = false;
        let _this = this;
        axios.get('/product.json').then(function (res) {
          let myData = res.data.data;
          myData.map((val) => {
            if (Number(val.id) === item.id) {
              _this.thisProduct = val.product;
            }
          })
        })
      },
      clickRecommendkWords(val){
        this.recommendWords = val;
      },
      getInput() {
        this.$message({
          message: '暂不支持自定义搜索功能，请使用推荐搜索!',
          type: 'warning'
        });
      }
    },
    mounted() {
      this.suggestions = this.loadAll();
    }
  }
</script>
<style lang="css" scoped>
  #search {
    padding: 10px;
  }

  .search-recommend {
    text-align: left;
    margin-top: 20px;
  }

  li {
    list-style: none;
    margin: 5px;
  }

  h6 {
    font-weight: 500;
  }

  .search-recommend ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }

  .search-recommend ul li span {
    padding: 5px 10px;
    background-color: #eee;
    border-radius: 5px;
    color: #333;
    cursor: pointer;
    font-weight: 500;
    font-size: 14px;
  }

  .el-autocomplete {
    width: 100%;
  }

  .box {
    display: flex;
    justify-content: space-between;
    background-color: #f1f1f1;
    box-shadow: 1px 1px 1px #ddd;
  }

  .img {
    width: 20%;
  }

  .img img {
    width: 100%;
  }

  .box h6 {
    margin-bottom: 0;
  }

  .title {
    width: 78%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .price {
    color: red;
  }
  .search-results{
    margin-top: 20px;
  }
</style>
