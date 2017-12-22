import axios from './../axios/index'
// 为给定 ID 的 user 创建请求
export default function Login(phone="", password="") {
    axios.get('/login/cellphone', {
        params: {
            phone: phone,
            password: password
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
