import Form from "./Form"
import { useState } from "react"
import Product from "./Product"
function Mix()
{
    var [st,setst]=useState(true)

    var [state, setstate] = useState({
        username: "",
        email: "",
        password: ""
    })

    var [obj, setobj] = useState({
        set: true,
        set1: true,
        set2: true
    })


    function da(e) {
        var value = e.target.value
        var name = e.target.name

        console.log(name)
        setstate({ ...state, [name]: value })

    }
    console.log(state)

    function blu(e) {
        var name = e.target.name
        if (name == "username") {
            console.log(name)
            var username = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
            if (username.test(state.username) == false) {
                setobj({ ...obj, set: false })
            }
        }

        if (name == "email") {
            console.log(name)
            var email = /^[^@]+@[^@]+\.[^@]+$/
            if (email.test(state.email) == false) {
                setobj({ ...obj, set1: false })
            }

        }

        if(name=="password")
        {
            var password=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
            if(password.test(state.password)==false)
            {
                setobj({...obj,set2:false})
            }
        }
    }
    console.log(obj.set, obj.set1)
    function focu(e)
    {
     var name = e.target.name
       if(name=="username")
       {
            setobj({...obj,set:true})
       }

       if(name=="email")
       {
        setobj({...obj,set1:true})
       }

       if(name=="password")
       {
        setobj({...obj,set2:true})
       }

    }
    console.log(obj)
    // aa data submit kare che jyare submit par click karso ne tyare 
    var [arr,setarray]=useState([])
    function sub(e)
    {
        e.preventDefault()

        if(obj.set==true && obj.set1==true && obj.set2==true)
        {
            setarray([...arr,state])
        }
        setstate({
            username:"",
            email:"",
            password:""
        })
       

    }
    console.log(state)

    console.log(arr)

    return(
        <>
            <button onClick={()=>{setst(true)}}>form</button>
            <button onClick={()=>{setst(false)}}>product</button>
            {st==true?<Form focu={focu} blu={blu} da={da} state={state} obj={obj} sub={sub}></Form>:<Product arr={arr}></Product>}
        </>
    )
}
export default Mix

// aama submit karu tya pachi input empty thai javu joi ne regex ma email thi bakki che aaju 