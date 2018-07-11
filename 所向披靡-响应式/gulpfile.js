var gulp = require('gulp'); // 引入依赖项
// var rev = require('gulp-rev'); // 给每个文件名设置一个hash码，减少了缓存，省去了手动为js等文件添加版本号的麻烦。
// var revReplace = require('gulp-rev-replace'); // 更新index引用：可能引用内容更新最新版了。页面中的引用也相应改为最新的。内容&文件名自
// var useref = require('gulp-useref'); // 通过在html中写注释，来进行设置，
// /**
//  *  // 将注释包裹的所有css压缩到combined.css中
//  * <!-- build:css css/combined.css -->
//       * <link href="css/one.css" rel="stylesheet">
//       * <link href="css/one.css" rel="stylesheet">
//  * <!-- endbuild -->
//  */
// var filter = require('gulp-filter'); //  从所有的文件中筛选指定的文件，例如js文件，然后在restore恢复
// var uglify = require('gulp-uglify'); // 压缩js文件
// var csso = require('gulp-csso'); // 压缩css文件
// // 建立一个任务 default（default有些特别，可以使用gulp不用参数，默认执行的任务）
// gulp.task('default', () => {
//   // var jsFilter = filter('**/*.js', {restore: true});
//   var cssFilter = filter('**/*.css', { restore: true });
//   var indexHtmlFilter = filter(['**/*', '!**/index.html'], { restore: true });
//   return gulp.src('src/index.html')
//             .pipe(useref()) // 分析index页面带有gulp注释的地方,找到注释后，会将注释包裹的文件礽到流里面
//             // .pipe(jsFilter()) // pipe里面的流进行过滤，筛选出js文件
//             // .pipe(uglify()) // 压缩筛选出来的js文件
//             // .pipe(jsFilter.restore) // 再将js文件仍会到流里面
//             .pipe(cssFilter)
//             .pipe(csso())
//             .pipe(cssFilter.restore)
//             .pipe(indexHtmlFilter) // 过滤除了index.html以外的文件
//             .pipe(rev()) // 开始为筛选出来的文件生成HASH版本号文件名
//             .pipe(indexHtmlFilter.restore) // 将流血写回数据流中
//             .pipe(revReplace()) // 把index.html文件中一些引用进行更新
//             .pipe(gulp.dest('dist')) // 文件流执行任务结束后，将水放到一个指定的路径下

// });
gulp.task('hello', ()=>{
  console.log('hello gulp!~~~');
});
