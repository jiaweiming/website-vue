<template>
  <div id="pagination">
    <el-pagination
      @current-change="handleCurrentChange"
      background small
      layout="prev, pager, next"
      :current-page.sync="currentPage"
      :total="total">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        total: 1000,
        query: this.$route.params.query,
        currentPage: window.location.hash.split('?page=')[1] ? Number(window.location.hash.split('?page=')[1]) : 1
      }
    },
    methods: {
      handleCurrentChange(val) {
        this.$router.push({path: '/collections/' + this.query + '?page=' + val});
        this.currentPage = val ? val : 1
      }
    }
  }
</script>
<style lang="css" scoped>

</style>
