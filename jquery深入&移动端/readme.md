# Bootstrap
  - 栅格布局 规则：
    1. `<div class="container"></div`调试内外边距 对其方式。。。
    2. row 默认12列
    3. 具体内容放在列元素之内，列元素能成为row元素的直接子元素****
    * `col-md-offset-5 ` offset-3偏移3个列margin-left像素
    * 支持嵌套 row-> col-> row
    * 列的顺序问题 
      `col-md-push-7` 元素向右边移动7个列
      `col-md-pull-5` 元素向左移动5个列
    * 超小屏幕 手机(<768px) .col-xs-
      小屏幕 平板（>=768px） .col-sm-
      中等屏幕 桌面显示器（>=992px） .col-md-
      大屏幕 大桌面显示器 （>=1200px） .col-lg-
      ```
        @media screen and (min-width: 400px){
          #div{
            font-size: 12px;
          }
        }
      ```
      