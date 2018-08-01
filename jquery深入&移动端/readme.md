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
    * row里面才可进行栅格化布局的
# 模块分类和排版布局
  - 8大类型
    基础、颜色、尺寸、特殊元素、并列（按钮组）、嵌套子元素（下拉组件三角形、分页）
    动画
  - 布局排版
    1. 样式类
      h1 ~ h6  lead
      ```
        <abbr title="hellow"></abbr>
        <address></address>
        .list-inline // 将ul下的li同行显示
        .dl-horizontal // 自定义列表横向显示
        .table .table-striped .table-bordered .table-hover
        tr.active td.active // 整行整列变色（除了active，还有info/success/warning/danger）
        form - > div.form-group(将表单元素作为组来使用) -> input.form-control
        form.inline -> div.form-group ->input.form-control // title和输入框在同一行
        .sr-only 隐藏元素
        form.form-horizontal // 水平表单（自适应）
        .disabled
        form.form-horizontal->div.form-group->.form-control-static // 静态控件
        // 校验
        label.control-label // 控制边距和字体大小
        form.form-> div.form-group.has-success // .has-error
        .glyphicon .glyphicon-ok // 成功 *-warning-sign // 警告 *-remove // 错误

      ```
  - 按钮
    .btn-default/primary/success/info/warning/danger/link
    .btn-lg/xs/-sm
    .btn-block // 拉伸按钮，与父元素宽度相同
    .active // 激活状态
    *以上样式不仅可以应用到按钮，还可以应用到超链接上！！！*
    disabled：禁用
  - 图片
    .img-rounded（圆角）/.img-circled(椭圆，宽高设为一样的，就变成圆了)/.img-thumbnail(淡淡的边框)

  - 文本
    .text-primary/muted/success/warning/danger
  - 关闭图标
    button.close
  - 下三角
    div.caret
  - 常用
    .pull-right // 右浮动
    .pull-left
    .content-block // 块元素
    clearfix:before/ clearfix:after 清除浮动
- 常用组件（拿来就用的图片或效果/下拉菜单、按钮组、导航、图标）
  1. 图标 基本使用：内联元素/基本类/图标类
    ```
     // 图标和输入框连一起的样式
     <div class="input-group">
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-pencil"></span>
      </span>
      <input type="text" class="col form-control">
     </div>
     
    ```
  2. 按钮
    ```

      // 按钮组 btn-group-lg/sm/xs
      // .btn-group-justified 按钮组铺满容器 类似手机地步tab栏
      <div class="btn-group">
        <a class="btn btn-info"></a>
        <a class="btn btn-info"></a>
      </div>
      // 按钮工具栏
      <div class="btn-toolbar">
        <div class="btn-group">
          <a class="btn btn-info"></a>
          <a class="btn btn-info"></a>
        </div>
      </div>
    ```
  3. 导航 nav nav-tabs/nav-pills/nav-justified(移动端常用)
    ```
       // nav是导航 加上nav-tabs样式变为选项卡
       <ul class="nav nav-tabs">
        <li class="active">分类</a></li>
        <li class="">分类</a></li>
       </ul>
    ```
    ```
    // 导航条
    navbar navdefault navbar-brand
     <nav class="navbar navbar-default">
        <div class="navbar-header">
          <a href="#" class="navbar-brand">test</a>
        </div>
        <ul class="nav navbar-nav">
          <li><a href="#">111</li>
          <li><a href="#">111</li>
          <li><a href="#">111</li>
        </ul>
     </nav>
    <!-- 常用导航
      navbar-toggle 定位 内外边距 背景色
      data-toggle="触发元素" 由什么事件触发的
      data-targe="#aaa" 谁触发的事件
      icon-bar 隐藏的菜单选项
    -->
     <nav class="navbar navbar-default">
        <div class="container-fluid"><!-- 居中显示 -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#aaa">
              <span class="icon-bar"></span>
            </button>
            <a href="#" class="navbar-brand">菜单</a>
          </div>
        </div>
        <ul class="nav navbar-nav">
          <li><a href="#">111</li>
          <li><a href="#">111</li>
          <li><a href="#">111</li>
        </ul>
     </nav>
    ``` 
  4. 标签 label label-default/primary/success/info/warning/danger
      role="tablist" // 屏幕阅读器
  5. 徽章 span.badge
  6. 缩略图 .thumbnail
  7. 警告框 .alert .alert-success/info....
  8. 进度条 .process->.process-bar

# 插件（插件名称.js / bootstrap.js）
  - 调用方式
    1. data属性
    2. 编程方式
      对象.modal({'a':value, 'b': value});
      对象.modal('字符串')
  - 模态框（可选尺寸）
  - 滚动监听（页面内容和导航按钮对应）
    ```
        <nav id="test" class="navbar navbar-default">
          <div class="container">
            <div>
               <ul class="nav navbar-nav">
                <li><a href="#ios">ios</li>
                <li><a href="#php">php</li>
                <li><a href="#java">java</li>
              </ul>
            </div>
          </div>
        </nav>
        <!--
          data-target="test" 执行滚动监听的目标
          data-spy="scroll" 添加滚动监听
        -->
        <div data-targe="#test" data-spy="scroll" style="height:200px;overflow:auto;position:relative">
          <h4 id="ios">ios</h4>
          <p>
              这是ios的内容 这是ios的内容 这是ios的内容 这是ios的内容 这是ios的内容
          </p>
           <h4 id="php">php</h4>
          <p>
              这是ios的内容 这是ios的内容 这是ios的内容 这是ios的内容 这是ios的内容
          </p>
           <h4 id="java">java</h4>
          <p>
              这是ios的内容 这是ios的内容 这是ios的内容 这是ios的内容 这是ios的内容
          </p>
        </div>
    ```
  - 选项卡
    ```
      <!--
        选项卡： 
          tab-content bs中用来定义选项卡的父级元素
          fade 指定透明度和渐变效果
          fade in 透明度
          tab-pane 隐藏元素
          active 显示元素
      -->
      <ul class="nav nav-tabs">
        <li class="active">
          <a href="#home" data-toggle="tab">aaa</a>
        </li>
        <li class="">
          <a href="#test" data-toggle="tab">bbb</a>
        </li>
        <li class="">
          <a href="#demo" data-toggle="tab">ccc</a>
        </li>
      </ul>
      <div class="tab-content">
        <div id="home" class="tab-pane fade in active">
          aaa
        </div>
        <div id="test" class="tab-pane fade">
          bbb
        </div>
        <div id="demo" class="tab-pane fade">
          ccc
        </div>
    ```
  - 弹出框popover
    ```
      <!--
        弹出框
        data-container 向指定元素添加弹出框
        data-toggle="popover" 指定弹出框执行
        data-placement 弹出框的方位 /top/bottom/left/right
        对象.popover();
        data-trigger="focus" // 控制popover消失 
      -->
      <div class="container">
        <button type="button" class="btn btn-default" data-container="body" 
                data-toggle="popover" data-placement="top" 
                data-content="弹出框内容" data-trigger="focus">
          弹出窗
        </button>
      </div>
      <script>
        $(function(){
          $('[data-toggle="popover"]').popover();
        })
      </script>
    ```

* tips *
  1. npm install normalize.css 安装重置样式文件 
  2. demo样式没出来，竟然是因为样式字母大小写的问题~~~低级错误，切记不要再犯~~~！！
  3. html标签里面如果有两个class属性，那么只有第一个class的属性生效
  4. .hidden-sm / .hidden-xs 添加该样式类的元素在手机或平板下隐藏



# jquery 动画
  - 显示和隐藏元素
    ```
      $body.is(':hidden'); // 判断一个元素是否为隐藏状态的
      toggle // 切换元素显示隐藏的状态
      fadeToggle // 根据透明度设置显示隐藏
      fadeTo(100, 0.5, 'swing', function(){}) // 控制透明度的显示程度
      slideUp/slideDown/slideToggle // 改变元素尺寸
      show(199(ms), [切换效果（swing(jquery默认，更有动感)/linear（匀速的））], [callback])
    ```
  - 停止动画
    ```
      $ele.stop(clearQueue(Boolean), [.goToEnd](Boolean))
      $ele.finish([queue]): 所有的堆栈动画直接结束
      $ele.stop(true, true): 阻止当前的动画
      jQuery.fx.off = true // 全局开关。关闭所有jquery的动画，直接进入finish的状态
      
    ```
    jQuery Easing 插件
      [地址一](https://github.com/gdsmith/jquery.easing)
      [地址二](http://code.ciaoca.com/jquery/easing/)
      使用：
      ```
        <script src="jquery"></script>
        <script src="jquery.easing.js"></script>
        <script>
          $('.title').click(() => {
            $(this).siblings('.body').slideToggle(3000, 'easeInOutElastic', () => {
              console.log('动画完成');
            });
          });
        </script>
        
      ```
  - 自定义动画
    ```
      // 不是万能的，字体、颜色不能进行过渡
      /**
       *  主要是针对：
       *  top left 位置属性
       *  width height 尺寸属性
       *  margin padding border 边距属性
       *  font-size 字体属性
       *  opacity 透明度属性
       *
       **/
      $ele.animate({
        width: 400,
      }, 3000, fn);
      $ele.animate({
        width: '+=400', // 竟然还可以进行运算 (百分号也可以)
        height: '-=100' // （50%）
      }, 3000, fn);
    ```
    options(参数，不仅animatte，其他show（）等也可以使用)
      always/complete/done/duration/easing/fail/progress/queue(Boolean)/specailEasing/start/step
      ```
        $ele.animate({
          width: 50%,
        }, {
          always: () = > {
            console.log('always');
          },
          progress: () = > {
            console.log('progress ');
          },
          step: () => { // 没动画一点都会触发这个函数
            console.log('step');
          },
          duration: 3000,
          easing: 'linear'

        });
        // 动画效果案例(按钮慢慢放大，最后消失)
        $ele.click(() => {
          var $this = $(this);
          $this.css({
            position: 'absolute',
            top: $this.position().top,
            left: $this.position().left
          }).animate({
            width: $this.width() * 2,
            height: $this.height() * 2,
            top: $this.position().top - $this.height,
            left: $this.position().left - $this.width,
            opacity: 0
          }, 3000);
        });
        
      ```
    - 动画队列
      - 动画队列堆栈
        动画异步执行
        .queue([name], fn)
        .queue([name], queue)
        .dequeue([name])
        ```
          // 传统写法 队列
          $ele.animate({left: '+=50'}, 200, () => {
             $ele.animate({left: '+=50'}, 200, () => {
               $ele.animate({left: '+=50'}, 200);
            }
          })

        /*******************************************/
          
          // queue
          // 添加队列
          $ele.queue('chain', () => {
            console.log('step1');
          }).queue('chain', () => {
            console.log('step2');
          })
          console.log($ele.queue('chain')); // 显示动画队列信息
          $ele.dequeue('chain'); // 从step1 ~ 2依次执行
      
        /*******************************************/

          // 自动进行队列动画的执行，不用手动进行操作
          $ele.queue('chain', (next) => {
          //  console.log('step1');
            next();
          }).queue('chain', (next) => {
            // next();  // 最后一个队列不需要next();
            console.log('step2');
          })
        /*******************************************/
        clearQueue('chain'); // 清空队列
        $ele.delay(1000); // 延迟1s

        /**
          * 由于队列是异步的，所以可能其他设定样式的语句会先执行
          * 如果想控制下执行顺序
          * 1. 可以在动画执行的回调函数写语句
          * 2. 可以将语句添加到队列当中，然后在合适的地方触发
          * $ele.queue('fx', () => {
              $ele.css({
                backgroundColor: '#999'
              }).dequeue('fx')
            });
          **/
         ```
  # 实用工具方法
  - jQuery.noConfict();
    ```
      jQuery.noConfict();
      $.hello(); // 自定义方法库，占用$符号
      jQuery(function(){ // jquery交出$使用权，需要使用jQuery

      })
      
        
    ```
    // 如果$和jQuery都被占用了
    ```
      var $j = jQuery.noConfict(true); // 将jquery的控制权交给了$j
    ```
  - 浏览器及特性检测
    1. $.support （一个对象，浏览器支持的属性）
    * 如果想做好浏览器兼容性，不建议使用$.support
      最好使用[Modernzr](http://modernizr.cn/)
  - 处理js对象和集合
    1. `$.trim('str'); // 去除两边的空格，产生新的字符串`
    2. 循环
      原生 `for（）/ for in obj / arr.forEach((currentValue, index, array)=>{}) `
      jquery: 
              ``` 
                $.each(arr, (index, currentValue)=>{
                  return true; // 相当于continue
                  return false; // 相当于break
                })
              ```
  - 过滤数组
    $.grep(array, callback [,invert(处理结果为false的留下，为true的干掉)]) // 第一个参数是当前值，第二个是索引
    ```
      var arr = [2, 3, 5, 13];
      var arr2 = $.grep(arr, (currentValue, index) => {
        return currentValue > 10; // 结果大于10 则留下
      });
    ```
  - 转换数组
    $.map(collection, callback)
    ```
      var arr = [2, 3, 5, 13];
      var arr2 = $.map(arr, (currentValue, index) => {
        return currentValue + 1; // 将数组元素重组之后返回
        return null / undefined // 如果是这两种值，则不会映射任何值
      });
    ```
  - 更多数组操作方法
    1. $.inArray(value, array);
    2. $.makeArray(object) // 将类数组对象转化为数组
    3. $.merge(array1, array2) // 合并2个数组
  - 拓展对象
    1. $.extend([deep,], target, [source1, source2,...N])
      * 后面的会覆盖前面的  
      `$.extend(true, target, source1, source2)`
  - 测试对象
    $.isArray(param)/$.isEmptyObject(param)/$.isFunction(param)
    $.isNumeric(param)/$.isPlainObject(param)/$.isWindow(param)
    
  - $.noop() // 定义一个什么也不干的空方法
  - $.contains(container, contained) // 判断一个dom节点是否在另一个dom节点里面
  - $ele.has($ele); // 如果有包含关系，那么会返回包含的元素
  - $.error(string) // 更详细的错误信息显示
  
  - $.type(val)
          
# AJAX
  - CORS 跨域解决方案
    1. 跨域(不同域名、不同端口、不同协议)
    2. 解决方法：
      XMLHttpRequest Level2 中加入
      需要服务器配合设置响应头
        header（'Access-Control-Allow-Origin: *'）;
      可选择是否带上cookie
  - 简单请求与复杂请求
    1. 复杂请求会先发送一次OPTIONS方法的预检请求
    2. 简单请求需要同时满足条件：
      - 请求Method必须为HEAD/GET/POST之一
      - 请求头中的字段不超过Accept/Accept-Language
        /Content-Language/Last-Event-ID/Content-Type
    3. Content-Type只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain 
  - 创建ajax
    ```
      btn.addEventListener('click', ajax);
      function ajax(){
        var xhr = window.XMLHttpRequest ? (new XMLHttpRequest()) : (new ActiveXObject('Microsoft.XMLHTTP'));

        xhr.open('GET', './data.json', false); // 第三个参数代表是否是异步的（默认true 异步）
        var formData = new FormData();
        formData.append('name', '"123"');
        xhr.onreadystatechange = function(){
          console.log(xhr.readState);
          if(xhr.readySate === 4 && xhr.status === 200){
            store.innerHTML = xhr.response;
          }else{
            console.error('error');
          }
        }
        xhr.setRequestHeader('user', 'imooc');
        xhr.setRequestHeader('user', 'js'); // user= ‘immoc，js’；
        xhr.responseType = 'json';
        xhr.send(formData);
        console.log(xhr.readyState);
        xhr.abort(); // 放弃提交
        console.log(xhr.readState);

        function loadData(){
          if(xhr.readySate === 4 && xhr.status === 200){
            console.log(typeof xhr.response);
            try {
              store.innerHTML = JSON.stringify(xhr.response, null, 2);
            } catch(e) {
              store.innerHTML = 'parse error';
            }
          }
        }

      }
      /*
       * post提交，需要设置header，不然会报错
       * xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
       * abort 
       * 重复发送同样的请求，会清除掉上一次请求，减缓服务器压力
       * 
       * /

    ```
    - setRequestHeader方法
      1. 设置请求头，同字段多次设置时，值会合并到一个字段中(中间用,号隔开)
      2. 必须在open与send方法执行顺序中间调用
      3. 默认的Accept字段值为"*/*"
    - getResponseHeader方法
      1. 获取响应头内容，参数接受响应头字段名，返回字段值
      2. 字段名忽略大小写
      3. 多个字段名存在时，多个值以逗号+空格连成一个
    - timeout属性
      1. 设置超时时间，毫秒为单位
      2. 超时后会触发timeout事件
      3. IE中，超时必须在open方法后，send方法前设置
      ```
        xhr.ontimeout = () = > {
          console.log('timeout');
        }
        xhr.timeout = 2000;
        
      ```
    - status属性
      1. 初始status为0， 接受响应后标准的HTTP状态码
      2. 如果响应头中没有设置状态码，则默认为200
      3. XHR出错时，status也为0
    - upload属性
      1. 返回一个XMLHTTPRequestUpload对象
      2. 可通过绑定事件侦听上传过程
    - responseType属性
      1. 设置响应内容的格式类型，默认字符串
      2. 可设置多种格式： json、blob、arraybuffer等
      3. 设置后会影响response的值
    - response属性
      1. 响应的正文内容
      2. 默认为字符串， 但会被responseType影响

  * Tips *
    - jquery1.10.1以前的jquery版本，在show的时候，无论元素之前的display 
      设置的样式为什么，都会设为block。新版本不会这么做。保留元素之前的inline-block
    - 服务器
      phpstudy/wamp/lamp/ npm i anywhere
