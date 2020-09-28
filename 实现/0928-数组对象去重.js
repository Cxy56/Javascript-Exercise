function dis(arr) {
  const resObj = new Map()
  const res = [];
  arr.forEach((item) => {
    const key = item + JSON.stringify(item);
    if (!resObj.has(key)) {
      res.push(item);
      resObj.set(key, item)
    }
  })
  return res;
}

const test1 = [123, "meili", "123", "mogu", 123];

const test2 = [123, [1, 2, 3], [1, "2", 3], [1, 2, 3], "meili"];

const test3 = [123, { a: 1 }, { a: { b: 1 } }, { a: "1" }, { a: { b: 1 } }, "meili"];

console.log(dis(test1));

console.log(dis(test2));

console.log(dis(test3));
