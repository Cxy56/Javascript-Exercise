let setTimeoutFunc = (func, time, ...params)  => {
  let start = new Date().getTime()
  let flag = true
  while(flag) {
    let end = new Date().getTime()
    if(end - start > time) {
      flag = false
    }
  }
  func.apply(null, params)
}