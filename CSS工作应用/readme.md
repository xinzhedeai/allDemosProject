#html
  1. 常见元素
    - <base href="/"> 全局定义a的超链接基本路径
    - <meta charset="uft-8">
    - form[enctype]: 针对post对表单值进行编码
      1. url-encode
      2. form-data 这个格式可以上传文件
      3. option[selected] // 选中
      4. button
        <button type="button">
        <button type="submit">
        <button type="reset">
        <input type="submit"> // 也是个按钮

      5. [html大纲算法工具outline](https://h5o.github.io/)
      6. [html校验网站](https://validator.w3.org)
  2. html5新增内容
    1. 区块元素
    2. 表单增强
      日期/时间/搜索/表单验证/placeholer/自动聚焦
    3. header/footer头尾
    4. section/article区域
    5. nav导航
    6. aside不重要内容
    - em/strong 强调
    - i（保留多用于图标）icon
  3. html元素分类
    - 按默认样式分
      1. 块级block
      2. 行内inline
      3. inline-block
    - 按内容分
      1. 占据文档流的
      2. 不占据文档流的（title、script标签等）
      3.有交互的 a元素
      4. head
      5. 区块元素
      6.短语 em元素
  4. 嵌套关系
    - 块级元素可以包含行内元素
    - 块级元素不一定能包含块级元素
      1. p包含div是不合法的 如果这么做，浏览器有容错机制，会将p元素
      中的div元素移到外边去。

    - 行内元素一般不能包含块级元素
      1. a元素可以嵌套div（浏览器支持，但是不合法）
        a是透明的内容模型，在计算合法化的时候，a不参与计算

  5. html元素默认样式（注意：html是有样式的）
    - 默认样式的意义
      1. ul的序列标记位置，正常情况下是不在元素布局内的。可以设置它的
      样式，list-style-positon: inside;
    - 引发的问题
    - reset
      1. yui的css reset
      2. normalize.css // 修正不同浏览器下的样式差异



  6. 面试真题
    - doctype的意义是什么？
      1. 让浏览器以标准模式渲染
      2. 让浏览器知道元素的合法性
    - html xhtml html5的关系
      1. html属于SGML
      2. xhtml属于xml，是html进行xml严格话的结果
      3. html5不属于SGML或XmL。 单独的
    - html5有什么变化
      1. 新的语义化元素
      2. 表单增强
      3. 新的api（离线/音视频/图形/实时通信/本地存储/设备能力）
      4. 分类和嵌套变更
    - em和i有什么区别
      1. em是语义化的标签，表示强调
      2. i是纯样式的标签，表斜体
      3. HTML5中i不推荐使用，一般用做图标
    - 语义化的意义是什么？
      1. 开发者容易理解
      2. 机器容易理解结构（搜索、读屏软件）
      3. 有助于seo
      4. semantic microdata （另外一种规范标记，更突出语义化）
    - 哪些元素可以自闭和
      1. 表单元素input
      2. 图片img
      3. br/hr
      4. meta link
    - html和dom的关系
      1. html是固定的
      2. DOM是由html解析而来，是活的
      3. js可以维护DOM
    - property和attribute的区别
      1. attribute是固定的（属性）:html代码中写的那个值
      2. property是活的（特性）:输入框中的值
    - form的作用？
      1. 直接提交表单
      2. 使用submit/reset按钮
      3. 便于浏览器保存表单
      4. 第三方库可以整体提取值
      5. 第三方库可以进行表单验证
# 选择器
  1. 用于匹配html元素
  2. 分类和权重
    - :not(.aaa)
    - 权重：
      1. id + 100
      2. 类 属性 伪类 + 10
      3. 元素 伪元素 + 1
      4. 其他选择器 + 0
      * 权重是不进位的。无论有多少个类叠加，都不会大于id选择器 *
  3. 解析方式和性能
     - css解析是从右往左的
  4. 值得关注的选择器
# 非布局样式
  - 字体、字重、颜色、大小、行高
    1. 字体族（）
      - 衬线字体（sefif） eg：宋体
      - 非衬线字体（sans-serif） eg：黑体
      - 等宽字体（monospace）
      - 非*****（）
      - 手写体（cursive）
      - 花体（fantasy）
      debug方式： 控制台 -> computed -> rendered fonts(右下角)
    2. 多字体（fallback）有则使用，没有则找其他备选字体进行使用
    3. 网络字体、自定义字体
      - 自定义字体
        ```
          @font-face{
            font-family:"IF";
            src: url("./IndieFlower.ttf");
          }
          .custom-font{
            font-family: IF;
          }
        ```
    4. iconfont

    * 字体名称可以加引号，字体族是不能加引号的 *
      eg：font-family: "Microsoft Yahei", serif

  - 行高
    1. 行高的构成
      - 行高->linebox->inlinebox(决定行高的高度)
    2. 行高相关的现象和方案
      - 中文字体，以基线对其。汉字的话是文字的底部就是基线
      - vertical不要用像素对其。因为适应性很差，如果改变字体大小又会不对齐了。
      eg： 图片时inline元素，遵守行高规则，以基线对其。但是基线
      和底线一点距离，这就是为什么图片下边会有一点空白的距离。
      空隙大小时根据字体大小来的，如果文字大小6px，那么空隙大小为3px
      解决方法： vertical-align： bottom；
    3. 行高的调整
    eg： 行高会改变内联元素的高度
  - 背景、边框
    1. 背景颜色
      - 颜色名称
      - 16进制 #ff0000(简写：#f00)
      - hsl(色相0-360，饱和度0-100%，亮度0-100%)
    2. 渐变色背景
      - 
        ```
          background: -webkit-linear-gradient(left, red, green);
          background: linear-gradient(to right, red, green);
          background: linear-gradient(45deg, red 0, green 10%, yellow 100%);
        ```

    3. 多背景叠加
        ```
          background: linear-gradient(135deg, transparent 0, transparent 49.5%, green 49.5%, green 50.5%, transparent 50.5%, transparent 100%);
          background: linear-gradient(45deg, red 0, green 10%, yellow 100%);
          background-size: 30px 30px
        ```
    4. 背景图片和属性（雪碧图）
      - 做雪碧图，一般位置都是需要设置负的。
    5. base64和性能优化
      - 在线转化的base64文本可以放到background的url括号里面
      - 缺点：增加了体积 增加了浏览器解析的时间。适用于小图标。
      - 生产环境下，需要使用构建工具，进行图片 -> base64的转换
    6. 多分辨率适配


  - 边框 
    1. 属性： 线型、大小和颜色
      - 12个值可以设定
    2. 背景图
      - border-width: 30px; //大小只改变显示大小，缩放比例等
      - background-image: url(./border.png) // 类似9宫格样子的。只是中间的小方块被拉伸
        可以使用repeat平铺，中间有很多小方块。但是小方块并不平均排列。
        使用round进行平均分配。
    3. 衔接（三角形）
      - 三角形的那条边可设置为圆角，制作出*扇形*的效果。
  - 滚动、换行
    1. overflow
      auto // 需要滚动的时候才显示滚动条
      scroll // 无论需不需要都显示滚动条 
    2. overflow-wrap(word-wrap) 通用换行控制
      - 是否保留单词
        word-wrap： break-word； // 可以对单词进行折行
    3. word-break 针对多字节文字
      - 中文句子也是单词
      - word-break: break-all; // 文论是不是一个单词，都打断
                    keep-all；// 保留单词。（有兼容问题）

    4. white-space 空白处是否断行
      - white-space： nowrap；// 保证一个文本不换行
  - （装饰性属性及其他）粗体、斜体、下划线
    1. font-weight(100~900 不能有零头100整)
    2. font-style： itatic；
    3. text-decoration
    4. cursor: pointer;

  - 其他

#css HACK
  1. 不合法，但是在某些浏览器生效的写法
  2. 主要用于区分不同浏览器
  * 缺点： 难理解 男维护 易失效 *
  - 替代方案
    1. 特性检测
    2. 针对性加class
  * 有点：简单粗暴 *
  ##注意##
  1. hack写法要在标准写法的后边

# 真题
  1. css样式的优先级
    - 计算权重确定
    - ！important
    - 内联样式
    - 后写的优先级高
  2. 雪碧图的作用
    - 减少http请求数，提高加载性能
    - 有一些情况下可以减少图片大小
  3. 自定义字体使用场景
    - 宣传、品牌、banner等固定文案
    - 字体图标
  4. base64的使用
    - 用于较少http请求
    - 适用于小图片
    - base64的体积约为原图4/3
  5. 伪类和伪元素的区别
    - 伪类表状态
    - 伪元素是真的有元素
    - 前者： 后者：：
  6. 如何美化checkbox
    - label[for]和id
    - 隐藏原生input
    - ：checked + label

#css布局
  1. table表格布局
  2. float浮动+margin
  3. inline-block布局
  4. flexbox布局
## 浮动
  - 元素浮动
  - 脱离文档流但脱离文本流（与文字挨着时候，会把文本挤出去。 文字环绕图片效果）
  - 对自身“形成块”（BFC）
  - 位置尽量靠上
  - 位置尽量靠左（right尽量靠右）
  - 对兄弟元素的影响：
    1. 上面贴非float元素
    2. 旁边贴float元素
    3. 不影响其他块级元素位置
    4. 影响其他块级元素内部文本
    5. 对父级元素影响
      - 从布局上消失
      - 高度坍塌
  * 经典的三栏布局 *
    - 左中右三个元素，中间的不是浮动的。如果想让三个元素都在一个
      行上，那么需要将左右浮动元素放到前面，剩下的空间留给不浮动的div元素。
# inline-block
  - 像文本一样排block元素
  - 没有清楚浮动等问题
  - 需要处理间隙
  * tips *
    1. 自适应有限制
    2. 定宽的布局可以


## css面试真题
  - 实现两、三栏布局方式
    1. table表格布局
    2. float浮动+margin（兼容性好）
    3. inline-block布局
    4. flexbox布局
      1. flex：1； 等分比例
        如果想让一个元素的宽度固定，那么些固定像素即可。width：2px；

  - positon：absolute、fixed有什么区别？
    1. 前者相对最近的absolute/relative
    2. 后者相对屏幕（移动端是viewport）
  - display： inline-block的间隙
    原因： 字符间距
    解决：消灭字符或者消灭间距（父元素fontsize：0；）

  - 如何清除浮动
    1. 让盒子负责自己的布局
       overflow： hidden（auto）
    2. ::after{clear:both;}
  - 如何适配移动端页面
    1. viewport
    2. rem/viewport/media query（处理屏幕大小的问题）
    3. 设计上： 隐藏+折行+自适应空间
    * 注意 *
      1. 大范围的要放到最上面
      ```
        @media (max-width: 375px){ // 小于等于375px生效
          html{font-size: 12px;}
        }
        @media (max-width: 255px) { // 小于等于255px的才生效
          html{} 
        }
        如果大小顺序放反了，那么大范围的会覆盖小范围的样式。

      ```
      2. 在媒体查询中，尽可能不用rem，由于会存在小数点的问题，导致不精确。
## background
  1. 在雪碧图上，background-position添加位置信息
     加上过渡，可以达到很不错的效果。
  2. background-size： 100% 100%；// 是根据容器大小决定的
                       cover 不会压缩或拉伸图片 覆盖容器
                       contain 以一个较长的边为准进行覆盖。填充不上那么就留白
## clip-path
  1. 对容器进行裁剪
    ```
      // 占位是不变的 但是容器多余部分被裁掉了
      clip-path:insert(100px 50px);
    ```
  2. 常见几何图形
     ```
      // 在左上角100px 100px位置绘制一个半径为50px的圆形
      clip-path: circle(50px at 100px 100px);
     ```
     * 特殊效果 *
      ``` 心跳的效果
        a{clip-path: circle(50px at 100px 100px); transition: clip-path .4s;}
        a:hover{clip-path: circle(80px at 100px 100px);}
      ```
      ```绘制不规则多边形
        clip-path: polygon(50% 0%, 100% 50%，50% 100%，0% 50%);
      
      ```
  3. 自定义路径
    ```
      clip-path: url(#clipPath);
      <svg>
        <defs>
          <clipPath id="clipPath">
            <circle cx="60" cy="60" r="50" fill="#34538b"/>
          </clipPath>
        </defs>
      </svg>
    ```
# transform
  - tranform的各个属性值的顺序是不可以随意交换的
    由于变化是根据矩阵变化的。顺序的不同会导致最终效果的不同。
## tips
  1. div的display：table可以模拟table布局，实现元素垂直居中
  2. display：relative的元素。不会因为自己的偏移而影响布局。
  3. absolute和fixed都是脱离文档流的。
  4. 绝对定位的元素需要指定高度，百分比无效。因为不能与
     父元素的高度绑定。
  5. 阴影和其元素样式式一模一样的。
     可以使用阴影box-shadow复制一个元素
     拓展值为负的，会减少阴影的大小。而不会消失。
     eg：效果，一个元素画什么什么东西，都是用box-shadow实现的
         任何形状可以使用box-shadow画出一个个点拼起来。
    box-shadow特性：
      - 营造层次感 
      - 充当没有宽度的边框
      - 特殊效果（一个元素制作机器猫）
  

## css面试真题
  1. 如何用一个div画xxx
    - box-shadow无限投影
    - ::before
    - ::after
  2. 如何产生不占空间的边框
    1. box-shadow
    2. outline
  3. 如何实现半圆、扇形等图形
    - border-radius组合：
      1. 有无边框
      2. 边框粗细
      3. 圆角半径
  4. 如何实现3d效果
    ```
      perspective: 500px;
      transform-style: preserve-3d;
      transform: translate rotate ...
    ```

# css动画
  - transition补间动画（有始有终）
    transition-delay： 1s； 简写是放到width的前面
    用，号隔开，可以指定多个属性的过渡。
  - keyframe关键帧动画
  - 逐帧动画
  * tips *
    chrome浏览器有针对动画测试的工具Animations












