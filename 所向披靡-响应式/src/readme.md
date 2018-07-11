
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
#npmm
1. https://www.npmjs.com/
    - jquery与jQuery同名的，npm下载会覆盖前面的文件夹
    - 下载包尽可能的用小写
    - "dependencies":{
        "jQuery": '1.7.4'  // 精确匹配
        "jQuery": '^1.7.4' // ~表示前一位要相同
        "jQuery": '~1.7.4' // ~表示前两位需要一直，后面一位版本可以不同
    }
2. 命令
    - npm i // npm install的简写
    - npm i --production // 下载生产需要的依赖包 dependentcies：{}
    - npm i --dev // 下载开发需要的包 devDepedentcies{}
    - npm install -g express // 全局安装，任何项目都可以使用这个了。。
        express --version
        express // 启动express服务
    
    - npm install gulp --save // 直接保存到dependencies里面
    - npm install gulp --save-dev // 直接保存到devDependencies
    - npm uninstall gulp --save-dev // 卸载生产/或开发环境下的依赖包
    - npm update jquery/无 // 更新jquery/全部npm包
    - npm install -h // 帮助手册

3. 基于node的轻量级服务器
    1. http-server
        - https://github.com/indexzero/http-server
        - npm i http-server -g
        - http-server --version/ -v // 启动服务 8080端口默认
            http://192.168.2.233:8080 // 局域网远程访问地址
            http://127.0.0.1:8080
        - http-server src -p 8888 // 改变服务器的端口号 

############## 兼容性 ##############
## PC ##
1. 火狐浏览器下，分数进位规则和chrome不一样
2. IE tester测试工具
3. 虚拟机软件
    virtualBox(免费)
    vmware
## 移动端 ##
1. http://compass.umeng.com/?&utm_source=zzbanner#/equipment?_k=8qgwno // 设备使用数量
2. [云测试](https://www.testin.cn/)
3. [安卓模拟器](http://www.genymotion.net/) // 基于virtualBox  这个虚拟机和真机和真机的差别不大
4. [浏览器hack](http://browserhacks.com/) // 找到各个浏览器hack的知识。hack：只有某个浏览器才认识的一些样式单独设定
5. [htm5shiv] // 使ie8及以下的浏览器支持h5标签
6. [respond] // 是的ie8及一下的ie浏览器支持媒体查询
7. [modernizr] // 一个js库，检测浏览器对h5和css3的支持情况
    在页面最顶部引入这个js库之后， 可以在页面中查看html的class属性：
    比如浏览器支持svg元素，那么会有svg这个类。如果不支持，那么会有no-svg这个类
    通过上面地支持样式类，可以在css中有针对性的hack样式。
    
    ```
        .svg .logo{ /* 支持svg的 */
            background-image: url(logo.svg)
        }
        .no-svg .logo{ /* 不支持svg的替代方案 */
            background-image: url(logo.png)
        }
    ```
8. 去兼容性检查网站查看下各个浏览器对某个元素或样式的支持情况
    [http://wwww.caniuse.com] (http://wwww.caniuse.com)


# 如何再多个设备上进行测试
1. 当手里有很多设备等待测试，在修改css后，怎样才能使得所有的设备刷新呢？
   - [省时的浏览器同步测试工具](www.browsersync.cn) **超级好用**
     - npm i -g browser-sync 安装 
     - browser-sync start 启动
       /**
        启动可配置的参数：
          --server “src” // 指定服务器启动是，根路径是哪个文件夹下
          --files "src" // 服务器 监听files下的src目录改变的文件
            1. files后面的也可以使用通配符 --files "src/css/*.css"
       **/
       browser-sync start --server "src" --files "src"


# 如何打包发布
1. 在发布前还可以做代码优化
    - 压缩
        [手动压缩js](https://javascript-minifier.com)
            缺点： 太耗费时间了。。
        
    - 合并
    - 增加版本号
2. 使用打包工具
    - grunt 自动化构建工具
    - gulp  自动化构建工具（不局限打包）
      [gulp官网](www.gulpjs.com.cn)
        1. npm i gulp --save-dev 安装
        2. gulp -v 查看版本
        3. 
        ```
            // 安装gulp插件(异步的，可以同时写多个安装插件)
            npm i gulp-rev gulp-rev-replace gulp-useref gulp-filter gulp-uglify gulp-csso --save
            
        ```
        4. 去npm官网查找gulp插件   eg：搜索gulp-
        5. 编写完task 执行gulp命令
        6. /*! 这里的注释不会被打包掉 */  
        7. 好用的插件
            - gulp-watch // 监控文件开遍，自动打包
            - gulp-postcss // 为css添加浏览器兼容前缀 
            - gulp-concat // 多个合并一个文件
            - gulp-responsive // 自动把提供的图片生成一系列的响应式图片


    - debug 当过滤文件获取流的时候，如果页面中没有使用相关的引用，得不到文件，那么就会引发***filter不是一个function的错误

    - webpack（静态资源打包工具）类似模块加载sea require等方面webpack比较好



