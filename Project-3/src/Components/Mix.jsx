import Form from "./Form"
import { useState } from "react"
import Product from "./Product"

function Mix()
{
    var [state, setstate] = useState({
        url: "",
        title: "",
        description: "",
        price: ""
    })

    function d(e) {
        var value = e.target.value
        var name = e.target.name

        setstate({ ...state, [name]: value })
    }

    console.log(state)

    var [se, setset] = useState({
        set1: true,
        set2: true,
        set3: true,
        set4: true
    })
    function blu(e) {
        var name = e.target.name
        var value = e.target.value
        if (name == "url") {
            var url = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/

            if (url.test(state.url) == false) {
                setset({ ...se, set1: false })
            }
        }

        if (name == "title") {
            if (value.length >= 0 && value.length < 5) {
                setset({ ...se, set2: false })
            }
        }

        if (name == "description") {
            if (value == "") {
                setset({ ...se, set3: false })
            }
        }

        if (name == "price") {
            if (value == "") {
                setset({ ...se, set4: false })
                console.log("empty")
            }

        }


    }
    console.log(se.set1)
    console.log(se.set2)
    console.log(se.set3)
    console.log(se.set4)

    function focu(e) {
        var name = e.target.name
        var value = e.target.value

        if (name == "url") {
            setset({ ...se, set1: true })
        }
        if (name == "title") {
            setset({ ...se, set2: true })
        }
        if (name == "description") {
            // if (value.length < 0) {
                setset({ ...se, set3: true })
            // }
        }
        if (name == "price") {
            // if (value.length < 0) {
                setset({ ...se, set4: true })
            // }
        }
    }

    var [arr, setarray] = useState([])

    function data(e) {
        e.preventDefault()
        if (se.set1 == true && se.set2 == true && se.set3 == true) {
            setarray([...arr, state])
        }

        setstate({
            url:"",
            title:"",
            description:"",
            price:""
        })

    }
    console.log(arr)

    var [s,sets]=useState(true)
    return(
        <>
            <button onClick={()=>{sets(true)}}>Form</button>
            <button onClick={()=>{sets(false)}}>product</button>

            {s==true?<Form data={data} focu={focu} blu={blu} d={d} se={se} state={state}></Form>:<Product arr={arr}></Product>}
        </>
    )
}

export default Mix