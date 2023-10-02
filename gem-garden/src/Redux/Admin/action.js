import axios from "axios"
import { ADMIN_DELETE_REQUEST, ADMIN_EDIT_REQUEST } from "./actionTypes"
import { GET_PRODUCT_FAILURE } from "../Product/actionTypes"

export const editProduct = (id, data) => (dispatch) => {

    return axios.patch(`https://gem-gardern-mock-api.onrender.com/products/${id}`,data)
    .then((res)=>{
        console.log(res);
        dispatch({type: ADMIN_EDIT_REQUEST, })
    })
    .catch((res)=>[
        dispatch({type: GET_PRODUCT_FAILURE})
    ])
}

export const deleteProduct = (id) => (dispatch) => {

    return axios.delete(`https://gem-gardern-mock-api.onrender.com/products/${id}`)
    .then((res)=>{
        console.log(res);

        dispatch({type: ADMIN_DELETE_REQUEST, payload: id})


    })
    .catch((res)=>[
        dispatch({type: GET_PRODUCT_FAILURE})
    ])
}