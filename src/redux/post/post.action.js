import axios from "axios"
import { AREA_POST_FAILURE, AREA_POST_REQUEST, AREA_POST_SUCCESS, GET_POST_FAILURE, GET_POST_REQUEST, GET_POST_SUCCESS, POST_CREATE_FAILURE, POST_CREATE_REQUEST, POST_CREATE_SUCCESS, SEARCH_POST_FAILURE, SEARCH_POST_REQUEST, SEARCH_POST_SUCCESS } from "./post.actionType"
import { api, API_BASE_URL } from "../../config/api"


export const createPostAction=(postData)=>async(dispatch)=>{
    dispatch({type:POST_CREATE_REQUEST})
      try {
        const {data} = await api.post(`/api/create-post`, postData.data)
        console.log(data)
        dispatch({type:POST_CREATE_SUCCESS, payload:data})
      } catch (error) {
        dispatch({type:POST_CREATE_FAILURE,payload:error})
      }
}


export const getAllPostAction=()=>async(dispatch)=>{
    dispatch({type:GET_POST_REQUEST})
      try {
        const {data} = await axios.get(`${API_BASE_URL}/get-posts`)
        console.log(data)
        dispatch({type:GET_POST_SUCCESS, payload:data})
      } catch (error) {
        dispatch({type:GET_POST_FAILURE,payload:error})
      }
}

export const searchPostAction=(query)=>async(dispatch)=>{
  dispatch({type:SEARCH_POST_REQUEST})
    try {
      const {data} = await axios.get(`${API_BASE_URL}/posts/search?query=${query}`)
      console.log(data)
      dispatch({type:SEARCH_POST_SUCCESS, payload:data})
    } catch (error) {
      dispatch({type:SEARCH_POST_FAILURE,payload:error})
    }
}

export const areaPostAction=(query)=>async(dispatch)=>{
  dispatch({type:AREA_POST_REQUEST})
    try {
      const {data} = await axios.get(`${API_BASE_URL}/posts/searcha?query=${query}`)
      console.log(data)
      dispatch({type:AREA_POST_SUCCESS, payload:data})
    } catch (error) {
      dispatch({type:AREA_POST_FAILURE,payload:error})
    }
}