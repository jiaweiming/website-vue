<template>
  <div>
    <h3>Home</h3>
    <p>{{message}}</p>
    <ul>
      <li><router-link to="/home/phone">手机</router-link></li>
      <li><router-link to="/home/tablet">平板</router-link></li>
      <li><router-link to="/home/computer">电脑</router-link></li>
      <li><router-link to="/home/header">header测试</router-link></li>
    </ul>
    <router-view></router-view>
    <div class="number">
      <Number></Number>
    </div>
  </div>
</template>
<script>
  import Number from '../../components/test/Number.vue'
  import store from '../../../src/vuex/stores'
  export default {
    data(){
      return {
        message:"home主页"
      }
    },
    components:{
      Number
    }
  }
</script>
<style>

</style>
