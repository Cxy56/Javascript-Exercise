// list转为树形结构
function convertListToTree(list) {
  let res = []
  let map = new Map()
  list.forEach(item => {
    map.set(item.id, item)
  })
  list.forEach(element => {
    if(element.parentId === 0) {
      res.push(element)
    } else {
      let parent = map.get(element.parentId)
      parent.children = parent.children || []
      parent.children.push(element)
    }
  })
  return res
}

let list =[
  {id:1,name:'部门A',parentId:0},
  {id:2,name:'部门B',parentId:0},
  {id:3,name:'部门C',parentId:1},
  {id:4,name:'部门D',parentId:1},
  {id:5,name:'部门E',parentId:2},
  {id:6,name:'部门F',parentId:3},
  {id:7,name:'部门G',parentId:2},
  {id:8,name:'部门H',parentId:4}
];

let tree = convertListToTree(list)
console.log('list', tree)

// 树形结构转为list

function treeTotreeList(tree) {
  let res = []
  for(let i = 0; i < tree.length; i++) {
    if(tree[i].children) {
      res.push(...treeTotreeList(tree[i].children))
      delete tree[i].children
      res.push(tree[i])
    } else {
      res.push(tree[i])
    }
  }
  return res
}
let result = [
  {
    id: 1,
    name: '部门A',
    parentId: 0,
    children: [
      {
        id: 3,
        name: '部门C',
        parentId: 1,
        children: [
          {
            id: 6,
            name: '部门F',
            parentId: 3
          }, {
            id: 16,
            name: '部门L',
            parentId: 3
          }
        ]
      },
      {
        id: 4,
        name: '部门D',
        parentId: 1,
        children: [
          {
            id: 8,
            name: '部门H',
            parentId: 4
          }
        ]
      }
    ]
  }, {
    id:2,name:'部门B',parentId:0
  }
]
console.log('treeTotreeList', treeTotreeList(result))