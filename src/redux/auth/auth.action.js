import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS }
 from "./auth.actionType"
import { API_BASE_URL } from "../../config/api"

export const loginUserAction = (loginData)=> async(dispatch)=>{
    dispatch({type:LOGIN_REQUEST})
try {
   const {data} = await axios.post(`${API_BASE_URL}/auth/signin`, loginData.data)
   console.log(data)

   if(data.token){
       localStorage.setItem("jwt",data.token)
   }
    dispatch({type:LOGIN_SUCCESS,payload:data.token})

} catch (error) {
   console.log("error....." ,error)
   dispatch({type:LOGIN_FAILURE,payload:error})
   
}
}

export const registerUserAction = (loginData)=> async(dispatch)=>{



dispatch({type:REGISTER_REQUEST})
try {
const {data} = await axios.post(`${API_BASE_URL}/auth/signup`, loginData.data)
console.log(data)
 
if(data.token){

  localStorage.setItem("jwt",data.token)
}
dispatch({type:REGISTER_SUCCESS,payload:data.token})

} catch (error) {
console.log("error....." ,error)
dispatch({type:REGISTER_FAILURE,payload:error})

}
}