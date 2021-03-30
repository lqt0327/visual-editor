import { axiosInstance } from './config'

// // 获取全部模版数据
// export const getAllTplRequest = () => {
//     return axiosInstance.get(`/tpl`)
// }

// export const getTplRequest = (id) => {
//     return axiosInstance.get(`/tpl/${id}`)
// }

export const addTplRequest = (tplData, uid, tag) => {
    return axiosInstance.post(
        `/tpl`, {
            tplData,
            uid,
            tag
        }
    )
}