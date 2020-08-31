//原理， 同generator的co函数
/**
 * 
 * async function fn(args) {}
    相当于
    function fn(args) {
      return spawn(function *() {})
    }
 */
function spawn(genF) {
  return new Promise(function(resolve, reject){
    var gen = genF()
    function step(nextF) {
      try {
        var nextRes = nextF()
      } catch(e) {
        reject(e)
      }
      if(nextRes.done) {
        resolve(nextRes.value)
      } else {
        Promise.resolve(nextRes.value).then(function(v){
          step(function() {
            return gen.next(v)
          })
        }, function(r) {
          step(function() {
            return gen.throw(r)
          })
        })
      }
    }
  
    step(function() {
      return gen.next()
    })

  })
}