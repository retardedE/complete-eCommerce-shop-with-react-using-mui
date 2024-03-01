import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from "./slice/CartSlice";
const store = configureStore({
    reducer:{
        cart:CartSliceReducer
    }
})
export default store