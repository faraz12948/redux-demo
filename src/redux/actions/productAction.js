import { actionType } from "../contant/actionType"


export const setProducts = products =>{
    return {
        type:actionType.SET_PRODUCTS,
        payload:products,
    }

};