function ajax(url, method, data) {
  var xhr = new XMLHttpRequest()
  return new Promise(function(resolve, reject){
    xhr.open(method, url)
    xhr.send(data)
    xhr.onreadystatechange = function (response) {
      if (xhr.readyState === 4) {
        if(xhr.status === 200) {
          resolve(xhr.response.data)
        } else {
          reject(xhr.response.data)
        }
      }
    }
  })
}

ajax('/baidu', 'get', 'string').then(res => {
  console.log(res)
}).catch(error => {
  console.log(error)
})

