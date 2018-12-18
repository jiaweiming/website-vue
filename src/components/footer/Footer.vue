<template>
  <div class="footer">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">{{msg}}</div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: 'COPYRIGHT © ' + (new Date).getFullYear() + ' JWM '
      }
    }
  }
</script>
<style lang="css" scoped>
  .footer {
    flex: 0 0 auto;
  }

  .grid-content {
    min-height: 20px;
    line-height: 20px;
    font-size: 12px;
  }

  .bg-purple-dark {
    background-color: #333;
  }
</style>
