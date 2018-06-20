/**
 * @param {*} id 商家id
 * @param {*} key
 * @param {*} value
 */
export function saveToLocal(id, key, value) {
  let seller = window.localStorage.__seller__; // 私有，专用于存储seller
  if (!seller) {
    seller = {};
    seller[id] = {};
  } else {
    seller = JSON.parse(seller);
    if (!seller[id]) {
      seller[id] = {};
    }
  }
  seller[id][key] = value;
  window.localStorage.__seller__ = JSON.stringify(seller);
};
/**
 * @param {*} id
 * @param {*} key
 * @param {*} def 默认值
 */
export function loadFromLocal(id, key, def) {
  let seller = window.localStorage.__seller__; // 私有，专用于存储seller
  if (!seller) {
    return def;
  }
  seller = JSON.parse(seller)[id];
  if (!seller) {
    return def;
  }
  let ret = seller[key];
  return ret || def;
}
