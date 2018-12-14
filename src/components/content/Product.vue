<template>
    <div id="product">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
      <p>当前商品的id:{{id}}</p>
    </div>
</template>
<script>
  export default {
    data(){
      return {
        id: this.$route.params.id,
        loading:false,
      }
    },
    created(){
      this.fetchData();
    },
    methods:{
      fetchData(){
        this.loading= true;
        console.log(this.id)
      }
    }
  }
</script>
<style lang="css" scoped>

</style>
