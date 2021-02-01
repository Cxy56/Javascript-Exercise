function count(start, end) {
  let timer = null;
    console.log(start++)
    timer = setInterval(function() {
      if(start > end) {
        clearInterval(timer)
        return
      }
      console.log(start++)
    }, 100)

    return {
      cancel() {
        clearInterval(timer) 
      }
    }
}
let countRes2 = count(100, 140)
setTimeout(()=> {
  countRes2.cancel()

},1000)
// 链接：https://www.nowcoder.com/questionTerminal/72c661d926494bd8a50608506915268c?f=discussion
// 来源：牛客网

function count(start, end) {
  //立即输出第一个值
  console.log(start);
     var timer = setInterval(function(){
         if(start <= end){
             console.log(++start);
         }else{
             clearInterval(timer);
         }
     },100);
    //返回一个对象
     return {
         cancel : function(){
             clearInterval(timer);
         }
     };
 }
let countRes = count(100, 10000)
setTimeout(()=> {
  countRes.cancel()

},1000)