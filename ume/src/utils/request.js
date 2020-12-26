import axios from 'axios'
import cookie from 'js-cookie'

const service = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 2000
})

// 拦截器
service.interceptors.request.use(
    config=>{
        console.log('拦截器执行了');
        if(cookie.get('ume_token')){
            config.headers['token'] = cookie.get('ume_token')
        }
        return config
    }
)

export default service