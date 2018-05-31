<template>
  <div>
    <v-header></v-header>
    <div class="tab">
      <router-link to="{path: '/goods'}">商品</router-link>
      <router-link to="{path: '/ratings'}">评论</router-link>
      <router-link to="{path: '/seller'}">商家</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

   import header from './components/header/header.vue';
  export default {
    components: {
      // header: header 可以简写的。。。
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import url("./common/stylus/mixin.styl");
  #app
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      .tab-item
        flex: 1
        text-align center
</style>
