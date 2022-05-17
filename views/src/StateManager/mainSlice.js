import {createSlice} from "@reduxjs/toolkit"

export const mainSlice = createSlice({
    name: "mainSlice",
    initialState:{
        isMobile: false,
        cart: false,
        displayCredentials:false,

        //Metadata
        metaInfo: {
            registerUserURL : 'http://localhost/registerUser'
        }
    },
    reducers:{
        setScreenType: (state, action)=>{
            action.payload
                ? state.isMobile = true
                : state.isMobile = false
        },
        toggleCredentials: (state)=>{
            state.displayCredentials
                ? state.displayCredentials = false
                : state.displayCredentials = true
        },
    }
})

//Exports
export const {setScreenType, toggleCredentials} = mainSlice.actions
export default mainSlice.reducer;