import { GET_REQUEST, GET_REQUEST_FAILURE, GET_REQUEST_SUCCESS, PATCH_CART_REQUEST_SUCCESS, PATCH_ORDER_REQUEST_SUCCESS } from "./actionType"

const initState = {
    id: 0,
    name: "",
    orders: [],
    cart: [],
    address:"",
    isLoading:false,
    isErr: false
  }

export const reducer = (state= initState, {type,payload})=>{
    switch(type){
        case GET_REQUEST: 
            return{
                ...state,
                isLoading:true
            }
        case GET_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading:false,
                id: payload.id,
                name: payload.name,
                orders: payload.orders,
                cart: payload.cart,
                address: payload.address
            }
        case GET_REQUEST_FAILURE:
            return{
                ...state,
                isLoading:false,
                isErr: true
            }
        case PATCH_CART_REQUEST_SUCCESS:
            return{
                ...state,
                isLoading:false,
                cart: payload,
            }
        case PATCH_ORDER_REQUEST_SUCCESS:
            return {
                ...state,
                isLoading:false,
                orders:payload
            }
        default: return state
    }
}