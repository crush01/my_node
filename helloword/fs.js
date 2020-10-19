// 读取文件先引入fs 核心模块
let fs = require('fs')
fs.readFile('./helloword.js', function(error, data){
  console.log('data', data)
})