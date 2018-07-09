
# .gitignore文件 指定git工具忽略的文件，不纳入版本管理中
# README.md 项目简介、使用方式、相关链接
# CHANGELOG.md 
  - 项目每个版本的更新
  - 说明版本号、更新内容、修改了哪些问题等
  - https://dillinger.io/ 在线编辑markdown文件
  - markdown语法后面需要加上空格

语法：
 > 引用一段名言
 1. haha 
 1. heihei 
 1. 有序数列，只要带文字，会自动转化为12345的序号

[超链接](https://dillinger.io/)
![百度LOGO](https://dillinger.io/)  //插入一个图片
***粗体加斜体***
**粗体** 
* 斜体 *
|col1|col2|col3|
|---|:---:|---|
|正常|居中对题|正常|

#行内代码
`<script>`
#多行代码(javascript/html)
```html
    <span></span>
    <a></a>   
    <html lang="zh-CN">简体中文 zh：支持更广泛的中文字符 
    <meta charset="UTF-8"> 这句代码一般放到最上面，防止乱码的发生
    <meta http-equiv="X-UA-Compatible" content="ie=edge"> 
        强制使用最新的ie浏览器模式渲染页面
        ie兼容模式
        content="ie=EmulateIE7" 以ie7的标准渲染页面
        ie11文档模式已经被弃用了。。。。

```
### 知识点
1. https://browsehappy.com/ 浏览器升级网站
2. 命名： class用中横线分隔 id用驼峰法
3. 必不可少的图片使用img引入，可有可无的装饰性图片可以作为背景图片
4.[html5 大纲生成工具](https://gsnedders.html5.org/outliner/)
5. reset和normalize的区别
    normalize：不用想reset对所有元素进行重置。
               而是重写那些浏览器不一致的元素样式。
               修复了常见的样式bug。
    [下载链接](http://necolas.github.io/normalize.css/)

6. em/px/rem
    em: 相对的长度单位
        - em相对参考物为五元素的font-size
        - em具有继承的特点
        - 当没有设置font-size时，浏览器会有一个默认的em设置：
          1em = 16px
        缺点： 容易混乱
    rem: 参照物为跟html
        - 没有设置font-size时，浏览器会有一个默认的rem设置
            1rem = 16px, 这点与em是一致的。
        - font-size: 62.5% 1rem = 10px
        - font-size: 100%  1rem = 16px
        缺点：rem在ie8及以下不支持
7. flex
    兼容性，不支持ie9及以下的浏览器

8. 清除浮动
    1. 浮动元素后面添加此元素<div style="clear:both"></div>
    2. 给浮动元素的父容器添加样式overflow: auto; 也可以清楚容器内部元素的浮动。原因是添加overflow：       hidden样式后，浮动元素又回到了容器中。
    3.给浮动元素的父亲元素添加浮动样式（这种方式不推荐）
    4.after伪元素
9. BFC
    1. float可以触发BFC
    2. overflow
    3. display：table-cell/table-caption/inline-block
    4. position: fixed/absolute
10. 防止边距合并的方法
    .clearfix: after,
    .clearfix: before{
        content: '';
        display: table;
    }
    .clearfix: after{
        clear: both;
    }
11. line-height的高度值，中文chrome默认最低单位长度12px，而英语版本则是10px甚至更低。
12. html空白符, 每行代码后面的换行符就就成为空白符。 这会使display：inline-block的元素之间产生一个间隙。
    ```
        <li>heo</li>
        <li>222</li>
    ```
    - 解决方法
        1. 将换行的元素弄为同一行
        2. 设置父元素font-size： 0； 子元素font-size： 1.2rem；
        3. 将结束标签和起始标签
            ```
                <li>heo
                </li><li>222
             ```
        4. 不加上结束标签
             ```
                <li>heo
                <li>222
                <li>222
            ```
        5. 设置负的边距
        6. white-space-collapsing (css4草案中提出的属性。 兼容性不好，展望未来。)
        7. 如果仅仅是要背景色进行透明显示，那么使用rgba的背景色设置。
           *不要设置`opacity`属性，因为这个属性不仅会使背景色透明，连文字也会变透明。*



