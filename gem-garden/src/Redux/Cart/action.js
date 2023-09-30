import axios from "axios"
import { GET_REQUEST, GET_REQUEST_FAILURE, GET_REQUEST_SUCCESS } from "./actionType"

export const getUser = (id)=> (dispatch)=>{
    dispatch({type: GET_REQUEST})
    let data = axios.get(`https://gem-gardern-mock-api.onrender.com/users/${id}`).then((res)=>{
        dispatch({type: GET_REQUEST_SUCCESS, payload:res.data})
    }).catch((err)=> dispatch({type: GET_REQUEST_FAILURE}))
    return data 
}