<template>
  <div class="header">
    <el-row>
      <el-col :span="3"><div @click="showMenu()" class="grid-content bg-purple-dark"><img src="../../assets/menu.svg" alt=""></div></el-col>
      <el-col :span="3"><div class="grid-content bg-purple-dark"><img src="../../assets/-Currency-Exchang.svg" alt=""></div></el-col>
      <el-col :span="12">
        <router-link to="/">
          <div class="grid-content bg-purple-dark"><img style="width: 44px" src="../../assets/logo.jpg" alt=""></div>
        </router-link>
      </el-col>
      <el-col :span="3">
        <router-link to="/account">
          <div class="grid-content bg-purple-dark"><img src="../../assets/user.svg" alt=""></div>
        </router-link>
        </el-col>
      <el-col :span="3">
        <router-link to="/cart">
          <div class="grid-content bg-purple-dark"><img src="../../assets/cart.svg" alt=""></div>
        </router-link>
      </el-col>
    </el-row>

    <Menu></Menu>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import Menu from '../../components/header/Menu.vue'
  export default {
    data() {
      return {
      }
    },
    components:{
      Menu
    },
    methods:{
      ...mapMutations([
        'showMenu'
      ])
    }
  }
</script>
<style lang="scss">
  .header{
    flex: 0 0 auto;
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
</style>
