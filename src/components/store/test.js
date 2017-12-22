import axios from './../axios/index'
// 为给定 ID 的 user 创建请求
export default function getData() {
    axios.get('/search', {
        params: {
            keywords: '海阔天空'
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
