export function formatDate(date, fmt) {
  console.info('函数执行');
  if (/(y+)/.test(fmt)) { // 进行正则匹配后，匹配后的数据直接就被内置对象RegExp捕获了。。
    /*
      1、RegExp.$1可以直接拿到 上面test语句所匹配的第一组值
      2、面时间截取，年格式是4为的，那么根据传过来的格式化字符的长度
      进行日期的截取 如果年为yy，那么截取之后的字符串为16
    */
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length)); // $1 匹配了四个值，相当于yyyy
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    console.info(o);
    console.log(k);
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};
// str: 1 --001 => 01; 0022 => 22;
function padLeftZero(str) {
  return ('00' + str).substr(str.length); // 关于单数时间分-格式的换算小技巧
}
