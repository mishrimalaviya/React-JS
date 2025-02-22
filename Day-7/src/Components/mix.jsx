import { useState } from "react"
import Form from "./Form"
import Product from "./Product"
function Mix()
{
    var [s,setse]=useState(true)
    var [state, setstate] = useState({
        image: "",
        title: "",
        price: ""

    })

    var [array,setarray]=useState([])

    function val(e) {
        //  var v= setstate(e.target.value,e.target.name)
        // var {name ,value} =e.target
        var name = e.target.name
        var value = e.target.value
        console.log(name, value)

        setstate({...state,[name]:value})
    }

    console.log(state)

    function formhandle(e) {
        e.preventDefault()
        setarray([...array,state])

        setstate({
            image: "",
            title: "",
            price: ""
        })
    }
    console.log(array)
    return(
        <div>
            <button onClick={()=>{setse(true)}}>form</button>
            <button onClick={()=>{setse(false)}}>Product</button>

            {s?<Form val={val} formhandle={formhandle} state={state}></Form>:<Product arr={array}></Product>}            
        </div>
    )

} 
export default Mix