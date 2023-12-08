import { createSlice } from "@reduxjs/toolkit"


/* the create slice is use to define this as a slice file, And the slice file will help to create action and reducer */
export const counteSlice = createSlice({
    name: 'counterApp',
    initialState: {
        value: 0
    },

    /* Actions are created inside the reducers as object. Reducers and reducer both are different*/
    reducers: {
        /* logics to update */

        /* function to increment */
        increment:(state, action)=>{
          state.value+=action.payload
        },

        /* function to decrement */
        decrement: (state, action)=>{
            state.value-=action.payload
        },

        /* function to reset */
        reset: (state)=>{
            state.value = 0
        }
    }
})

// seperately exporting these functions

/* Action is required by component inorder to update state */
export const{increment, decrement, reset} = counteSlice.actions

/* Reducer is required to change the state value */
export default counteSlice.reducer