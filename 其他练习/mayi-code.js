// ======================================================

// 题目 1: debounce 的简单实现
function debounce(func, duration) {
  var timer = null;
  return function () {
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, duration);
  };
}

// ======================================================

// 题目 2：实现一个 convert 函数, 接收一个10进制整数n (n >= 0)，转化为7进制数（用字符串表示）。例如 7转化为'10'，2019转化为'5613'。
function convent(n) {
  let array = [];
  while (n > 0) {
    array.push(n % 7);
    n = parseInt(n / 7);
  }
  let res = array.length === 0 ? '0' : array.reverse().join("");
  return res;
}
// console.log('convent', convent(7))

// ======================================================

/* 题目 3：
  模版替换引擎函数，根据模版字符串和传入的数据返回替换后的字符串，形如(template, data) => string, 具备一定的扩展性
  
  参数:
  template: 模版字符串，例如 "My name is {{ name }}, I'm {{ age }} years old."
  data: 数据对象，例如{ name: '小王', age: 20 }
  返回:
  "My name is 小王, I'm 20 years old."
  
  */
function render(template, data) {
  let arr = template.match(/{{[ a-zA-Z\d ]+}}/g);
  for(let i = 0; i< arr.length; i++) {
    arr[i] = arr[i].replace(/{{ | }}/g,'')
    template = template.replace('{{ '+ arr[i] + ' }}',data[arr[i]]);
  }
  return template;
}
let data = "My name is {{ name }}, I'm {{ age }} years old."
let obj = { name: '小王', age: 20 }
let res = render(data, obj)
// ======================================================
// 题目 4：实现一个基本的 event-emitter。
class EE {
  constructor() {
    this.events = new Map();
    this.once = new Map();
  }
  emit(eventName, ...args) {
    let curFn = this.events.get(eventName);
    if (!curFn) {
      return;
    }
    if (typeof curFn === "function") {
      curFn.apply(this, args);
      this.offOnce(eventName);
    } else {
      for (let i = 0; i < curFn.length; i++) {
        curFn[i].apply(this, args);
        this.offOnce(eventName);
      }
    }
  }

  // once 指只通知一次
  once(eventName, fn) {
    this.once.set(eventName, fn);
    this.on(eventName, fn);
  }

  offOnce(eventName) {
    let oneFn = this.once.get(eventName);
    if (!oneFn) {
      return;
    }
    if (typeof oneFn === "function") {
      this.off(eventName, oneFn);
    } else {
      for (let i = 0; i < oneFn.length; i++) {
        this.off(eventName, oneFn[i]);
      }
    }
  }

  on(eventName, fn) {
    let curFn = this.events.get(eventName);
    if (!curFn) {
      this.events.set(eventName, fn);
    } else {
      this.events.set(eventName, [curFn, fn]);
    }
  }

  off(eventName, fn) {
    let curFn = this.events.get(eventName);
    if (!curFn) {
      return null;
    }
    if (typeof curFn === "function") {
      this.events.delete(eventName, fn);
    } else {
      let pos = -1;
      for (let i = 0; i < curFn.length; i++) {
        if (curFn[i] === fn) {
          pos = i;
        }
      }
      if (pos !== -1) {
        curFn.splice(pos, i);
        if (curFn.length === 1) {
          this.event.set(eventName, curFn[0]);
        }
      } else {
        return null;
      }
    }
  }
}

// ======================================================
// 题目 5：实现类似 python 数组分片语法
function slice(arr) {
  let data = arr;
  return new Proxy(arr, {
    get(key, value) {
      return getData(value);
    },
    set() {},
  });
  function getData(key) {
    if (/:[1-9]*:[1-9]*/.test(key)) {
      // :5:2 每5个取2个
      let key = key.split(":").filter((item) => !!item);
      let curData = [];
      let flag = true;
      for (let i = 0; i < data.length; i++) {
        if (i % k[0] === 0) {
          flag = true;
        }
        if (start && i % k[0] < key[1]) {
          curData.push(data[i]);
        }
        if (i % k[0] === key[1] - 1) {
          flag = false;
        }
      }
      return curData;
    } else if (/[1-9]*:[1-9]*/.test(key)) {
      // 2:5 取2到5
      // :5 => 0:5
      let k = key.split(":");
      if (k.length === 2) {
        return data.splice(k[0], k[1] - k[0]);
      } else if (k.length === 1) {
        return data.splice(0, k[0]);
      } else if (k.length === 0) {
        return data;
      }
    }
  }
}

const arr = slice([1, "2", 3, "4", 5, "6", 7, "8", 9, "0"]);
arr["2:5"]; // [3, '4', 5]
