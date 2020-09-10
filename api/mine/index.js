import request from '../../utils/http.js';
export  const getUserList = ()=>{
    return request.get("/find_user").then((res)=>{
        return res
    })
}
