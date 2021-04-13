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

// 更新模版
export const updateTplRequest = (id, {tplData, tag, title, homePage}) => {
    return axiosInstance.patch(`/tpl/${id}`, {
        tplData,
        tag,
        title,
        homePage
    })
}

// 删除模版
export const deleteTplRequest = (id) => {
    console.log(id,'???????')
    return axiosInstance.delete(`/tpl/${id}`)
}

// 获取全部推荐模版信息
export const getAllRecomTplRequest = () => {
    return axiosInstance.get(`/recommend`)
}