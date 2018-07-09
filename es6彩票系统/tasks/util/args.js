import yargs from 'yargs';

const args = yargs

  .options('production', { // 判断是否在生产环境
    boolean: false,
    default: false,
    describe: 'min all scripts'
  })

.options('watch', {
  boolean: true,
  default: false,
  describe: 'watch all files'
})

  .options('verbose', { // 日志选项
    boolean: true,
    default: false,
    describe: 'log'
  })

  .option('sourcemaps', { // 映射源代码和编译之后的代码
    describe: 'force the creation of sourcemaps'
  })

  .option('port', { // 服务器
    string: true,
    default: 8080,
    describe: 'server port'
  })

  .argv // 以文件的命令行以字符串进行解析
  