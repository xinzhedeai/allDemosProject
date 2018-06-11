<template>
  <div class="food" v-show="showFlag" transition="move" v-el:food>
    <div class="food-content">
      <div class="image-header">
        <img :src="food.image" alt="">
        <div class="back" @click="hide">
          <i class="icon-arrow_lift"></i>
        </div>
      </div>
      <div class="content">
        <h1 class="title">{{food.name}}</h1>
        <div class="detail">
          <span class="sell-count">月售{{food.sellCount}}份</span>
          <span class="rating">好评率{{food.rating}}%</span>
        </div>
        <div class="price">
          <span class="now">￥{{food.price}}</span>
          <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
        </div>
        <div class="cartcontrol-wrapper">
          <cartcontrol :food="food"></cartcontrol>
        </div>
        <div class="buy" @click="addFirst"  v-show="!food.count || food.count === 0" transition="fade">加入购物车</div>
      </div>
      <split v-show="food.info"></split>
      <div class="info" v-show="food.info">
        <h1 class="title">商品信息</h1>
        <p class="text">{{food.info}}</p>
      </div>
      <split v-show="food.info"></split>
      <div class="rating">
        <h1 class="title">商品评价</h1>
        <ratingselect :select-type="selectType" :only-content="onlyContent"
         :desc="desc" :ratings="food.ratings"></ratingselect>
        <div class="rating-wrapper">
          <ul v-show="food.ratings && food.ratings.length">
            <li v-show="needShow(rating.rateType, rating.text)" v-for="rating in food.ratings" class="rating-item">
              <div class="user">
                <span class="name">{{rating.username}}</span>
                <img :src="rating.avatar" class="avatar" width="12" height="12">
              </div>  
              <div class="time">{{rating.rateTime}}</div>
              <p class="text">
                <span :class="{'icon-thumb_up': rating.rateType === 0, 
                'icon-thumb_down': rating.rateType === 1}"></span>{{rating.text}}
              </p>
            </li>
          </ul>
           <div class="no-ratings" v-show="!food.ratings || !food.ratings.length">
             暂无评论
           </div>
        </div>
      </div>      
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  import BScroll from 'better-scroll';
  import cartcontrol from 'components/cartcontrol/cartcontrol';
  import ratingselect from 'components/ratingselect/ratingselect';
  import split from 'components/split/split';
  const POSITIVE = 0; // 积极评价
  // const NEGATIVE = 1; // 消极评价
  const ALL = 2;
  export default {
    props: { // 接受父组件传过来的值
      food: {
        type: Object
      }
    },
    data() {
      return {
        showFlag: false,
        selectType: ALL,
        onlyContent: true,
        desc: {
          all: '全部',
          positive: '推荐',
          negative: '吐槽'
        }
      };
    },
    methods: {
      needShow(type, text) { // 评论和上面的只看有内容的div文字显示与隐藏控制
        if (this.onlyContent && !text) {
          return false;
        }
        if (this.selectType === ALL) {
          return true;
        } else {
          return type === this.selectType;
        }
      },
      addFirst(event) { // 商品详情添加购物车
        if (!event._constructed) { // 如果不是vue自己的点击事件，则不处理
          return;
        }
        this.$dispatch('cart.add', event.target);
        Vue.set(this.food, 'count', 1); // 将food属性count的值设为1
      },
      show() {
        this.showFlag = true;
        this.selectType = POSITIVE;
        this.onlyContent = true;
        // console.info('**显示嘿嘿**');
        this.$nextTick(() => { // 当组件dom健在完毕后进行操作
          if (!this.scroll) {
            this.scroll = new BScroll(this.$els.food, {
              click: true
            });
          } else {
            this.scroll.refresh();
          }
        });
      },
      hide() {
        this.showFlag = false;
      }
    },
    events: { // 监听子组件派送过来的时间，并触发
      'ratingtype.select'(type) {
        this.selectType = type;
        this.$nextTick(() => {
          this.scroll.refresh();
        });
      },
      'content.toggle'(onlyContent) {
        this.onlyContent = onlyContent;
        this.$nextTick(() => {
          this.scroll.refresh();
        });
      }
    },
    components: {
      cartcontrol,
      split,
      ratingselect
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl';
  .food
    position fixed
    left 0
    top 0
    bottom 48px
    z-index 30
    width 100% 
    background-color #fff
    .food-content
      position relative
    &.move-transition // 最终状态
      transition all .2s linear;
      transform translate3d(0, 0, 0)
    &.move-enter, &.move-leave
      transform translate3d(100%, 0, 0)
    .image-header
      position relative
      width 100%
      height 0
      padding-top: 100% // 会以width为准，相当于高度与宽度都相等的容器
      img 
        position absolute
        top 0
        left 0
        width 100%
        height 100%
      .back
        position absolute
        top 10px
        left 0
        .icon-arrow_lift
          display block
          padding 18px
          font-size 20px
          color #fff
    .content
      position relative
      padding 18px
      .title
        line-height 14px
        margin-bottom 8px
        font-size 14px
        font-weight 700
        color rgb(7, 17, 27)
      .detail
        margin-bottom 18px
        height 10px
        line-height 10px
        font-size 0;
        .sell-count, .rating
          font-size 10px
          color rgb(147, 153, 159)
        .sell-count
          margin-right 12px
        .price
          font-weight 700
          line-height 24px
          .now
            margin-right 8px
            font-size 14px
            color rgb(240, 20, 20)
          .old 
            text-decoration line-through
            font-size 10px
            color rgb(147, 153, 159)
      .cartcontrol-wrapper
        position absolute
        right 20px
        bottom 18px
      .buy
        position absolute
        right 18px
        bottom 18px
        z-index 10
        height 24px
        line-height 24px
        padding: 0 12px;
        background-color rgb(0, 160, 220)
        box-sizing border-box
        font-size 10px
        color #fff
        border-radius 12px
        &.fade-transition
          transition all .2s
          opacity 1
        &.fade-enter, &.fade-leave
          opacity 0
    .info 
      padding 18px
      .title
        line-height 14px
        margin-bottom 6px
        font-size 14px
        color rgb(77, 17, 27)
      .text
        line-height 24px
        padding: 0 8px
        font-size 12px
        color rgb(77, 85, 93)
    .rating
      padding-top: 18px
      .title
        line-height 14px
        margin-left 18px
        font-size 14px
        color rgb(7, 17, 27)
      .rating-wrapper // 评论区样式
        padding 0 18px
        .rating-item
          position relative
          padding 16px 0
          border-1px(rgba(7, 17, 27, .1))
          .user
            position absolute
            right 0
            top 16px
            line-height 12px
            font-size 0
            .name 
              display inline-block
              margin-right 6px
              vertical-align top
              font-size 10px
              color rgb(147, 153, 159)
            .avatar
              border-radius 50%
          .time
            margin-bottom 6px
            line-height 12px
            font-size 10px
            color rgb(147, 153, 159)
          .text
            line-height 16px
            font-size 12px
            color rgb(7, 17, 27)
            .icon-thumb_up, .icon-thumb_down
              margin-right 4px
              line-height 24px
              font-size 12px
            .icon-thumb_up
              color rgb(0, 160, 220)
            .icon-thumb_down // 取消点赞
              color rgb(147, 153,159)
        .no-ratings
          padding 16px 0
          font-size 12px
          color rgb(147, 153, 159)
              


</style>
