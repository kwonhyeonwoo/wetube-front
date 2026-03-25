import axios from "axios";

export const api = axios.create({
    baseURL:"http://localhost:4000",
    headers:{
        "Content-Type":"application/json"
    },
    // 쿠키를 포함하여 요청을 보냄
    withCredentials:true,
});

api.interceptors.response.use(
    (response)=>response,
    (error)=>{
        if(error.response?.status === 401){
            console.log('세션이 만료 되었습니다.')
        };
        return Promise.reject(error);
    }
)