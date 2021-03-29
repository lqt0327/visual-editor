import { axiosInstance } from './config'

// 获取全部模版数据
export const getAllTplRequest = () => {
    return axiosInstance.get(`/tpl`)
}

export const getTplRequest = (id) => {
    return axiosInstance.get(`/tpl/${id}`)
}