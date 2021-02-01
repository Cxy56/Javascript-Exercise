function base10(str) {
  var arr = str.split('').reverse()
  console.log(arr)
  let res = 0
  arr.forEach((element,index) => {
    res+= element * Math.pow(2,index)  
  });
  console.log(res)

}
base10('11000000')

function convertToBinary(num) {
  let arr = []
  while(num > 0){
    let item = num % 2
    arr.push(item)
    num = parseInt(num/2)
  }
  console.log(arr)
  while(arr.length < 8) {
    arr.push('0')
  }
  return arr.reverse().join('')
}

// let res = convertToBinary(65)
// console.log('res', res)


function multiply(a, b) {
    a = a.toString();
    b = b.toString();
    var aLen = a.substring(a.indexOf(".")+1).length;
    var bLen = a.substring(a.indexOf(".")+1).length;
    return (a * Math.pow(10,aLen)) * (b * Math.pow(10,bLen)) / Math.pow(10,aLen+bLen);
}

let res3 = multiply(3, 0.00156)
console.log('res3', res3)

function alterObjects(constructor, greeting) {
  constructor.prototype.greeting = greeting
}

// var C = function(name) {this.name = name; return this;}; 
// var obj1 = new C('Rebecca'); 
// alterObjects(C, 'What\'s up'); 
// console.log(obj1.greeting)


var C = function() {this.foo = 'bar'; this.baz = 'bim';}; 
C.prototype.bop = 'bip'; 
iterate(new C());

function iterate(obj) {
  let res = []
  for(let key in obj) {
      if(obj.hasOwnProperty(key)){
          res.push( key + ': ' + obj[key])
      }
  }
  console.log(res)
  return res
}

function containsNumber(str) {
  let reg = /[0-9]+/
  return reg.test(str)
}
console.log(containsNumber('123'))
console.log(containsNumber('abc'))

function Fibonacci(n)
{
    if(n === 0) return 0
    if(n <= 2) return 1
    return Fibonacci(n-2) + Fibonacci(n-1)
    // write code here
}