import { useState } from "react"

function Form()
{
    var [state,setstate]=useState({
        username:"",
        name:"",
        skills:[""]
    })
    // aa function chene jyare add nu button click kar tyare aa input tag ne add karse skiils array ni andr 
    function add(e)
    {
        e.preventDefault()
        setstate({...state,skills :[...state.skills,""] })
    }
    console.log(state)



    return(
        <>
            <form>
                <input placeholder="enter the username" ></input>
                <input placeholder="name"></input>
                <button onClick={add} >add</button>
                {state.skills.map((el,i)=>{
                   return <input placeholder="skills1" name="skills"></input>
                })}

            </form>
        </>
    )
}
export default Form

// new array add kar aamathi j 1 index ma j added thai che direct aa solve ne pela input che aani value store obj ma ne skills ni value bhi store object ni andr array ma 