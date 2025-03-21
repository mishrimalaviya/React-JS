
import {configureStore} from '@reduxjs/toolkit'
import  slic  from '../Features/slice'
export const sto=configureStore({
    reducer :{
        slic:slic
    }
})
