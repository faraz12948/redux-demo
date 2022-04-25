import { actionType } from "../contant/actionType"

const ititState = {
    products:[
      
    ]
}

export const productReducers= (state=ititState,{type,payload})=>{
     switch(type){
         case actionType.SET_PRODUCTS:
             return {...state,products:payload};
        default:
            return state;
     }
}