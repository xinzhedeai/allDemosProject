var fs = require('fs'); // node自带fs包，应该是文件流操作方法库
fs.readFile('readme.txt', 'utf-8', function(err, data){
    if(err){
        console.error(err);
    }else{
        console.log(data);
    }
});
 