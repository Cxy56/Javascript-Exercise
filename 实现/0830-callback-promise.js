// 将callback函数转为promise
// 1. ajax转为promise
function post(url, type, params){
  return new Promise((resolve, reject){
    ajax({
      url, 
      data: {...params},
      type,
      success: function(res) {
        resolve(res)
      },
      error: function(res) {
        reject(res)
      }
    })
  })
}

/**
 * 题目： 实现 promisify函数，使得
 * window.callJSBridge('appInfo', function (err, info) {
    if (err) {
        // error handle
   }
    console.log(info);
  })
  转换为：
  const abc = promisify(callJSBridge)
  const res = await abc('name')
 */
 function  promisify(callJSBridge) {
   var args = [].slice.call(arguments, 1)
   return function(name) {
     var _args = [].slice.call(arguments, 1)
     return new Promise(function(resolve, reject){
        const callback = function (err, info) {
           if (err) {
              reject(err)
           } else {
            resolve(info)
          }
        }
       callJSBridge.call(this, name, args.concat(_args), callback)
     })
   }
 }