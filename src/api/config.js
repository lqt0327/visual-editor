import axios from 'axios'

export const baseUrl = process.env.NODE_ENV === 'development' ? 
"http://[::1]:3030" : "";

// axios的实例及拦截器配置
const axiosInstance = axios.create({
    baseURL: baseUrl
  });

  axiosInstance.interceptors.request.use(
    config => {
      return config
    },
    err => {
      return Promise.reject(err)
    }
  )
  
  axiosInstance.interceptors.response.use(
    res => {
      return res.data;
    },
    err => {
      if(err.response.data.message) {
        return err.response.data.message
      }
      console.log(err.response, "网络错误");
    }
  );
  
  export { axiosInstance };
  