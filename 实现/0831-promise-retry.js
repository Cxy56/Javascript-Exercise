// 无延迟的retry
function promiseRetry(gen, count) {
  return gen().catch(function(e) {
    if(count > 0) {
      console.log(`还有 ${count} 次尝试`)
      // 此处只能为同步函数，否则promiseRetry.then函数的顺序优先于settimeout
      return promiseRetry(gen, --count)
    } else {
      throw e
    }
  })
}
// 有延迟的retry,内部改变状态后才会执行promiseRetry2.then()
function promiseRetry2(gen, count, timer) {
  return new Promise(function(resolve, reject){
    function attemp() {
      gen().then(resolve).catch(function(e){
        if(count > 0) {
          console.log(`还有 ${count} 次尝试`)
          count--
          setTimeout(attemp, timer)
        } else {
          reject(e)
        }
      })
    }
    attemp()
  })
}


// 测试用例
function getData(){
  let p = new Promise(function(resolve, reject){
    setTimeout(function(){
      var num = Math.ceil(Math.random()*20); //生成1-10的随机数
      console.log('随机数生成的值：',num)
      if(num<=10){
        console.log('符合条件，值为'+num)
        resolve(num);
      }
      else{
        reject('数字大于10了执行失败');
      }
    }, 2000);
     })
     return p
  }

promiseRetry(getData, 4).then(() => {
  console.log('hello')
}).catch(error => {
  console.log('error', error)
})

promiseRetry2(getData, 3, 100).then(() => {
  console.log('world')
}).catch(error => {
  console.log('error---', error)
})