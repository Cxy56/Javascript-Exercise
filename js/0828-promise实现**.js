function Promise(executor) {
  let self = this
  self.status = 'pending'
  self.onResolvedCallback = []
  self.onRejectedCallback = []
  function resolve(value) {
    setTimeout(() => {
      if(self.status === 'pending') {
        self.status = 'resolved'
        self.data = value
        for(let i = 0; i < self.onResolvedCallback.length; i++) {
          self.onResolvedCallback[i](value)
        }
      }
    }, 0)
  }

  function reject(value) {
    // 模拟异步
    setTimeout(() => {
      if(self.status === 'pending') {
        self.status = 'rejected'
        self.data = value
        for(let i = 0; i < self.onRejectedCallback.length; i++) {
          self.onRejectedCallback[i](value)
        }
      }
    }, 0)
  }

  try {
    executor(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

Promise.prototype.then = function(onResolved, onRejected) {
  var self = this
  onResolved = typeof onResolved === 'function' ? onResolved : (value) => value
  onRejected = typeof onRejected === 'function' ? onRejected : (reason) => reason
  if(self.status === 'pending') {
    return new Promise(function(resolve, reject){
      self.onResolvedCallback.push(function(value){
        try {
          var x = onResolved(self.data)
          if(x instanceof Promise) {
            x.then(resolve, reject)
          } else {
            resolve(x)
          }
        } catch(e) {
          reject(e)
        }
      })
    })
  }
  if(self.status === 'resolved') {
    return new Promise(function(resolve, reject){
      try {
        var x = onResolved(self.data)
        if(x instanceof Promise) {
          x.then(resolve, reject)
        } else {
          resolve(x)
        }
      } catch(e) {
        reject(e)
      }
    })
  }
  if(self.status === 'rejected') {
    return new Promise(function(resolve, reject){
      try {
        var x = onRejected(self.data)
        if(x instanceof Promise) {
          x.then(resolve, reject)
        } else {
          resolve(x)
        }
      } catch(e) {
        reject(e)
      }
    })
  }
}
Promise.prototype.catch = function(onRejected) {
  return this.then(null, onRejected)
}

Promise.prototype.finally = function(fn) {
  return this.then(function(v) {
    setTimeout(fn, 0)
    return v
  }, function(r) {
    setTimeout(fn, 0)
    throw r
  })
}

Promise.race = function (promises) {
  return new Promise(function(resolve, reject){
    for(let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(function (value){
        return resolve(value)
      }, function(reason) {
        return reject(reason)
      })
    }
  })
}

Promise.all =function (promises) {
  return new Promise(function(resolve, reject){
    let resolvedPromise = 0
    const len = promises.length
    let resolvedValues = new Array(len)
    for(let i = 0; i < len; i++) {
      Promise.resolve(promises[i]).then(function (value){
        resolvedPromise++
        resolvedValues[i] = value
        if(resolvedPromise === len) {
          return resolve(resolvedValues)
        }
      }, function(reason){
        return reject(reason)
      })

    }
  })
}

Promise.prototype.valueof = function() {
  return this.data
}

Promise.resolve = function(value) {
  return new Promise(function(resolve, reject){
    resolve(value)
  })
}

Promise.reject = function(reason) {
  return new Promise(function(resolve, reject){
    reject(reason)
  })
}



// 测试用例：
var p = new Promise(function(resolve, reject) {
  setTimeout(() => {
      resolve("success");
  }, 2000);
});
p.then(() => {
  console.log('resolve1');
}, () => {
  console.log('reject1');
}).then(() => {
  console.log('resolve2');
}, () => {
  console.log('reject2');
})

setTimeout(()=>{
  console.log('timer1')
  Promise.resolve().then(function() {
      console.log('promise1')
  })
}, 0)
setTimeout(()=>{
  console.log('timer2')
  Promise.resolve().then(function() {
      console.log('promise2')
  })
}, 0)