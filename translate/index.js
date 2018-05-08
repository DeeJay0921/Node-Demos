const request = require('request')
const cheerio = require('cheerio')
const chalk = require('chalk')

const icibaUrl = `http://www.iciba.com/`

if(!process.argv[2]) {
    console.log(chalk.red(`\n  请输入想查询的单词!\n`))
    return
}

request(`${icibaUrl}${process.argv[2]}`,(err,status,body) => {
    if(err) {
        console.log(`查询出错`)
        console.log(err)
        return
    }
    if(status.statusCode === 200) {
        let $ = cheerio.load(body)
        let keyWord = $('.in-base-top .keyword').text()//查询的单词
        let pronunceArr = []
        $('.base-speak span').each((index, element) => {
            pronunceArr.push($(element).find('span').text())
        })
        keyWord = keyWord.trim()
        if(!keyWord) {
            console.log(chalk.red(`\n  没有查询到结果！\n`))
            return
        }
        console.log(chalk.white(`\n  查询词：${keyWord}   ${pronunceArr[0]}   ${pronunceArr[2]}\n`))
        $('.base-list li').each( (index,element) => {
            let type = $(element).find('.prop').text()
            let meaning = $(element).find('p span').text().trim()
            console.log(chalk.green(`  - ${type}   ${meaning} \n`))
        })
    }
})