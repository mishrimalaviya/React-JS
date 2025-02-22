import {configureStore} from '@reduxjs/toolkit'
import  sli  from '../Features/Slice'
export const stor=configureStore({
    reducer:{
        re:sli
    }
})