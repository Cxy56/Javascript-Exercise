//******************************* */
function controllPoll () {
  this.tasks = []
  this.max = 10
  setTimeout(() => {
    this.run()
  }, 0)
}
controllPoll.prototype.addTask = function(task){
  this.tasks.push(task)
}
controllPoll.prototype.run = function() {
  if(this.tasks.length === 0) return
  var min = Math.min(this.tasks.length, max)
  for(let i = 0; i < min; i++) {
    this.max--
    var task = this.tasks.shift()
    task().then((res)=>{
      console.log('成功')
    }).finally(()=>{
      this.max++
      this.run()
    })
  }
}

//******************************* */

class multiRequest1 {
  constructor (urls, maxNum) {
    this.tasks = []
    this.max = maxNum
    this.addTask(urls)
    setTimeout(() => {
      this.run()
    }, 0)
  }
  addTask (urls) {
    urls.forEach((item) => {
      this.tasks.push(this.request(item))
    })
  }
  // 模拟请求
  request(url) {
    return new Promise((r) => {
      const time = Math.random() * 1000;
      setTimeout(() => r(url), time);
    });
  }
  async run () {
    if(this.tasks.length === 0) return
    let min = Math.min(this.tasks.length, this.max)
    for(let i = 0; i < min; i++) {
      this.max--
      var task = this.tasks.shift()
      let res = await task
      console.log('res', res)
      this.max++
      this.run()
      // pormise写法
      // task.then(res => {
      //   console.log('res', res)
      // }).catch(error => {
      //   console.log('error', error)
      // }).finally(() => {
      //   this.max++
      //   this.run()
      // })
    }
  }
}

function multiRequest(urls, maxNum) {
  return new multiRequest1(urls, maxNum)
}
let urls = [1,2,3,4,5]
multiRequest(urls, 3)