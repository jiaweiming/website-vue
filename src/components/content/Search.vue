<template>
    <div id="search">
      <el-input placeholder="请输入内容" v-model="inputText">
        <el-button slot="append" icon="el-icon-search" @click="getInput"></el-button>
      </el-input>
      <div class="search-history search-recommend">
        <h6>历史搜索:</h6>
        <ul>
          <li v-for="(item,index) in  history" :key="index">
            <span>{{item}}</span>
          </li>
        </ul>
      </div>
      <div class="search-find search-recommend">
        <h6>搜索发现:</h6>
        <ul>
          <li v-for="(item,index) in find" :key="index">
            <span>{{item}}</span>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        message:'搜索',
        inputText:'',
        history:[
          '男裤冬','袜子','羽绒服','手机壳'
        ],
        find:[
          '巧克力圣诞节','圣诞节礼物','零食大礼包','三只松鼠官方旗舰店','百草味夏威夷果'
        ]
      }
    },
    methods:{
      getInput(){
        console.log(this.inputText)
      }
    }
  }
</script>
<style lang="css" scoped>
  #search{
    padding: 10px;
  }
  .search-recommend{
    text-align: left;
    margin-top: 20px;
  }
  li{
    list-style: none;
    margin: 5px;
  }
  h6{
    font-weight: 500;
  }
  .search-recommend ul{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }
  .search-recommend ul li span {
    padding: 5px 10px;
    background-color: #999;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
  }
</style>
