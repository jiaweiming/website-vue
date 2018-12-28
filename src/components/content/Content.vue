<template>
  <div class="content">
    <div class="loading">
      <i class="el-icon-loading"></i>
    </div>
    <transition name="">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>

  export default {
    data(){
      return {
        msg:'主要内容区块'
      }
    }
  }
</script>
<style>
  .content{
    flex: 1 0 auto
  }
  .loading{
    position: fixed;
    left: 0;
    top:0;
    right:0;
    bottom:0;
    background-color: #fff;
    opacity: .3;
    z-index: 50;
    display: none;
  }
  .loading i {
    font-size: 50px;
    margin-top: 75%;
  }
</style>
