import gulp from 'gulp';
import gulpif from 'gulp-if';
import webpack from 'webpack';
import gulpWebpack from 'webpack-stream';
import named from 'winyl-named'; // 文件重命名的包
import livereload from 'gulp-livereload';
import plumber from 'gulp-plumber'; // 处理文件信息流的包
import rename from 'gulp-rename'; // 文件重命名包
import uglify from 'gulp-uglify'; // 压缩文件包
import {log, colors} from 'gulp-util'; 
import args from './util/args'; 

gulp.task('scripts', () => {
  return gulp.src(['app/js/index.js'])
        .pipe(plumber({
          errorHandler: function(){

          }
        }))
        .pipe(named())
        .pipe(gulpWebpack({
          module:{
            loaders: [{
              test: /\.js$/,
              loader: 'babel'
            }]
          }
        }), null, (err, stats) => {
          log(`Finished '${colors.cyan('scripts')}'`, stats, toString({
            chunks: false
          }))
        })
        .pipe(gulp.dest('server/public/js'))
        .pipe(rename({
          basename: 'cp',
          extname: '.min.js'
        }))
        .pipe(uglify({
          compress: {
            properties: false
          },
          output: {
            'quote_keys': true
          }
        }))
        .pipe(gulp.dest('server/public/js'))
        .pipe(gulpif(args.watch, livereload())) // 如果命令行中有watch/livereload那么就执行
        
})