/**
 * 解析url参数
 * @example ？id=132456&a=b
 * @return Object {id: 12345, a:b}
*/
export function urlParse() {
  let url = window.location.search;
  let obj = {};
  /**
  * 1、包含?&字符，  [?&]
  * 2、后面跟着不是？&的字符（一个或多个）[^?&]+
  * 3、= 连接符
  * 4、后面跟着不是？&的字符（一个或多个）[^?&]+
  * 匹配的字符
  */
  let reg = /[?&][^?&]+=[^?&]+/g;
  // 匹配到的数组['?id=123456‘,’&a=b']
  let arr = url.match(reg);
  if (arr) {
    arr.forEach((item) => {
      let tempArr = item.substring(1).split('=');
      let key = decodeURIComponent(tempArr[0]);
      let val = decodeURIComponent(tempArr[1]);
      obj[key] = val;
    });
  }
  return obj;
}

