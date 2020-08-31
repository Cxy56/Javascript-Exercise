// 设计和实现一个LRU（最近最少使用）缓存机制

// 运用你所掌握的数据结构，设计和实现一个 LRU (最近最少使用) 缓存机制。它应该支持以下操作：获取数据 get 和写入数据 put 。

// 获取数据 get(key) - 如果密钥 ( key ) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1 。写入数据 put(key, value) - 如果密钥不存在，则写入数据。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据，从而为新数据留出空间。


// 示例:

// LRUCache cache = new LRUCache( 2 /* 缓存容量 */ );

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // 返回  1
// cache.put(3, 3);    // 该操作会使得密钥 2 作废
// cache.get(2);       // 返回 -1 (未找到)
// cache.put(4, 4);    // 该操作会使得密钥 1 作废
// cache.get(1);       // 返回 -1 (未找到)
// cache.get(3);       // 返回  3
// cache.get(4);       // 返回  4

class LRUCache {
  constructor (capacity) {
    this.keys = []
    this.cache =  Object.create(null)
    this.capacity = capacity
  }
  get (key) {
    if(this.cache[key]) {
      // 删除当前位置
      this.remove(this.keys,key)
      // push到最后一位 
      this.keys.push(key)
      return this.cache[key]
    }
    return -1
  }
  put (key, value) {
    // 已经存在
    if(this.cache[key]) {
      // 删除当前位置
      this.remove(this.keys,key)
      // push到最后一位 
      this.keys.push(key)
      this.cache[key] = value
    } else {
      // 是否超出容量
      this.cache[key] = value
      this.keys.push(key)
      if(this.keys.length > this.capacity) {
        this.cache[this.keys[0]] = null
        this.keys.shift()
      }
    }
  }
  remove(arr, target) {
    let index = arr.indexOf(target)
    if(index > -1) {
      arr.splice(index, 1)
    }
  }
}

//!! 方法二， 利用map结构
// !!既能保存键值对，并且能够记住键的原始插入顺序

class LRUCache2 {
  constructor (capacity) {
    this.store = new Map()
    this.capacity = capacity
  }
  get (key) {
    if(this.store.has(key)) {
      let tmp = this.store.get(key)
      this.store.delete(key)
      this.store.set(key, tmp)
      return tmp
    }
    return -1
  }
  put (key, value) {
    // 已经存在
    if(this.store.has(key)) {
      this.store.delete(key)
    } else if(this.store.size >= this.capacity){
      // 超出容量,删除第一个
      let keys = [...this.store.keys()]
      this.store.delete(keys[0])
    }
    this.store.set(key, value)
  }
  remove(arr, target) {
    let index = arr.indexOf(target)
    if(index > -1) {
      arr.splice(index, 1)
    }
  }
}

// 测试用例： 
let cache = new LRUCache2( 2 /* 缓存容量 */ );

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));         // 返回  1
cache.put(3, 3);                  // 该操作会使得密钥 2 作废
console.log(cache.get(2));       // 返回 -1 (未找到)
cache.put(4, 4);                // 该操作会使得密钥 1 作废
console.log(cache.get(1));     // 返回 -1 (未找到)
console.log(cache.get(3));    // 返回  3
console.log(cache.get(4));   // 返回  4