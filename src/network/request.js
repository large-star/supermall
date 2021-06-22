import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL:'http://152.136.185.210:8000/api/w6',
    timeout:5000
  })

  //拦截请求
  instance.interceptors.request.use(config => {
    // console.log(config)
    $loading.show()
    return config
  },error => {
    console.log(error)
  })
  //拦截响应
  instance.interceptors.response.use(response => {
    // console.log(response)
    $loading.hide()
    return response
  },error => {
    console.log(error)
  })

  return instance(config)
}