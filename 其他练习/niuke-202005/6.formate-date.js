/**
 * 日期格式化方法
 * @param {string} date     [可选] 要格式化的时间
 * @param {string} fmt      [可选] 时间格式
 *
 * 月(M)、日(D)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(Q) ==> 可以用 1-2 个占位符
 * 年(Y) ==> 1-4 个占位符
 * 毫秒(S) ==> 1 个占位符(是 1-3 位的数字)
 */
function formatDate (date, fmt = 'YYYY-MM-DD HH:mm:ss') {
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'm+': date.getMonth() + 1, // 月份
    'D+': date.getDate(), // 日
    'd+': date.getDate(), // 日
    'h+': date.getHours() % 12 || 12, // 12小时
    'H+': date.getHours(), // 24小时
    'm+': date.getMinutes(), // 分钟
    's+': date.getSeconds(), // 秒
    'Q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  }
  const week = {
    0: '日',
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六'
  }
  if (/([Y|y]+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    console.log(`fmt.$1`,fmt)
  }
  if (/(w)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, week[date.getDay()])
  }
  Object.keys(o).forEach(k => {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length))
    }
  })
  return fmt
}

let res = formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w')
console.log('res', res)