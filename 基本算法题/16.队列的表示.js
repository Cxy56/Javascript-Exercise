// 一、数据结构：队列

function Queue() {
  let items = []
  this.enqueue = function(e) {
    items.push(e)
  }
  this.dequeue = function() {
    return items.shift()
  }
  this.isEmpty = function() {
    return items.length === 0
  }
  this.front = function() {
    return items[0]
  }
  this.clear = function() { 
    items = [] 
  }
  this.size = function() {
    return items.length
  }
}

//!!双端队列
function Deque() {
  let items = []
  this.addFirst = function(e) {
    items.unshift(e)
  }
  this.removeFirst = function() {
    return items.shift()
  }
  this.addLast = function(e) {
    items.push(e)
  }
  this.removeLast = function() {
    return items.pop()
  }
  this.isEmpty = function() {
    return items.length === 0
  }
  this.front = function() {
    return items[0]
  }
  this.clear = function() { 
    items = [] 
  }
  this.size = function() {
    return items.length
  }
}