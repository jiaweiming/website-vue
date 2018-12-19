<template>
  <div style="z-index: 33">
    <div class="replace-for-header">

    </div>
    <div class="header">
      <el-row>
        <el-col :span="3"><div @click="showMenu()" class="grid-content bg-purple-dark"><img src="../../assets/menu.svg" alt=""></div></el-col>
        <el-col :span="3"><div class="grid-content bg-purple-dark"><img src="../../assets/-Currency-Exchang.svg" alt=""></div></el-col>
        <el-col :span="12">
          <router-link to="/">
            <div class="grid-content bg-purple-dark"><img style="width: 73.15%;margin-top: -2px" src="../../assets/homepage/logo.jpg" alt=""></div>
          </router-link>
        </el-col>
        <el-col :span="3">
          <router-link to="/account">
            <div class="grid-content bg-purple-dark"><img src="../../assets/user.svg" alt=""></div>
          </router-link>
        </el-col>
        <el-col :span="3">
          <router-link to="/cart">
            <div class="grid-content bg-purple-dark cart-count-box">
              <img src="../../assets/cart.svg" alt="">
              <span v-if="addedToCart.length" class="cart-count">{{getTotalNumber()}}</span>
            </div>
          </router-link>
        </el-col>
      </el-row>
      <Menu></Menu>
    </div>
  </div>
</template>

<script>
  import {mapMutations,mapGetters} from 'vuex'
  import Menu from '../../components/header/Menu.vue'
  import store from '../../vuex/stores'
  export default {
    data() {
      return {
        count:store.state.addedToCart
      }
    },
    components:{
      Menu
    },
    computed:{
      ...mapGetters([
        'addedToCart',
      ])
    },
    methods:{
      ...mapMutations([
        'showMenu'
      ]),
      getTotalNumber(){
        let _count=0;
        this.count.map((item,index)=>{
          _count += Number(item.count)
        })
        return _count
      }
    }
  }
</script>
<style lang="scss">
  .replace-for-header{
    flex: 0 0 auto;
    width: 100%;
    height: 36px;
    z-index: 999;
  }
  .header{
    position: fixed;
    left: 0;
    top:0;
    width:100%;
  }
  .el-row:last-child {
     margin-bottom: 0;
   }
  .bg-purple-dark {
    background: #111;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    min-height: 36px;
    line-height: 36px;
    color: #fff;
  }
  .grid-content img{
    width: 20px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .cart-count-box{
    position: relative;
  }
  .cart-count{
    position: absolute;
    padding:0 5px;
    vertical-align: top;
    right:0;
    top:0;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    display: block;
    position: absolute;
    background: #d73b3b;
    line-height: 22px;
    text-align: center;
    padding: 2px;
    color: #fff;
  }
</style>
