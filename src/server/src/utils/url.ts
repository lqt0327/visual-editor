import * as url from 'url'

/**
 * @description 根据key从url中获取query的值
 * @param urlPath {string} url地址
 * @param key {string} 获取一个单独的key
 */
export const getUrlQuery = (urlPath: string, key?: string): string | object => {
    const query = url.parse(urlPath, true).query
    if (key) {
        return query[key]
    } else {
        return query;
    }
};