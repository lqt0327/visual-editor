import { join } from 'path'
import { load } from 'js-yaml'
import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs'

function bootstrap() {
    const obj = {}

    /**
     * @description 遍历目录，找到目录下的.yml文件，并且合并yml文件中的内容
     * @param dir 目录
     * @param callback 回调函数  合并yml中数据
     */
    function travel(dir, callback) {
       readdirSync(dir).forEach((file)=>{
            var pathname = join(dir,file)
            if(statSync(pathname).isDirectory()) {
                travel(pathname, callback)
            }else if(statSync(pathname).isFile()) {
                if(pathname.slice(-4) === '.yml') {
                    const doc = load(
                        readFileSync(pathname, 'utf-8')
                    )
                    callback(doc)
                }
            }
        }) 
    }
    travel('../open-modules/packages/components', function(doc) {
        if(obj[doc.name]) {
            obj[doc.name].children.push(doc)
        }else {
            obj[doc.name] =  {
                name: doc.name,
                children: [
                    doc
                ]
            }
        }
    })

    

    let arr = []

    for(let k in obj) {
        arr.push({name: k,children:obj[k].children})
    }

    // [nodemon] restarting due to changes...
    // 由于在程序刚启动，便处理了写入了文件逻辑，造成了更改，使用nodemon运行，会导致该程序不断重新启动
    writeFileSync('./comp_config/config.json', JSON.stringify(arr))
    
    console.log('数据初始化完成……')
}

bootstrap()
