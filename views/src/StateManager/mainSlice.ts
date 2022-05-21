import {createSlice} from "@reduxjs/toolkit"

//types
interface InitialState   {
    isMobile: boolean | null,
    cart: boolean,
    displayCredentials: boolean,
    metaInfo: any,
    isRegister: boolean
}

interface ICartActions {
    add?: boolean, remove?: boolean, qty: number, removeAll?: boolean, itemDetails: object
}

//Slice
export const mainSlice = createSlice({
    name: "mainSlice",
    initialState:{
        isMobile: true,
        cart: false,
        displayCredentials:false,

        //Metadata
        metaInfo: {
            registerUserURL : 'http://localhost/registerUser'
        },

        //Login or register
        isRegister: true,

        //Cart Items
        cartItems: []

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
        },

        //Cart actions
        cartActions: (state, action) => {
            const parsedActions:ICartActions = action.payload
            if(parsedActions.add===true){
                for(let count = 0; count< parsedActions.qty; count++){
                    // @ts-ignore
                    state.cartItems.push({item: parsedActions.itemDetails, qty: parsedActions.qty})
                }
            }
        }
    }
})

//Exports
export const {setScreenType, toggleCredentials, setIsRegister, cartActions} = mainSlice.actions
export default mainSlice.reducer;