const fs = require('fs')

// 从流中读取数据
// let data = ''
// let readStream = fs.createReadStream('href.text')
// readStream.setEncoding('UTF8')
//
// readStream.on('data', (chunk) => {
//     data += chunk
// })
// readStream.on('end', () => {
//     console.log('data: ' + data)
// })
// readStream.on('error', (err) => {
//     console.log(err)
// })


// 写入数据
// let data = 'https://github.com/DeeJay0921/Node-Demos'
// let writeStream = fs.createWriteStream('href.text')
// writeStream.write(data,'UTF8')
// // writeStream.end()
// writeStream.on('finish', () => {
//     console.log('写入完成')
// })

// 结合起来  将herf.text 的内容复制写入给href2.text   管道操作
// let readStream = fs.createReadStream('href.text')
// let writeStream = fs.createWriteStream('href2.text')
// readStream.pipe(writeStream)
// console.log('读写完毕')

// 通过zlib 压缩文件
const zlib = require('zlib')
// let readStream = fs.createReadStream('href.text')
// let writeStream = fs.createWriteStream('href.text.gz')
// readStream.pipe(zlib.createGzip(writeStream))
// 可以链式写成:
// fs.createReadStream('href.text')
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('href.text.gz'))// 压缩文件创建完成
// console.log('compress Done!')
// // 进行解压缩
// fs.createReadStream('href.text.gz')
//     .pipe(zlib.createGunzip())
//     .pipe(fs.createWriteStream('href3.txt'))
// console.log('decompress Done!')

