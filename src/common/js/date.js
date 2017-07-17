export function formatDate(date, fmt) {
  var tempMatch = fmt.match(/y+/);
  if (tempMatch) {
    fmt = fmt.replace(tempMatch[0], (date.getFullYear() + '').substr(4 - tempMatch[0].length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    tempMatch = fmt.match(new RegExp(k));
    if (tempMatch) {
      let str = o[k] + '';
      fmt = fmt.replace(tempMatch[0], (tempMatch[0].length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}
