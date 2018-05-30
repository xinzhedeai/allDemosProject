<template>
  <div>
    <v-header></v-header>
    <div class="tab">
      <a href="" v-link="{path:'/goods'}">商品</a>
      <a href="" v-link="{path:'/goods'}">商品</a>
      <a href="" v-link="{path:'/goods'}">商品</a>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from './components/header/header.vue';

export default {
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
 .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    .tab-item
      flex: 1
      text-align: center
</style>
