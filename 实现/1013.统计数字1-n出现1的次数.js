//!!方法一： 转换为string， 匹配1的个数
let get1Total = function (max) {
	let count = 0;	
	for(let i = 1;i <= max;i++) {
		let arr = i.toString().match(/[1]/g)
		arr && (count += arr.length)
  }
  console.log(count)
	return count;
}
get1Total(40)

//!!方法二： 把每一位拆出来，与1比较，相等就total+1
let get1Total2 = function (max) {
  let total = 0
  for(let i = 1; i <= max; i++) {
    let cur = i 
    while(cur > 0) {
      if(cur % 10 === 1) {
        total++
      }
      cur = parseInt(cur/10)
    }
  }
  console.log(total)
}
get1Total2(40)