import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

 
export const store = configureStore({
   /* Reducer can only update the value in side the store (refer diagram).*/ 
   /* Reducer key is the predefined key used here so it is inevitable */
   /* this object can hold more than one reducer */
    reducer:{
        counter: counterSlice
    }
})

