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
      1.











