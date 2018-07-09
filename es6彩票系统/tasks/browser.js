import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util'; // 启动一个脚本作为服务器
import args from './util/args';

gulp.task('browser', (cb) => {
  if(!args.watch) return cb();
  gulp.watch('app/**/*.js', ['scripts']); // js内容发生改变，同步到scripts里面
  gulp.watch('app/**/*.ejs', ['pages']);
  gulp.watch('app/**/*.ejs', ['css']); 
  
})