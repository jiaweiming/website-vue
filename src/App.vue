<template>
  <div id="app">
    <ul>
      <li v-for="item in list"><router-link :to='item.path'>{{item.name}}</router-link></li>
      <router-view/>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      message: 'Welcome to Your Vue.js App',
      list:[
        {name:'Home',path:'/home'},
        {name:'About',path:'/about'},
        {name:'用户1',path:'/user/111'},
        {name:'用户2',path:'/user/222'}
      ]
    }
  }
}
</script>

<style lang="css">
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
