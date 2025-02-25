import {configureStore} from '@reduxjs/toolkit'
import  slic  from '../Features/Slice'
export const sto=configureStore({
    reducer :{
        slic:slic
    }
})
