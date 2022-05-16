import {configureStore} from '@reduxjs/toolkit'
import isMobile from './mainSlice'
import displayCredentials from './mainSlice'

export default configureStore({
    reducer: {
       isMobile: isMobile,
       displayCredentials: displayCredentials
    }
})