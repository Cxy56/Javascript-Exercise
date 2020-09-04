
// 方法1， callback
function sleep1(time, callback) {
  setTimeout(() => {
    callback()
  }, time)
}
sleep1(100, function() {})

// 方法2,promise
function sleep2(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}
sleep2(100).then(() => {})

// 方法3， gengerator
function *sleepGen(time) {
  yield new Promise(function(resolve,reject){
    setTimeout(resolve,time)
  })
}
function sleep3(time, callback) {
  sleepGen(time).next().value.then(() => {
    callback()
  })
}
sleep3(100, function(){})
// 方法4，async/ await

async function waitSleep(time) {
  await new Promise((resolve, reject) => {
    setTimeout(() =>{
      resolve()
    }, time)
  })
}
waitSleep(100)