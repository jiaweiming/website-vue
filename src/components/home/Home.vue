<template>
  <div id="main-container">
    <Header></Header>
    <Content></Content>
    <Footer></Footer>
  </div>
</template>
<script>
  import Footer from '../../components/footer/Footer.vue'
  import Header from '../../components/header/Header.vue'
  import Content from '../../components/content/Content.vue'
  export default {
    data(){
      return {
        message:"home主页"
      }
    },
    components:{
      Footer,
      Header,
      Content
    }
  }
</script>
<style lang="scss">
  html,body{
    height: 100%;
  }
#main-container{
  display: flex;
  height: 100%;
  flex-direction: column;
}
</style>
