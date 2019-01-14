<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
  import Home from './components/home/Home.vue'
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
  },
  components:{
    Home
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
  height: 100%;
  max-width: 500px;
  margin: 0 auto;
}
  .header{
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
  .footer{
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }
</style>
