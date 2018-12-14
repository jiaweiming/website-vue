<template>
  <div class="content">
    <router-view></router-view>
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
</style>
