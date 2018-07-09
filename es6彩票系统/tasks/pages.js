import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('pages', () => { // 创基金一个任务
  return gulp.src('app/**/*.ejs') // gulp任务需要打开一个文件
             .pipe(gulp.dest('server'))
             .pipe(gulpif(args.watch, livereload()))
})

