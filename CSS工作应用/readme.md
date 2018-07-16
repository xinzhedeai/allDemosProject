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




    











