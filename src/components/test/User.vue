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
        message:'user',
        dynamicSegment:''
      }
    },
    watch:{
      $route(to,from){
        console.log(to);
        console.log(from);
        this.dynamicSegment = to.params.id
      }
    }
  }
</script>
<style>
</style>
