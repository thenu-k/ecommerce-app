import {createSlice} from "@reduxjs/toolkit"

export const mainSlice = createSlice({
    name: "mainSlice",
    initialState:{
        isMobile: null,
        cart: false,
        displayCredentials:false,

        //Metadata
        metaInfo: {
            registerUserURL : 'http://localhost/registerUser'
        },

        //Login or register
        isRegister: true
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
        setIsRegister: (state, action)=>{
            action.payload
                ?   state.isRegister = true
                :   state.isRegister = false
        }
    }
})

//Exports
export const {setScreenType, toggleCredentials, setIsRegister} = mainSlice.actions
export default mainSlice.reducer;