<template>
  <transition mode="out-in" name="fade">
    <div id="menu" v-if="showMenu">
      <div class="list">
        <div class="left-menu">

          <el-row class="tac">
            <el-col :span="12">
              <el-menu
                default-active="0" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
                active-text-color="#ffd04b">
                <el-submenu index="1">
                  <template slot="title">
                    <span>{{list[0].name}}</span>
                  </template>
                  <el-menu-item-group v-for="(value,i) in list[0].category" :key="i">
                    <el-menu-item :index="'1-'+i">
                      <router-link  :to="'/collections/'+value.name">{{value.name}}</router-link>
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-menu-item :index="''+index" v-for="(item,index) in list[0].others" :key="''+index">
                  <span slot="title" ><router-link  :to="'/collections/'+item.name">{{item.name}}</router-link></span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
  import {mapGetters} from 'vuex'
  import store from '../../vuex/stores'

  export default {
    data() {
      return {
        show: store.show,  //是否展示侧边栏
        list: [
          {
            id: 101, name: 'ACCESSORIES',
            category: [
              {id: 1001, name: 'tops'},
              {id: 1002, name: 'sweaters'},
              {id: 1003, name: 'hats'},
              {id: 1004, name: 'glasses'}],
            others: [
            {id: 102, name: 'APPAREL'},
            {id: 103, name: 'DRESSES'},
            {id: 104, name: 'BAGS'},
            {id: 105, name: 'BEAUTY'}]},
        ]
      }
    },
    computed: {
      ...mapGetters([
        'showMenu'
      ])
    },
  }
</script>
<style lang="css" scoped>
  .el-submenu .el-menu-item {
    min-width: 180px;
  }

  #menu {
    position: fixed;
    width: 100%;
    left: 0;
    top: 36px;
    z-index: 20;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }

  .el-submenu__title .el-icon-arrow-down::before {
    display: none;
  }
</style>
