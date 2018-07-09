import gulp from 'gulp';
import gulpif from 'gulp-if';
import liveserver from 'gulp-live-server'; // 启动一个脚本作为服务器
import args from './util/args';

gulp.task('serve', (cb) => {
  if(!args.watch) return cb();
  // --harmony: 要在当前路径下执行后面的脚本
  var server = liveserver.new(['--harmony', 'server/bin/www']);
  server.start();

  // js或ejs有改动，浏览器热更新
  gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs'], function(file){
    server.notify.apply(server, [file]);
  });
  // 借口更新 重启服务器
  gulp.watch(['server/routes/**/*.js', 'server/app.js'], function(){
    server.start.bind(server)();
  })