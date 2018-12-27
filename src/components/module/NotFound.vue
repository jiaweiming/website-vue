<template>
    <div id="not-found">
      <div>
        <img src="/static/img/not-found.png" alt="">
        <p>抱歉，您查看的页面不存在...</p><span><router-link to="/">去首页</router-link></span>
      </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style lang="css" scoped>
  #not-found{
    display: flex;
    justify-content: center;
  }
  #not-found img{
    width: 100%;
    max-width: 200px;
  }
</style>
