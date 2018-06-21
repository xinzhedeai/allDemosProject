var express = require('express'); // 移入express模块
var config = require('./config/index');
// 配置端口号
var port = process.env.port || config.build.port;
// 创建一个server服务器
var app = express();
// 声明路由对象
var router = express.Router();

router.get('/', function (req, res, next) {
  req.url = '/index.html';
  next();
});

app.use(router);

var appData = require('./data.json');
var seller = appData.seller;
var goods = appData.goods;
var ratings = appData.ratings;

var apiRoutes = express.Router();
apiRoutes.get('/seller', (req, res) => {
  res.json({
    errno: 0,
    data: seller
  });
});

apiRoutes.get('/goods', (req, res) => {
  res.json({
    errno: 0,
    data: goods
  });
});

apiRoutes.get('/ratings', (req, res) => {
  res.json({
    errno: 0,
    data: ratings
  });
});

app.use('/api', apiRoutes);

/**
 * 执行npm build生成dist目录
 * 将dist下打包好的文件
 * 部署到express的服务器上
 * 
 **/
app.use(express.static('./dist'));

module.exports = app.listen(port, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:' + port + '\n');
}); 
