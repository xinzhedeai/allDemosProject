<template>
  <div class="goods">
    <div class="menu-wrapper" v-el:menu-wrapper>
      <ul>
        <li v-for="item in goods" class="menu-item" :class="{'current': currentIndex === $index}" @click="selectMenu($index, $event)">
          <span class="text border-1px">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" v-el:foods-wrapper>
      <ul>
        <li v-for="item in goods" class="food-list food-list-hook">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item border-1px" @click="selectFood(food, $event)">
              <div class="icon">
                <img :src="food.icon" width="57" height="57">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
                  
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cartcontrol :food=food></cartcontrol>
                </div>
              </div>
              
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart v-ref:shopcart :select-foods="selectFoods" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shopcart>
  </div>
  <food :food="selectedFood" v-ref:food></food>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import shopcart from 'components/shopcart/shopcart';
  import cartcontrol from 'components/cartcontrol/cartcontrol';
  import food from 'components/food/food';
  const ERR_OK = 0;
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    computed: {
      currentIndex() {
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i + 1];
          // 之所以要判断个!height2，是因为更好的获取最后一个菜单项的索引
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            // console.info('***dangqian菜单索引值***' + i);
            return i;
          }
        }
        return 0;
      },
      selectFoods() { // 用户已经选择的商品
        let foods = [];
        this.goods.forEach((good) => {
          good.foods.forEach((food) => {
            if (food.count) {
              foods.push(food);
            }
          });
        });
        return foods;
      }
    },
    components: {
      shopcart,
      cartcontrol,
      food
    },
    events: { // 事件监听(接受子组件派发的事件)
      'cart.add'(target) { // 调用cartcontrol组件指定的方法
        // console.log('goods下的events监听函数');
        this._drop(target); // 定义_drop处理逻辑
      }
    },
    methods: {
      selectFood(food, event) {
        if (!event._constructed) {
          return;
        }
        console.log('*******选择商品*******');
        this.selectedFood = food;
        this.$refs.food.show(); // 调用子组件的show方法，显示
      },
      _drop(target) { // 处理由子组件派发的事件逻辑
        // console.log(target);
        this.$nextTick(() => { // 性能优化，异步执行下落动画
          this.$refs.shopcart.drop(target); // goods父组件调用子组件的方法
        });
      },
      _initScroll() {
        this.menuScroll = new BScroll(this.$els.menuWrapper, {
          /**
          * 之所以要添加这个属性，
          * 原因是BScroll默认值开启了mousestart等事件，
          * 关闭了click等默认事件，所以click不生效。
          **/
          click: true
        });
        this.foodsScroll = new BScroll(this.$els.foodsWrapper, {
          probeType: 3,
          click: true
        });
        this.foodsScroll.on('scroll', (pos) => { // 食品列表页面，增加滚动事件监听
          this.scrollY = Math.abs(Math.round(pos.y));
          // console.info(this.scrollY);
        });
      },
      _calculateHeight() {
        let foodList = this.$els.foodsWrapper.getElementsByClassName('food-list-hook');
        let height = 0; // 这里设了一个伏笔，倒推index值。
        this.listHeight.push(height);
        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i];
          height += item.clientHeight;
          // console.info('元素' + height);
          this.listHeight.push(height);
        }
        // console.info(this.listHeight);
      },
      selectMenu(index, event) {
        /**
          只有vue自发的点击事件event中才有_constructed属性
          如果是原声js触发的点击时间，那么不向下执行
        */
        if (!event._constructed) {
          return;
        }
        let foodList = this.$els.foodsWrapper.getElementsByClassName('food-list-hook');
        let el = foodList[index];
        this.foodsScroll.scrollToElement(el, 300); // 是页面的el元素滚动到视区最上方
        // console.log(index);
      }
    },
    data() {
      return {
        goods: [],
        listHeight: [],
        scrollY: 0,
        selectedFood: {}
      };
    },
    created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
      this.$http.get('/api/goods').then((reponse) => {
        reponse = reponse.body;
        if (reponse.errno === ERR_OK) {
          this.goods = reponse.data;
          this.$nextTick(() => { // 确保dom已经渲染完毕才能执行回调函数
            this._initScroll();
            this._calculateHeight();
          });
        }
      });
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin';

  .goods
    display flex
    position absolute
    top 174px
    bottom: 46px
    width 100%
    overflow hidden
    .menu-wrapper
      flex 0 0 80px//等分 内容缩放情况 占位
      width 80px
      background #f3f5f7
      .menu-item
        display table
        width 56px
        height 54px
        padding: 0 12px
        line-height 14px
        &.current
          position relative
          z-index 10
          margin-top -1px
          background-color #fff
          font-weight 700
          .text
            border-none()
        .text
          display table-cell
          width 56px
          vertical-align middle
          border-1px(rgba(7, 17, 27, .1));
          font-size 12px
          .icon
            display inline-block
            width 16px
            height 16px
            vertical-align top
            margin-right 2px
            background-size 16px 16px;
            background-repeat no-repeat
            &.decrease
              bg-image('decrease_3')
            &.discount
              bg-image('discount_3')
            &.guarantee
              bg-image('guarantee_3')
            &.invoice
              bg-image('invoice_3')
            &.special
              bg-image('special_3')
      

    .foods-wrapper
      flex 1
      .title
        padding-left: 14px
        height 26px
        line-height 26px
        border-left 2px solid #d9dde1;
        font-size 12px
        color: rgb(147, 153, 159);
        background #f3f5f7
      .food-item
        display flex
        margin: 18px
        padding-bottom 18px
        border-1px(rgba(7, 17, 27, .1));
        &:last-child
          border-none();
          margin-bottom 0
        .icon
          flex 0 0 57px
          margin-right 10px
        .content 
          flex 1
          .name
            margin: 2px 0 8px 0
            height 14px
            line-height 14px
            font-size 14px
            color rgb(7, 17, 27);
          .desc, .extra
            line-height 10px
            font-size 10px
            color rgb(147, 153, 159)
          .desc
            margin-bottom 8px
            line-height 12px
          .extra
            & > .count
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
            right 0
            bottom 12px

              





      

</style>
 