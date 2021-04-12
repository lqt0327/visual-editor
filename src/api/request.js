import { axiosInstance } from './config'

// // 获取全部模版数据
// export const getAllTplRequest = () => {
//     return axiosInstance.get(`/tpl`)
// }

// export const getTplRequest = (id) => {
//     return axiosInstance.get(`/tpl/${id}`)
// }

// 新模版发布
export const addTplRequest = (tplData, uid, tag, title="未命名页面", homePage=0) => {
    return axiosInstance.post(
        `/tpl`, {
            tplData,
            uid,
            tag,
            title,
            homePage
        }
    ).then(res=>res)
}

// 获取全部模版信息   分类处理
export const getAllTplRequest = () => {
    return axiosInstance.get(`/tpl`)
}