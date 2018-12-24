<template>
  <div id="product">
    <div ref="swipers" class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide image-nav" v-for="(image,index) in lists">
          <img :src="image" alt="">
          <span class="image-index">{{index + 1}}/{{lists.length}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css';

  export default {
    data() {
      return {}
    },
    mounted() {
      let swiper = new Swiper(this.$refs.swipers, {
        autoplay: false,
        loop: true,
        observer:true,
        observeParents:true
      });
    },
    props: ['lists']
  }
</script>
<style lang="css" scoped>
  .image-nav {
    width: 100%;
    position: relative;
  }

  .image-nav img {
    width: 100%;
  }

  .image-index {
    position: absolute;
    right: 10px;
    bottom: 10px;
    background-color: rgba(0, 0, 0, .5);
    padding: 0 12px;
    font-size: 14px;
    color: #fff;
    border-radius: 8px;
  }
</style>
