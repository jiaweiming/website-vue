<template>
  <div>
    <h3>User</h3>
    <p>{{message}}</p>
    <p>{{dynamicSegment}}</p>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        message:'',
        dynamicSegment:''
      }
    },
    watch:{
      $route(to,from){
        this.message = to.name;
        this.dynamicSegment = to.params.id
      }
    }
  }
</script>
<style>
</style>
