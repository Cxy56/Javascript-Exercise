
const localStorageMock = function () {
  let store = {}
  return {
    getItem: function(key) { return store[key] || null },
    setItem: function (key,value) { store[key] = value },
    removeItem: function(key) { delete store[key] },
    clear: function() { store = {} }
  }
}()

const localStorageMock2 = (function(){
  let store = {}
  return {
    getItem(key){
      if(store[key] && store[key+'time']){
        const date = new Date().valueOf()
        if(date>store[key+'time']){ // 过期了
          this.removeItem(key)
          return '已经过期了'
        }
      }
      return store[key] || null
    },
    setItem(key,value,time){
      store[key] = value.toString()
      if(time)store[key+'time'] = new Date().valueOf() + time // 设置过期时间
    },
    removeItem(key){
      delete store[key]
    },
    clear(){
      store = {}
    }
  }
})()


Object.defineProperty(window, 'localStorage2', {
  value: localStorageMock2
})