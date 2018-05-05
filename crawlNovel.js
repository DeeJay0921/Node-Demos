const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')
const mkdirp = require('mkdirp')

const mainDomain = `http://www.saoyawo.com`

let sub = `/artlyw/91874.html`

function crawlerNovel (sub) {
    request.get(`${mainDomain}${sub}`, (err,status,body) => {
        let $ = cheerio.load(body)
        let novelInfo = {
            title: '',
            text: ''
        }
        novelInfo.title = $('.page_title').text()
        novelInfo.text = $('.content').html().replace(/&#x/g,`\\u`).replace(/;/g, '')
        let arr = novelInfo.text.split('<br>')
        arr.forEach((element,index) => {
            let str = element
            fs.createWriteStream(`./novel/${novelInfo.title}.txt`).write(element)
            console.log(str)
        })
        // novelInfo.text = arr.join(`\\n`)
        // fs.createWriteStream(`./novel/${novelInfo.title}.txt`).end(novelInfo.text)
    })
}

crawlerNovel(sub)
