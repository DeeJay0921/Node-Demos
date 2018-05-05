// !( () => {
//     console.log(1)
// })() // 同步任务
// process.nextTick( ()=> {
//     console.log(2)
// } ) // process.nextTick() 所有异步任务里面最快执行
// Promise.resolve().then( ()=> {
//     console.log(3)
// } ) // microtask
// process.nextTick( () => {
//     console.log(22) // 所有的nextTick都优于Promise.then()执行
// })

// const http = require('http')
//         url = require('url')

// let server = (req,res) => {
//     console.log(req.url)
//     let path = url.parse(req.url).pathname
//     console.log(path)
//     if(path == '/') {
//         res.writeHead(200,{
//             'Content-Type': 'text/plain'
//         })
//         res.write('hello node')
//     }else if( path == '/about') {
//         res.writeHead(200,{
//             'Content-Type': 'text/plain'
//         })
//         res.write('ab page')
//     }else if( path == '/error') {
//         res.writeHead(200,{
//             'Content-Type': 'text/plain'
//         })
//         res.write('error')
//     }
//     res.end();
// }
// http.createServer(server).listen(3000, () => {
//     console.log('done!')
// })

// function getTime () {
//     return new Promise((resolve,reject) => {
//         setTimeout( ()=> {
//             const date = Date.now()
//             if(date % 2 == 0) {
//                 resolve(date)
//             }else {
//                 reject(date)
//             }
//         },500)
//     })
// }

// async function printDate () {
//     const res = await getTime().then( (date) => {
//         console.log(`为偶数: ${date}`)
//     }).catch( (err) => {
//         console.log('为奇数')
//     })
//     // console.log(`为偶数: ${res}`)
// }
// printDate()
