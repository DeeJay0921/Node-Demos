const http = require('http');
const fs = require('fs')
//
// http.createServer((req,res) => {
//     res.writeHead(200,{'Content-Type': 'text/plain'});
//     res.end('Hello,Node!');
// }).listen(5656);
// console.log('http://localhost:5656/')


// http.createServer( (req,res) => {
//     console.log(req.method + ":" + req.url)
//     res.writeHead(200,{
//         'Content-Type': 'text/html'
//     })
//     res.end('<h1>Hello,Node Server!</h1>')
// }).listen(5656)
//
// console.log('Server has been started at 5656')

//使用url 以及 path
const url = require('url')
const path = require('path')

const root = path.resolve('.') // 获取根目录
console.log('Static Root Dir is : ' + root)

http.createServer( (req,res) => {
    console.log('Url : ' + req.url)
    let pathname = url.parse(req.url).pathname  // 拿到访问的url path
    console.log('Pathname : ' + pathname)
    let filepath = path.join(root,pathname) // 拿到本地的文件path
    console.log('Local File Path is : ' + filepath)

//    读取本地文件的状态
    fs.stat(filepath, (err,data) => {
        if(err || !data.isFile()) { //出错或者文件不存在
            console.log(404 + ':' + req.url)
            res.writeHead(404)
            res.end('404 Not Found')
        }else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            })
            fs.createReadStream(filepath)
                .pipe(res) //返回response  res本身就是一个writeStream
        }
    })
}).listen(5656, () => {
    console.log('Server is Running at port 5656')
})
