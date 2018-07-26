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
  4. 标签 label label-default/primary/success/info/warning/danger
      role="tablist" // 屏幕阅读器
  5. 徽章 span.badge
  6. 缩略图 .thumbnail
  7. 警告框 .alert .alert-success/info....
  8. 进度条 .process->.process-bar



* tips *
  1. npm install normalize.css 安装重置样式文件 
  2. demo样式没出来，竟然是因为样式字母大小写的问题~~~低级错误，切记不要再犯~~~！！
  3. html标签里面如果有两个class属性，那么只有第一个class的属性生效