class EventEmiter {
  constructor () {
    if(!this.handles) {
      this.handles = Object.create(null)
    }
  }
  on (event, cb) {
    if(!this.handles[event]) {
      this.handles[event] = []
    }
    this.handles[event].push(cb)
  }
  emit (event, ...args) {
    if(this.handles[event]) {
      this.handles[event].forEach(item => {
        if (typeof item === 'function') {
          item.apply(this, args)
        } else {
          console.log(`${item} is not a function`)
        }
      })
    }
  }
  off (event, cb) {
    if(!this.handles[event]) {
      return this
    }
    if (!cb) {
      this.handles[event] = null
      return this
    }
    const index = this.handles[event].indexOf(cb)
    this.handles[event].splice(index, 1)
    return this
  }
  once (event, cb) {

    const only = () => {
      cb.apply(this, arguments)
      this.off(event, cb)
    }
    this.on(event, only)

    return this

  }
}