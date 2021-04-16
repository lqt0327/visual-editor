
/**
 * @description 提取url中传递的参数
 * @param {string} url - url中的search部分
 */
const getUrlParams = (url) => {
    let str = url.slice(1).split("&")
    let map = {}
    for(let v of str) {
        let tmp = v.split("=")
        map[tmp[0]] = tmp[1]
    }
    return map;
}

export { getUrlParams }