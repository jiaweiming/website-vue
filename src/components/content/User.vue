<template>
  <div id="account">
    <div class="isLogin" v-if="!hasAccount">
      <h3>{{loginTitle}}</h3>
      <div>
        <span>没有账户?,<span class="linked" @click="toggleStatus()">创建账户</span></span>
      </div>
      <div class="login">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="姓名" :rules="{ required: true, message: '姓名不能为空'}">
            <el-input v-model="formInline.user" placeholder="Your Name"></el-input>
          </el-form-item>
          <el-form-item label="密码" :rules="{ required: true, message: '密码不能为空'}">
            <el-input v-model="formInline.password" placeholder="Your Password"></el-input>
          </el-form-item>
          <div>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
    <div class="isSign" v-if="hasAccount">
      <h3>{{signTitle}}</h3>
      <div>
        <span>已有账户?,<span class="linked" @click="toggleStatus()">立即登录</span></span>
      </div>
      <div class="login">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="姓名" :rules="{ required: true, message: '姓名不能为空'}">
            <el-input v-model="formInline.user" placeholder="Your Name"></el-input>
          </el-form-item>
          <el-form-item label="密码" :rules="{ required: true, message: '密码不能为空'}">
            <el-input v-model="formInline.password" placeholder="Your Password"></el-input>
          </el-form-item>
          <div>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">注册</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        loginTitle:'个人中心-登录',
        signTitle:'个人中心-注册',
        hasAccount:false,
        formInline: {
          user: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit() {
        if(this.formInline.user === '' || this.formInline.password === ''){
          console.log('用户名或者密码为空！');
        }else{
          console.log(this.formInline);
        }
      },
      toggleStatus(){
        this.hasAccount = !this.hasAccount;
      }
    }
  }
</script>
<style>
  #account{
    padding: 20px 10px;
  }
  .linked{
    color: #3a8ee6;
    text-decoration: underline;
  }
</style>
