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
    - 是否依赖
    - 依赖关系
    - 引入方式
    


# TIPS
  1. network观察请求的总耗时，需要chrome低版本内核才可以看到。比如：360
  2. 






