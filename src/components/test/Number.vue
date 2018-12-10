<template>
  <div class="number">
    <p>数字是: {{count}}</p>
    <button @click="increase(6)">加</button>
    <button @click="decrease(4)">减</button>
  </div>
</template>
<script>
  import store from '../../../src/vuex/stores'
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'count',
        'data'
      ])
    },
    methods: {
      ...mapMutations([
        'increase',
        'decrease',
        'getAjaxData'
      ])
    },
  }
</script>
<style scoped>

</style>
