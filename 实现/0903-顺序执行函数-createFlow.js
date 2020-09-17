
// 需要按照 a,b,延迟1秒,c,延迟1秒,d,e, done 的顺序打印
/**
  createFlow([
    () => log("a"),
    () => log("b"),
    createFlow([() => delay(1000).then(() => log("c"))]),
    [() => delay(1000).then(() => log("d")), () => log("e")]
  ]).run(() => {
    console.log("done");
  });
 */

function createFlow(arr) {
  // 1. 展开数组参数
  let funArr = flatArr(arr)
  async function run(callback) {
    for(let i = 0; i < funArr.length; i++) {
      if(typeof funArr[i] === 'function') {
        await funArr[i]()
      } else if(funArr[i].isFlow) {
        await funArr[i].run()
      }
    }
    if(callback) {
    callback()
    }
  }
  return {
    isFlow: true,
    run // function
  }
}

function flatArr(arr) {
  let res = []
  for(let i = 0 ; i < arr.length; i++) {
    if(arr[i] instanceof Array) {
      res.push(...flatArr(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  return res
}
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function log (str) {
  console.log(str)
}

createFlow([
  () => log("a"),
  () => log("b"),
  createFlow([() => delay(1000).then(() => log("c"))]),
  [() => delay(1000).then(() => log("d")), () => log("e")]
]).run(() => {
  console.log("done");
});