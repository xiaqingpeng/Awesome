import  {GET_USER_INFO}  from './actionType'
import {  getUserList } from '../../../api/home/index'
export  const  getUserInfo =(params,callback)=>{
    return async(dispatch)=>{
        // let data = await getUserList()
        callback&&callback(params)
        dispatch({
            type:GET_USER_INFO,
            payload:params
        })
    }
}
