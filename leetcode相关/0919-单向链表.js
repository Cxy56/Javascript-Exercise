// !! ********单向链表
function List () {
  let Node = function (element) {
    this.element = element
    this.next = null
  }
  // 初始头节点为 null
  let head = null
  // 链表长度
  let length = 0
  // !!添加节点
  this.append = function (element) {
    let node = new Node(element)
    let p = head
    if(!head) {
      head = node
    } else {
      while(p.next) {
        p = p.next
      }
      p.next = node
    }
    length += 1
  }
  //!!查找
  this.search = function (element) {
    let p = head
    if(!head) return false
    while(p) {
      if(p.element === element) return true
      p = p .next
    }
    return false
    
  }
  // !!在 position 位置插入：
  this.insert = function (position, element) {
    if(position >= 0 && position <= length) {
      let pre = head
      let cur = head
      let node = new Node(element)
      index = 0
      if(position === 0) {
        node.next = pre
        head = node
      } else {
        while(index < position) {
          index++
          pre = cur
          cur = cur.next
        }
        pre.next = node
        node.next = cur
      }
      length++

    } else {
      return null
    }
  }
  //!!删除节点
  this.remove = function(element) {
    let p = head, pre = head
    if(!element) return
    while(p) {
      if(p.element === element) {
        p = p.next
        pre.next = p
        length--
      } else {
        pre = p
        p = p.next
      }
    }
  }
  this.isEmpty = function(){ return length === 0 } 
  this.size = function(){ return length }
}

// 测试
let list = new List()
for(let i = 0; i < 5; i+=1) {
  list.append(i)
}
list.insert(5, 10)
console.log('list', list.size())
