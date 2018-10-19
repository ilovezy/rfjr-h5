/**
 * Created by ymjdev on 2017/9/20.
 */
import axios from 'axios';
import {Toast, Loading} from '../components/dialog/index';
import './CONFIG'
import USER from '../global/USER'

import VConsole from 'vconsole' //import vconsole
//全局API
let env = process.env.NODE_ENV
let ajaxUrl = CONFIG.serviceUrl[env]

if (env == 'development' && CONFIG.openVconsole) {
  let vConsole = new VConsole() // 初始化
}

let ToastTimeout = 300
let instance = axios.create({
  baseURL: ajaxUrl,
  timeout: 50000,
  withCredentials: true
})

instance.interceptors.request.use(config => {
  let Version = CONFIG.serviceParam.Version
  let clientName = CONFIG.serviceParam.clientName
  let clientSecret = CONFIG.serviceParam.clientSecret

  config.headers.Version = Version

  if (config.data) {
    config.data.clientName = clientName
    config.data.clientSecret = clientSecret
  } else {
    config.data = {
      clientName,
      clientSecret
    }
  }

  let token = USER.getToken()
  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  }
  return config
})

instance.interceptors.response.use(res => {
  Loading.close();
  let data = res.data || {}
  if (data.success) {
    return data.result || {}
  } else {
    if (data.errorDescription) {
      Toast({mes: data.errorDescription, timeout: ToastTimeout})
    }
    return Promise.reject(data);
  }
}, err => {
  // debugger
  Loading.close()
  if (err.response) {
    let response = err.response || {}
    let data = response.data || {}
    if (data.status == 404) {
      Toast({mes: '404错误，后台没找到', timeout: ToastTimeout})
    } else {
      if (data.error == 'ERROR_ACCESS_NEED_AUTH') {
        // TODO 调到登录页面去
        Toast({mes: '请登录 fuck TODO', timeout: ToastTimeout})
        USER.logout()
        // setTimeout(() => {
        //   location.href = '/login';
        // }, 2000)
        return Promise.reject()
      } else {
        Toast({mes: data.errorDescription, timeout: ToastTimeout})
        return Promise.reject(data);
      }
    }
  } else {
    Toast({mes: '网络有点卡，请稍后重试', timeout: ToastTimeout})
    return Promise.reject(err)
  }
})

const postRequest = (url, params) => {
  if (!url) {
    Toast({mes: '请求地址为空', timeout: ToastTimeout})
  } else {
    return instance({
      method: 'post',
      url,
      data: params,
      transformRequest: [function (data) {
        let ret = '';
        for (let item in data) {
          ret += encodeURIComponent(item) + '=' + encodeURIComponent(data[item]) + '&';
        }
        return ret;
      }],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  }
}

const uploadFileRequest = (url, params) => {
  return instance({
    method: 'post',
    url,
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

const putRequest = (url, params) => {
  return instance({
    method: 'put',
    url,
    data: params,
    transformRequest: [function (data) {
      let ret = '';
      for (let item in data) {
        ret += encodeURIComponent(item) + '=' + encodeURIComponent(data[item]) + '&';
      }
      return ret;
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}

const deleteRequest = (url) => {
  return instance({
    method: 'delete',
    url
  })
}

const getRequest = (url) => {
  return instance({
    method: 'get',
    url
  })
}

let AXIOS = {
  post: postRequest,
  uploadFile: uploadFileRequest,
  put: putRequest,
  delete: deleteRequest,
  get: getRequest
}

export default AXIOS;

