#问题
  - 何时使用 === 或 ==
    1. 
      ```
        if(obj.a == null){
          // 这里相当于obj.a === null || obj.a === undefined简写形式。。
        }
      ```

  - 存储类型（值/引用类型）
  - json一种数据结构，只不过是js对象而已。
## 原型和原型链
  1. 构造函数
    ```
      function Foo(name, age){
        this.name = name;
        this.age = age;
        this.class = 'class-1';
        // return this // 默认有这一行
      }
      var f = new Foo('zhangsna', 20);
      function Foo(){}其实是var Foo = new Function(){}
  2. 使用instanceof判断一个函数是否是为一个变量的构造函数
      变量 instanceof Array
  3. 原型规则和示例
    - 所有的引用类型（数组、对象、函数），都具有对象特性，即可自由扩展属性（除了‘null’以外）
      都有一个__proto__属性， 属性值是一个普通对象。
    - 所有的函数，都有一个prototype属性，属性值也是一个普通对象。
    - obj.__proto__ === Object.prototype
      所有引用类型， __proto__属性值指向它的构造函数的“prototype”属性值
    - 当找一个对象的某个属性时，如果这个对象本身没有这个属性，则去它的__proto__（即它的构造函数的prototype）中找。
  4. 循环对象自身的属性
    ```
      var item
      for(item in f){
        // 高级浏览器已经在for in中屏蔽了来自原型的属性
        // 但是这里建议大家还是加上这个判断，保证程序的健壮性
        if(f.hasOwnProperty(item)){
          console.info（item）；
        }
      }
    ```
  5. 准确判断一个变量是数组类型
    ```
      var arr = [];
      arr instanceof Array // true
      typeof arr // object, typeof 是无法判断的
    ```
  6. 原型链继承例子
    ```
    // 动物
    function Animal(){
      this.eat = function(){
        console.info('animal eat');
      }
    }
    // 狗
    function Dog(){
      this.bark = function(){
        console.info('dog dark');
      }
    }
    Dog.prototype = new Animal()
    // 哈士奇
    var hashiqi = new Dog()
    ```
  7. new一个对象的过程
    - 创建一个新对象
    - this指向这个新对象
    - 执行代码，即对this赋值
    - 返回this
    ```
      function Foo(name, age){
          this.name = name;
          this.age = age;
          this.class = 'class-1';
          // return this // 默认有这一行
        }
        var f = new Foo('zhangsna', 20);
    ```
  8. 阅读源码是高效提高技能的方式
     但不能“埋头苦钻“有技巧的。
     可以先去博客上也偶没有类似的源码讲解。
     [zepto设计和源码分析](http://www.imooc.com/qa/745/t/0)
  9. 封装一个简单的dom查询
    ```
      function Elem(id){
        this.elem = document.getElementById(id);
      }
      Elem.prototype.html = function(val){
        if(val){
          elem.innerHTML = val;
          return this; // 链式操作
        }else{
          return elem.innerHTML;
        }
      }
      Elem.prototype.on = function(type, fn){
        var elem = this.elem;
        elem.addEventListener(type, fn);
      }
      var div1 = new Elem('div1');
      console.info(div1.html());
      div1.html('<p>hello</p>');
      div1.on('click', function(){
        alert('clicked');
      });
      
    ``
  10. 执行上下文
    范围： 一段`<script>`或者一个函数
    全局： 变量定义、函数声明
    函数： 变量定义、函数声明、this、arguments
  
  11. this
    this要在执行时才能确认值，定义时无法确认
    bind: 
      ```
        var fn2 = function(){
        }.bind({y:200}); // 正确
        function fn2(){}.bind({y:200}); // 错误
      ```

  12. 异步、同步
    - 同步
      alert（）
    - 异步
      1. 定时任务：settimeout/setInterval()
      2. 网络请求： ajax请求、动态<img>加载
        ```
          var img = document.createElement('img');
          img.onload = function(){
            console.info('loaded');
          }
          img.src = '/xxx.png'
        ```
  13. 异步和单线程
    单线程同时只能干一件事。
    会吧所有待执行的时间串起来。settimeout函数会被但放到一边，等其他执行完再执行。
  * 先定义，后执行 *  
  14. 日期
    Date.now() // 获取当前时间毫秒数

  15. 数组api
    - forEach 遍历所有元素
    - every 判断所有元素是否都符合条件
      ```
        var arr = [1, 2, 3]; 
        var result = arr.every(function(item, index){
          // 用来判断所有的数组元素，都满足一个条件
          if(item < 4){
            return true;
          }
        });
        console.log(result);
      ```
    - some 判断是否有至少一个元素符合条件
    - sort 排序
      ```
        var arr = [1, 4, 2, 3, 5];
        var arr2 = arr.sort(function(a, b){
          // 从小到大排序
          return a - b;
          // 从大到小排序
          // return b - a;
        });
      ```
    - map 对元素重新组装，生成新数组
          ```
        var arr = [1, 4, 2, 3, 5];
        var arr2 = arr.map(function(a, b){
          // 将元素重新组装， 并返回
          return '<b>'+ item +'</b>';
        });
        console.info(arr2);
      ```
    - filter 过滤符合条件的元素
# 回顾js基础知识
  1. 内置函数： 
    Object Array Boolean String
  2. 内置对象： Math JSON

# js-web-api
# DOM节点操作
  - 获取DOM节点
  - prototype
    ```
      var div1 = document.getElementById('div1');
      // property
      div1.className = 'abc'; // 直接通过js属性设置类名值
    ```
    直接通过.的形式对dom元素的合法属性的值的进行获取和设置
    property知识一个js对象的属性的修改（但是能呈现到html标签上）
  - atrribute
    ```
      var p1 = document.getElementById('P1');
      console.log(p1.getAttribute('data-name'));
      p1.setAttribute('data');
    ```
    可以对非法属性值的获取和设置
    是对html标签属性的修改
  - 新增节点
    ```
      var div1 = document.getElementById('div1');
      // 添加新节点
      var p1 = document.createElement('p');
      p1.innerHTML = 'this is p1';
      div1.appendChild(p1); // 添加新创建的元素
      // 移动已有节点
      var p2 = document.getElementById('p2');
      // 由于元素节点时唯一的，所以是吧一个节点移动到另一个地方
      // 而不是复制粘贴到另一个地方
      div.appendChild(p2); 
    ```
  - 获取父元素和子元素
    ```
      var div1 = document.getElementById('div1');
      var parent = div1.parentElement;
      var child = div1.childNodes;
      div1.removeChild(child[0]); // 删除子节点
    ```
  - location & history
    ```
      url: http://www.shangdihuayu.top/tiantianbeishengjing/html/index.html#zhao?name=dabao

      location.host // 域名 "www.shangdihuayu.top"
      location.pathnamme // "/tiantianbeishengjing/html/index.html" 
      location.search // ?name=dabao
      location.hash // #zhao?name=dabao
      location.protocol // "http:"
      location.port // 端口号
      
    ```
  - navigator & screen
    ```
      // navigator
      var ua = navigator.userAgent;
      var isChrome = ua.indexOf('Chrome');
      //screen
      console.info(screen.width);
      console.info(screen.height);
    ```
# 事件
  - 通用事件绑定
    ```
      var btn = document.getElementById('btn1');
      btn.addEventListener('click', function(event){
        console.log('clicked');
      });
      function bindEvent(elem, type, fn){
        elem.addEventListener(type, fn);
      }
      var a = document.getElementById('link1');
      bindEvent(a, 'click', function(e){
        e.preventDefault(); // 阻止超链接跳转，否则不走下面的alert
        alert('clicked');
      });
    ```
  - 事件冒泡
    ``` 
      // 事件冒泡，子元素有个点击事件，父元素也有个，那么点击子元素事件父元素也会触发同类型的绑定事件
      var p1 = document.getElementById('p1');
      var body = document.body;
      bindEvent(p1, 'click', function(){
        e.stopPropagation();
        alert('激活');
      });
      bindEvent(body, 'click', function(){
        alert('取消');
      });
    ```
  - 代理
    好处： 
      1. 代码简洁
      2. 减少浏览器内存占用
    ```
      <div id="div1">
        <a></a>
        <a></a>
        <a></a>
      </div>
      var div1 = document.getElementById('div1');
      div1.addEventListener('click', function(event){
        var target = e.target;
        if(target.nodeName === 'A'){
          alert(target.innerHTML);
        }
      });
    ```
  - 完善通用绑定事件的函数
    ```
      // 使用代理
      var div1 = document.getElementById('div1');
      bindEvent(div1, 'click', 'a', function(e){
        console.log(this.innerHTML);
      });
      // 不使用代理
      var a = document.getElementById('a1');
      bindEvent(div1, 'click', function(e){
        console.log(a.innerHTML);
      });
      function bindEvent(elem, type, selector, fn){
        if(fn == null){ // 当不使用代理的时候
          fn = selector;
          selector = null;
        }
        elem.addEventListener(type, function(e){
          var target;
          if(selector){
            target = e.target;
            if(target.matches(selector)){ // 使用代理
              fn.call(target, e);
            }
          }else{
            fn(e);
          }
        });
      }
    ```
# ajax    
   - XMLHttpRequest
     ```
      var xhr = new XMLHttpRequest();
      xhr.open('GET', '/api', false);
      xhr.onreadystatechange = function(){
        // 这里的函数异步执行
        /**
         * 0 - （未初始化） 还没调用send方法
         * 1 - （载入） 已调用send（）方法，正在发送请求
         * 2 - （载入完成）send方法执行完成， 已经接收到全部响应
         * 3 - (交互) 正在解析响应内容
         * 4 - （完成） 响应内容解析完成，可以在客户端调用了
         * ** 前四个不用管，只处理状态码4的。
         /
        if(xhr.readyState == 4){
          /**
          * 2xx - 表示成功处理请求 如：200
          * 3xx - 需要重定向，浏览器直接跳转
          * 4xx - 客户端请求错误， 如404
          * 5xx - 服务端错误
          */
          if(xhr.status == 200){
            alert(xhr.responseText);
          }
        }
      }
      xhr.send(null);
     ```
  ## 跨域
  - 什么是跨域
    1. 浏览器有同源策略，不允许ajax访问其他域接口
    2. 跨域条件：协议、域名、端口， 有一个不同就算跨域
  - JSONP
  - 服务器端设置http header
    ```
      // 第二个参数填写跨域的域名称，不建议直接写“*”
      response.setHeader("Access-Control-Allow-Origin", "http://a.com, http://b.com");
      response.setHeader("Access-Control-Allow-Headers", "X-Request-With");
      response.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
      // 接收跨域的cookie
      response.setHeader("Access-Control-Allow-Credentials", "true");
    ```
  ### 可以跨域的三个标签
  - `<img src="">`
    用于打点统计， 统计网站可能是其他域（百度统计、站长统计）
  - `<link href=""><script>`可以使用CDN
  - `<script src="">` 可以用于JSONP
      * json实现原理 *
      ```
        <script>
          window.callback = function(data){
            // 这是我们跨域得到的信息
            console.log(data);
          }
        </script>
        <script src="http://coding.m.imooc.com/api.js"></script>
        <!--以上将返回callback({x:100, y:200})-->
      ```
# cookie/localStorage/sessionStorage
  - cookie缺点
    1. 存储量太小 只有4kb
    2. 所有http请求都带着，会影响获取资源的效率
    3. api 简单，需要封装才能用 document.cookie = ...
  - localStorage和sessionStorage
    1. html5专门为存储而设计，最大容量5M
    2. api 简单易用
    3. localStorage.setItem(key,value);
       localStorage.getItem(key);
    4. 注意： 
      ios safari隐藏模式下，localStorage.getItem会报错
      建议统一使用try-catch封装
# 开发环境
  - IDE
  - GIT
    1. 命令
      git add
          checkout xxx // 版本恢复
          commit -m 'xxx'
          push origin master
          pull origin master 
          branch
          checkout -b xxx / checktout xxx
          merge xxx
    [coding](https://coding.net/)
  - js模块化
    ```
      // util.js
      export {
        getFormatDate: function(date, type){
          //  to do....
        }
      }
      // a-util.js
      var getFormatDate = require('util.js');
      export {
        aGetFormatDate: function(){
          return getFormatDate(date, 2);
        }
      }
      // a.js
      var aGetFormatDate = require('a-util.js');
      var dt = new Date();
      console.log(aGetFormatDate(dt));
    ```
    1. AMD 异步模块加载
      [require.js](http://www.requirejs.cn/)
      - 全局define函数(define需要引用的方法)
      - 全局require函数（调用define管理的方法）
      - 依赖js会自动、异步加载
      ```
        // 使用require重写上面的案例代码
        // util.js
        define(function(){
          return {
             getFormatDate: function(date, type){
              //  to do....
            }
          }
        });
        // a-util.js
        define(['./util.js'], function(util){
          return {
            aGetFormatDate: function(){
              return getFormatDate(date, 2);
            }
          }
        });
        // a.js
        define(['./a-util.js'], function(){
          return {
            printDate: function(date){
              console.log(aUtil.aGetFormatDate(date));
            }
          }
        });
        // html文件中script引用
        <script data-main="./main.js" src="https://require.js"></script>
        // main.js （入门文件）
        require(['./a.js'], function(a){ // 前面引用几个js，后面的参数上就得写上几个形参
          var date = new Date();
          a.printDate(date);
        })
        *js的引用，如果不依赖，那么就不会加载*
      ```
    2. CommonJS
      - nodejs模块化规范
      - 前端开发依赖的插件和库，都可以从npm中获取
      - CommonJS不会异步加载JS，而是同步一次性加载出来
      *注意*
        - 需要构建工具支持
        ```
          // 使用CommonJS
          // util.js
          module.exports = {
            getFormatDate: function(date, type){
              // todo...
            }
          }
          // a-util.js
          var util = require('util.js');
          module.exports = {
            aGetFormatDate: function(date){
              return util.getFormatDate(date, 2);
            }
          }
        ```

      *AMD和CommonJS的使用场景*
        - 需要异步加载JS，使用AMD
        - 使用了npm之后建议使用CommonJS

  - 打包工具
    1. grunt
    2. 
  - 上线回滚流程

* tips *
  [手机前端开发调试利器 – vConsole](https://blog.csdn.net/aaa333qwe/article/details/78261442)
  1. 完美解码快捷键：alt + k 旋转视屏方向 

      