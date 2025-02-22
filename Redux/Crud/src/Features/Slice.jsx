import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const sli = createSlice({
    name: "crud",
    initialState: { student: JSON.parse(localStorage.getItem("data")) || [] },
    reducers: {
        addata: (state, actions) => {
            state.student.push(actions.payload)
           localStorage.setItem("data",JSON.stringify(state.student))

        },
        deletee: (state, action) => {
            console.log(action.payload)
            const s =  state.student.filter((el) => {
                if (el.id != action.payload) {
                    return  el
                }
            })


            state.student=s
            console.log(s)
           localStorage.setItem("data",JSON.stringify(state.student))


        },
        edit:(state,action)=>{
           state.student.forEach((el,i)=>{
            if(el.id==action.payload.id)
            {
                 el.task=action.payload.task
            }
           })
           localStorage.setItem("data",JSON.stringify(state.student))
        }
    }
})

export const { addata, deletee ,edit} = sli.actions
export default sli.reducer