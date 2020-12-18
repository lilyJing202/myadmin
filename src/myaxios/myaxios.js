import axios from 'axios';
// 配置基本的url
const instance = axios.create({
    baseURL:'http://linweiqin.cn:8001/',
});
// 响应器的拦截
instance.interceptors.response.use(
    function(response){
        return response.data;
    },
    function(error){
        return Promise.reject(error);
    }
);
export default instance;