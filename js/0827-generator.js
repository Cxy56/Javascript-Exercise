// 执行函数，同async的 spawn
/**
 * !!实现原理
 *  async function fn(args) {}
    相当于
    function fn(args) {
      *!! return spwan(function*(){})
    }
 */

/**
 * 
 * @param {*} gen gennerator 函数
 */
function co(gen) {
  return new Promise((resolve, reject) => {
    var gen = genFunc()
    function next(nextF) {
      try {
        var next = nextF()
      } catch(e) {
        reject(e)
      }

      if(next.done){
        return resolve(next.value)
      } 
      Promise.resolve(next.value).then(function(v){
        next(function(){
          return gen.next(v)
        })
      }).catch((e) => {
        next(function(){
          return gen.throw(e)
        })
      })

    }
    next(function(){
      return gen.next()
    })
  })
}