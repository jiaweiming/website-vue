<template>
  <div>
    <h3>Home</h3>
    <p>{{message}}</p>
    <ul>
      <li><router-link to="/home/phone">手机</router-link></li>
      <li><router-link to="/home/tablet">平板</router-link></li>
      <li><router-link to="/home/computer">电脑</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        message:'首页组件'
      }
    }
  }
</script>
<style>
</style>
