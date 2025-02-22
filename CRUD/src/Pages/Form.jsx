import {useState,useEffect} from 'react'
import {v4} from 'uuid'
function Form()
{
    var [state,setstate]=useState({
        url:"",
        title:"",
        price:"",
        id : v4()
    })

    console.log(state.id)
    function dat(e)
    {
        var value = e.target.value
        var name = e.target.name

        setstate({...state,[name]:value})
    }
    console.log(state)
    var [arr,setarray]=useState(JSON.parse(localStorage.getItem("data")) || [])
    function s(e)
    {
        e.preventDefault()
        console.log(state)
        setarray([...arr,state])

        setstate({
            url:"",
            title:"",
            price:"",
            id:v4()
        })
    }
    console.log(arr)

    useEffect(()=>{
        localStorage.setItem("data",JSON.stringify(arr))
    },[arr])

    

    return(
        <>
            <form onSubmit={s}>
                <input placeholder="enter the url" onChange={dat} name='url' value={state.url}></input>
                <input placeholder="enter the title" onChange={dat} name='title' value={state.title}></input>
                <input placeholder="enter the price" onChange={dat} name='price' value={state.price}></input>
                <input type="submit"></input>
            </form>
        </>
    )
}
export default Form