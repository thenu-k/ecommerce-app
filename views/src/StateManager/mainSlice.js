import {createSlice} from "@reduxjs/toolkit"

export const mainSlice = createSlice({
    name: "mainSlice",
    initialState:{
        isMobile: null
    },
    reducers:{
        setScreenType: (state, action)=>{
            action.payload
                ? state.isMobile = true
                : state.isMobile = false
        }
    }
})

//Exports
export const {setScreenType} = mainSlice.actions
export default mainSlice.reducer;