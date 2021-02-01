function truncate(arr) {
  let newArr = arr.slice(0, arr.length - 1)
  console.log('newArr', newArr)
  return newArr

}
let arr = [1, 2, 3, 4]
truncate(arr)

console.log(arr.slice(0,2))