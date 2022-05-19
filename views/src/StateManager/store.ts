import {configureStore} from '@reduxjs/toolkit'
import isMobile from './mainSlice'
import displayCredentials from './mainSlice'
import metaInfo from './mainSlice'
import isRegister from './mainSlice'

//Store type

export default configureStore({
    reducer: {
       isMobile: isMobile,
       displayCredentials: displayCredentials,
       metaInfo: metaInfo,
       isRegister: isRegister
    }
})