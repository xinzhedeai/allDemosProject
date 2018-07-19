#页面优化
1. 前端性能优化点
  - 网络层面
  - 构建层面
  - 服务端层面
  - 浏览器渲染层面

2. 设计的功能
  - 资源的合并与压缩
    1. 理解减少http请求烁亮和减少请求资源大小两个优化要点
    2. 掌握压缩与合并的原理
       [压缩png/jpg](https://tinypng.com)
    3. 掌握通过在线网站和fis3两种实现压缩和合并的方法
      - 在线压缩
        1. 将js css分别压缩，然后手动整理
        2   
      - fis3 构建  
        1. fis 的打包插件，npm fis3-postpackager-loader
        2. fis3 release -cd output // 执行fis3，并将文件输出到output文件夹下。

  - 图片编解码原理和类型选择
    1. jpg图片有损压缩,移除掉对人无用的图像数据。
    2. png8 支持透明 256色
       png24 - 2^24色 + 不支持透明
       png32 - 2^24色 + 支持透明 24+8（alpha颜色值）
       [在线png转化为webp](http://zhitu.isux.us/)
       fis构建工具-png替换为webp
       ```
        fis.match('*.{jpg,png}',{
          rExt: '.webp',
          parser: fis.plugin('webp',{
            quality: 60 // 压缩百分之60
          })
        })
        // fis的inline语法  inline之后，html中的图片会变大
        var inlineImage = __inline('./yindao.webp); 

       ```

    3. 不同图片的常用业务场景
      1. jpg有损压缩，压缩率高，不支持透明 （不需要透明图片的场景）
      2. png支持透明， 浏览器兼容好（8、24、32）（需要透明图片的场景）
      3. webp压缩程度更好，在ios webview有兼容性问题 （安卓全部）
        png或jpg图片大小小于8kb，那么建议使用内联。
      4. svg矢量图，代码内嵌，相对较小，图片样式相对简单的场景 
    4. css雪碧图
      - 有点减少http请求数
      - 整合图片比较大时，一次加载比较慢
      [在线制作雪碧图](http://www.spritecow.com) // 选中雪碧图中的图标可以生成css代码
    5. Image inline（图片base64编码，当图片特别小的时候，为了减少http请求次数可以使用这个方法
      - 将图片的内容内嵌到html当中 -> 减少你的网站的http请求数量
    6. 使用矢量图
      - 使用svg进行矢量图的绘制
      - 使用ifonfont解决icon的问题
        [阿里字体图标](https://www.iconfont.cn)
    7. 在安卓下使用webp
      - 更好的图像压缩算法
      - 更小的图片体积
      - 具备无损有损的压缩模式
      - alhpa透明以及动画的特性
    8. 页面的图片不是正常形的，那么就是使用png格式的。
  
  - 浏览器渲染机制
  - 懒加载预加载
  - 浏览器存储
  - 缓存机制
  - PWA
  - Vue-SSR

3. 前端性能优化原理
  - 作用及原理
  - 如何与真实业务场景结合
  - 理论结合实践
  - 量化分析

# html压缩
  1. 使用在线网站进行压缩
  2. nodejs提供了html-minifier工具
    - 需要配置。如html里面的css是否需要压缩等
    - nodejs可以作为构建工具，也可以作为服务器运行环境
  3. 后端模板引擎渲染压缩
# css压缩
  1. 无效代码删除
  2. css语义合并
  *如何进行css压缩*
  - 使用在线网站进行压缩
  - 使用html-minifier对html中的css进行压缩
  - 使用clean-css对css进行压缩

# js压缩与混乱
  1. 无效字符的删除
  2. 提出注释
  3. 代码语义的所见和优化
  4. 代码保护
  ##如何进行js压缩和混乱##
  - 使用在线网站进行压缩
  - 使用html-minifier对html中的js进行压缩
  - 使用uglifyjs2进行压缩
# 文件合并 #
  *文件合并存在的问题*
  1. 首屏渲染的问题
  2. 缓存失效的问题
  **以上两个问题解决**
  - 公共库合并
  - 不同页面的合并
  - 见机行事，随机应变
  ##如何进行文件合并##
  1. 使用在线网站进行文件合并
    - 线上工具](http://tool.oschina.net/jscompress)
      缺点：不能压缩es6代码。需要使用fis3构建，利用babel将es6转化为es5然后在进行压缩

  2. 使用node.js实现文件合并
# HTML渲染过程 #
  1. 特点
    - 顺序执行、并发加载
      *单个域名，浏览器并发是有限的。（备用3、4个域名）*
      1. 此法分析 从上到下
      2. 并发加载
      3. 并发上限
    - 是否依赖
    - 依赖关系 
      1. js防止阻塞，可以在script标签上添加async。
    - 引入方式
      1. 通过script src标签引入
      2. 通过import引入
 2. css 阻塞
    - css head中阻塞页面的渲染
    - css阻塞js的执行
    - css不阻塞外部脚本的加载
  3. js阻塞
    - 直接引入的js阻塞頁面的渲染
    - js不阻塞資源的加載
    - js順序執行， 阻塞后续js逻辑的执行


# 懒加载
  - 图片进入可视区域之后请求图片资源
  - 对于电商等图片很多， 页面很长的业务场景适用
  - 减少无效资源的加载
  - 并发加载的资源过多会阻塞js的加载，影响网站的正常使用
  *案例： 手淘*
  - 插件 zepto.lazyload.js
    ```
    <script src="zepto.min.js">
    <script src="zepto.lazyload.js">
    <img src="" class="image-item" lazyload="true" data-original="http://tipian.jpg">
    <script>
      $('img[data-original][lazyload]').lazyload();
    </script>
    ```
  - 方法
    1. 先设置占位符 先设定好要加载图片的高宽
# 预加载
  - 图片等静态资源在使用之前的提前请求
  - 资源使用到时能从缓存中加载， 提升用户体验
  - 页面展示的依赖关系维护
  *案例： 立即抽奖 奖品选中状态，不同的图片切换*
  - 方法
    1. 直接在页面html中img标签加载
    2. 使用image对象
    ```
      var  image = mew Image();
      image.src = 'http://image.jpg";
    ```
    3. 使用xmlhttprequest
      优点： 解决跨域的问题、更精细的控制加载过程
    4. preload.js

# 重绘与回流
  - 回流：
    1. 当render tree因为元素的规模尺寸、布局、隐藏等改变而需要重新构建，称为回流。
    2. 当页面布局和几何图形属性改变时需要回流
    *触发页面冲布局的属性*
      - 盒子模型相关属性会触发重布局
        `width、height、padding、margin、display、border-width、border、min-height`
      - 定位属性及浮动
        `top、bottom、left、right、position、float、clear`
      - 改变节点内文字结构
      `text-align、overflow-y、font-weight、overflow、font-family、line-height、vertical-align、white-space、font-size`

  - 重绘
    1. 当render tree中的一些元素需要更新属性， 而这些属性只是影响元素的外观， 风格，而不会影响布局的，比如： background-color。
       则就叫称为重绘。
  *回流必将引起重绘，而重绘不一定会引起回流*
  **优化点**
  1. 将频繁重绘回流的DOM元素单独作为一个独立层，那么这个DOM元素的重绘和回流的影响只会在这个图层中
     如何将dom元素变为新的独立图层？
     chrome创建图层的条件
      1. 3D或透视变换css属性（perspective transform）
      2. 使用加速视频解码的<video>节点
      3. 拥有3D（WebGL）上下文或加速的2D上下文的<canvas>节点
      4. 混合插件（如flash）
      5. 对自己的opacity做css动画或使用一个动画webkit变换的元素
      6. 拥有加速css过滤器的元素
      7. 一个元素拥有一个子元素，该子元素在自己的层里
      8. 在复合层上面渲染的元素
  2. 避免使用触发重绘、回流的css属性
  3. 将重绘、回流的影响范围限制在单独的图层之内



# TIPS 
  1. network观察请求的总耗时，需要chrome低版本内核才可以看到。比如：360
  2. chrome浏览器查看渲染过程方法  perform面板下 memory/enable/screenshot






