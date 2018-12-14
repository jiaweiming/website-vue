<template>
    <div id="collection">
      <p>进入了collection：{{query}}</p>
      <p>根据collection来get对应数据</p>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        query:this.$route.params.query,
      }
    },
    watch:{
      $route(to,from){
        this.query = to.params.query;
      }
    },
  }
</script>
<style lang="css" scoped>

</style>
