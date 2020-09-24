var isPalindrome = function(x) {
  if((x < 0) || (x !== 0 && x % 10 === 0))
    return false;
  let tmp = 0;
  while(x > tmp) {
    tmp = tmp * 10 + x % 10;
    x = Math.floor(x / 10);
  }
  return x === tmp || x === Math.floor(tmp / 10);
};

for(let i = 1; i <= 10000; i++) {
  if(isPalindrome(i)) {
    console.log(i);
  }
}