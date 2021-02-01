// 最小栈（包含getMin函数的栈）
// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
// 示例:

// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> 返回 -3.
// minStack.pop();
// minStack.top();      --> 返回 0.
// minStack.getMin();   --> 返回 -2.
function MinStack() {
  this.val = []
  this.length = 0;
  this.mins = [];
}
MinStack.prototype.push = function(item) {
  const min = this.mins[this.length-1] !== undefined ? this.mins[this.length-1] : Infinity
  this.val[this.length++] = item
  this.mins[this.length - 1] = Math.min(min, item)
}
MinStack.prototype.pop = function() {
  if(this.length === 0) return
  this.length--
  this.val.length = this.length
  return this.val[this.length]
}
MinStack.prototype.top = function() {
  return this.val[this.length-1]
}
MinStack.prototype.getMin = function() {
  return this.mins[this.length - 1];
}

var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());  // --> 返回 -3.
minStack.pop();
console.log(minStack.top());     // --> 返回 0.
console.log(minStack.getMin());  // --> 返回 -2.

//!!1. 数据结构栈
function Stack() {
  let items = []
  this.push = function(e) { 
    items.push(e) 
  }
  this.pop = function() { 
    return items.pop() 
  }
  this.isEmpty = function() { 
    return items.length === 0 
  }
  this.size = function() { 
    return items.length 
  }
  this.clear = function() { 
    items = [] 
  }
}