import axios from 'axios'
import { Message } from 'element-ui'

//创建axios实例
axios.defaults.baseURL = process.env.BASE_API
axios.defaults.timeout = 25000
axios.defaults.headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'Assess-Control-Allow-Origin': '*',
    'Assess-Control-Allow-Credentrtials': true
}

axios.defaults.withCredential = true;

export const post = (url, data = {}) => {
    return new Promise((resolve, reject) => {
        axios.post(url, data, {
            headers: {
                'Content-Type': 'applicationn/json;charset=UTF-8;'
            }
        }).then((response) => {
            resolve(response.data)
        }).catch((error) => {
            reject(error)
        })
    })
}

// get方法：
export const get = (url, params = {}) => {
    return new Promise((resolve, reject) => {
      axios.get(url, {
        params: params
      }).then((response) => {
          resolve(response.data)
        }).catch((error) => {
          reject(error)
        })
    })
}

  //请求拦截器
axios.interceptors.request.use(function(config) {
    return config;
}, err => {
    return Promise.reject(err)
})

  //响应拦截器
  axios.interceptors.response.use(
    response => {
        const res = response.data
        if(res.meta && !res.meta.success) {
            if(res.meta.errorCode === 5000) {
                  window.location.href = res.meta.message;
                  return;
            }
            Message({
                dangerouslyUseHTMLString: true,
                message: res.meta.message,
                type: 'error',
                duration: 5 * 1000
            })
            return Promise.reject('error')
        } else {
            return response
        }
    },
    error => {
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
  )