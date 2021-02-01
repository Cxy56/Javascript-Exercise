/*
 * @Description: 
 * @Author: xychen21
 * @Date: 2020-06-29 22:48:22
 * @LastEditTime: 2020-06-29 22:50:29
 * @LastEditors:  
 */
// 求两个日期中间的有效日期 
// 如 2015-2-8 到 2015-3-3，返回【2015-2-8 2015-2-9...】
//!! 方法一
function rangeDay (day1, day2) {
  const result = []
   const dayTimes = 24*60*60*1000
   const startTime = day1.getTime()
   const range = day2.getTime() - startTime
   let total = 0
   
   while (total <= range && range > 0) {
       result.push(new Date(startTime + total).toLocaleDateString().replace(/\//g, '-'))
       total += dayTimes
   }
  return result
};
rangeDay(new Date("2015-02-08"), new Date("2015-03-03"))

//!! 方法二
//2015-2-8 2015-3-3
function rangeDate(startDate, endDate) {
  let start_ = new Date(startDate).getTime();
  let end_ = new Date(endDate).getTime();
  let day = 24 * 60 * 60 * 1000;
  let arr = [];
  for (let i = start_; i <= end_; i += day) {
      arr.push(i);
  }
  return arr.map(item => {
      let date = new Date(item);
      let year = date.getFullYear();
      let month = (date.getMonth() + 1);
      let day = date.getDate();
      return `${year}-${month}-${day}`;
  });
}

console.log(rangeDate("2015-2-8", "2015-3-3"));