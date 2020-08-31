// 用 Javascript 对象模拟 DOM 树，并实现它的 render 方法，通过调用该方法可以转成真正的 DOM 节点。例如我们已经实现了 element.js，通过 require('element.j s')，我们可以定义 ul，如下：
// const el = require('./element.js')；
// const ul = el('ul', {id: 'list'}, [
//   el('li', {class: 'item'}, ['Item 1']),
//   el('li', {class: 'item'}, ['Item 2']),
//   el('li', {class: 'item'}, ['Item 3'])
// ])
// 现在 ul 只是一个 JavaScript 对象表示的 DOM 结构，页面上并没有这个结构。我们可以根据这个 ul 构建真正的<ul>，最终当我们这样调用时，
// const ulRoot = ul.render();
// document.body.appendChild(ulRoot);
// <body>中就有了真正的 DOM 结构，如下
// <ul id='list'>
//   <li class='item'>Item 1</li>
//   <li class='item'>Item 2</li>
//   <li class='item'>Item 3</li>
// </ul>
// 也就是说，我们需要实现 element.js。

class Element {
  constructor(tagName, attr, children) {
    this.tagName = tagName
    this.attr = attr
    this.children = children
  }
  render() {
    let element = document.createElement(this.tagName)
    for(let item in this.attr) {
      if(this.attr.hasOwnProperty(item)) {
        element.setAttribute(item, this.attr[item])
      }
    }
    if(this.children) {
      this.children.forEach(el => {
        let child
        if(el instanceof Element) {
          child = el.render()
        } else {
          child = document.createTextNode(el)
        }
        element.appendChild(child)     
      })
    }
    return element
  }
}

function el(tagName, attr, children) {
  return new Element(tagName, attr, children)
}

module.exports = el