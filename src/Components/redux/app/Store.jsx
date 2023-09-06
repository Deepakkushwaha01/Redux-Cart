import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Feature/Slice";



export const store=configureStore({
    reducer:{
    allcart: CartSlice
    }
})

