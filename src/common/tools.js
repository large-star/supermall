
    /*
     * 封装一个防抖动方法
     * debounce: 防抖函数,  它的两个参数=>  func:函数(要进行防抖的函数)    delay: 毫秒(传入一个时间限制,毫秒)
     * let timer = null;  声明一个timer为null
     * if(timer) clearTimeout(timer) ===============> 如果timer不为空,那么清空它(干掉他)
     * 
     * delay :传入的毫秒,在这也就是延迟时间
     */

export function debounce(func, delay) {
  let timer = null;
  return function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// 日期格式化
/* 
  用法 :  let date = new Date()
          dateFormat("YYYY-mm-dd HH:MM", date)
          >>> 2019-06-06 19:45`
*/
export function dateFormat(fmt, date) {
  let ret;
  const opt = {
      "Y+": date.getFullYear().toString(),        // 年
      "m+": (date.getMonth() + 1).toString(),     // 月
      "d+": date.getDate().toString(),            // 日
      "H+": date.getHours().toString(),           // 时
      "M+": date.getMinutes().toString(),         // 分
      "S+": date.getSeconds().toString()          // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
          fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
      };
  };
  return fmt;
}