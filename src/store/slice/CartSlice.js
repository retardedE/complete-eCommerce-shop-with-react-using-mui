import { createSlice } from "@reduxjs/toolkit";
const initialState={
    list:[]
}
const CartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        removeAll:(state)=>{
            state.list = []
        },
        removeItem:(state,action)=>{
            state.list=state.list.filter((e)=>{
                if(e.id==action.payload){
                    e.quantity=e.quantity-1
                    if(e.quantity===0){
                        return false
                    }
                    return e
                }
                return e
            })
        },
        addItem:(state,action)=>{
            let add=false
            state.list = state.list.map((e) => {
              if (e.id == action.payload.id) {
                add = true;
                e.quantity = e.quantity + 1;
                return e;
              }
              return e;
            }) 
            if(!add){
                state.list.push({...action.payload,quantity:1});
            }
            
            
        }
    }
})
export const {addItem,removeItem,removeAll}=CartSlice.actions
export default CartSlice.reducer