
// 要求：使结果顺次输出 0-99

// 1、只能修改 setTimeout 到 Math.floor(Math.random() * 1000 的代码

// 2、不能修改 Math.floor(Math.random() * 1000

// 3、不能使用全局变量

function print(n){
  setTimeout(() => {
    console.log(n);
  }, Math.floor(Math.random() * 1000));
}
for(var i = 0; i < 100; i++){
  print(i);
}

// //!! 方法1, setTimeout、setInterval被遗忘的第三个参数,第三个以后的参数是作为第一个func()的参数传进去。
function print(n){
  setTimeout(() => {
    console.log(n);
  }, 1, Math.floor(Math.random() * 1000));
}
for(var i = 0; i < 100; i++){
  print(i);
}

// //!! 方法2
function print(n){
  setTimeout((() => {
    console.log(n);
     return () => {}
  }).call(n), Math.floor(Math.random() * 1000));
}
for(var i = 0; i < 100; i++){
  print(i);
}

// !! 方法3, （在浏览器上可以运行）
function print(n){
  setTimeout((() => {
  console.log(n);
  // return () => {}  //node环境需要加这句
  }).apply(n), Math.floor(Math.random() * 1000));
  }
  for(var i = 0; i < 100; i++){
  print(i);
  }