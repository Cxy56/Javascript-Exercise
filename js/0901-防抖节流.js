// 防抖， 一定时间内只触发事件，只执行最后一次
function debounce(fn, timer) {
  let timeout = null
  return function() {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
    }, timer)
  }
}

// 节流， 一定时间内只触发一次
function throttle(fn, timer) {
  let canRun = true
  return function() {
    if(!canRun) return
    canRun = false
    setTimeout(() => {
      fn.apply(this, arguments)
      canRun = true
    }, timer)
  }
}