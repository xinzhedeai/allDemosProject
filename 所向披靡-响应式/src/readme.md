
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
    ** 新方法
        ```
            em:before{
                content:'';
                display: table;
            }
        ```
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
        6. `white-space-collapsing` (css4草案中提出的属性。 兼容性不好，展望未来。)

13. 如果仅仅是要背景色进行透明显示，那么使用rgba的背景色设置。
    *不要设置`opacity`属性，因为这个属性不仅会使背景色透明，连文字也会变透明。*
14. `\00a0`空白字符，与html中的 `&nbsp;` 效果一样 
15. /*文字过长隐藏+省略号*/
    ```
        .notice a:first-child{ 
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    ```
16. 图片增加灰色效果---使用滤镜filter (ie认识)
        filter： grayscale(100%);
    chrome不认识，那么就需要加上前缀
        -webkit-filter: grayscale(100%);

    [自动添加css兼容前缀的网站](http://autoprefixer.github.io/)

17. 响应式调试方法 
    - 选择页面上面浅灰色的bar，可以随意切换不同的宽度
    - 选中上面的输入框，按住shift+上下箭头，可以微调高宽。每次10个像素。
    - show media queries 可以将css媒体查询断点提现在模拟器上，方便调试
    注意：rem在媒体查询中会有个坑，就是断点上的rem不会以html（10px）中的字体大小为准
    而是以浏览器默认的16px为准。综上可以换为兼容性更好的em。
 18.  ~选择后面所有的兄弟元素
    ```
        <li></li>
        <li></li>
        <a></a>
        <li></li>
        ul li ~ li  /* a后面的li也可以被选中 */
    ```
19. E[attr] /* 只要有这个属性就会被选中 */
    E[~] 以空格隔开的属性值可以背选中选择到。
    E[|=value] 以value-开头的属性值
    p:nth-child(n) *n是从1开始的而不是0.*
        - 这里是找p元素的父亲元素下的第几个元素
        - 与nth-of-type不同在于，后者是找父元素下符合type类型的元素中查找第几个。
    :not() 选择器括号里面只能嵌套标准选择器。
20. 移动设备宽度最小320px
21. 表格响应式的处理 
        - 列行转置
        - 将行列转换为一个个表单的形式展现

22. 打印样式 
    1. page-break-inside: avoid; // opera，防止在页面内插入分页符
    2. ``` // 不让标题和内容分开
         h2{
             orphans: 3;
             widows: 3; 
         }
        ```
23. 怎么样来挑选第三方组件
    1.使用人数
    2.是否开源
    3.文档是否齐全
    4.活跃性
    5.小巧够用的组件（轻量级）
    项目选用OwlCarousel2轮播组件
        1.依赖jquery
        2.支持鼠标悬浮暂停

24. 如何实现响应式图片
    - js或服务器
        desc：将屏幕尺寸写到cookie，由服务器返回不同的图片
    - srcset（ie不兼容）
        浏览器会根据屏幕变化进行感知，从srcset属性的值中选择最合适的图片
        <img src="img/480.png" srcset="img/480.png 480w, img/800.png 800w, img/1600.png 1600w">
        此方法有缺点
    - srcset配合sizes
        <img src="img/480.png"
         srcset="img/480.png 480w, img/800.png 800w, img/1600.png 1600w"
         sizes="100vw"> 让浏览器选择图片的策略以浏览器视口的高宽为准。
         如果图片为窗口的50%，那么sizes也要改为50vw。这样的话
         在改变浏览器高宽的时候，才能正常的选择合适的图片。
         sizes="(min-width: 800px) 800px, 100vw" // 当超过视口宽度大于800px时候，那么图片预选为800px的
         当视口超过800px的时候，图片只有800px 当小于800px的时候，图片与视口大小一样
            当有边距的时候，指定预选图片的宽度可以使用计算模式
            sizes="(min-width: 800px) calc(100vw - 30em), 100vw" 

    - picture(ie不兼容)
        根据不同屏幕宽度选择完整图片还是裁切过的图片
        ```
            <picture>
                <source 
                    media="(min-width:36em)"
                    srcset="img/tiananmen-s.jpg 786w"/>
                <source media="(orientation: lanscape)"
                    srcset="img/tiananmen-s.jpg 786w"/>
                <source media="(orientation: lanscape)"
                    srcset="img/tiananmen.jpg 1800w"/>
                <source type="image/svg+xml"
                    srcset="logo.svg 480w, logo.svg 800w,logo.svg"/>
                <source type="image/webp"
                    srcset="logo.webp 480w, logo.webp 800w,logo.webp"/>
                <img src="img/tiananmen.jpg">
            </picture>
        ```
        可以设置多组srcset
    - svg
        不失真（不是基于像素的，而是基于绘制规则的）
        制作svg图片：
            1. illustrator绘制
            2. 在线绘制
                http://editor.method.ac/
                https://icomoon.io   

25. [查看兼容性的网站](https://www.caniuse.com)
26. polyfill填平浏览器兼容性的问题。
    picturefill响应式图片填充工具
    https://github.com/scottjehl/picturefill/releases
27. 从ps到处的图片，还是可以再压缩的
    svg: iconizr.com
    png/jpg: https://tinypng.com


######### NODEJS ###########
