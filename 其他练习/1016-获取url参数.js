
function searchParams(url, name) {
  // URLSearchParams 接口定义了一些实用的方法来处理 URL 的查询字符串。
	const searchParams = new URLSearchParams(url)
	const getElective = searchParams.get(name)

  let res
	if(getElective) {
		res = getElective.split(',').filter(item => item)
	} else {
		res = []
  }
  console.log('res', res)
  return res
}
searchParams('https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=&local_province_id=33', 'elective') // []
searchParams('https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800&local_province_id=33', 'elective') // ["800"]
searchParams('https://www.xx.cn/api?keyword=&level1=&local_batch_id=&elective=800,700&local_province_id=33', 'elective') // ["800","700"]

