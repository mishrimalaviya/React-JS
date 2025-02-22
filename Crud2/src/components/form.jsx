import { useEffect, useState } from "react"

function Form() {
    var [state, setstate] = useState({
        id: Date.now(),
        img: "",
        title: "",
        price: "",
    })

    function data(e) {
        var value = e.target.value
        var name = e.target.name

        setstate({ ...state, [name]: value })
    }


    var [arr, setarray] = useState(JSON.parse(localStorage.getItem("datas")) || [])

    function hansubmit(e) {
        e.preventDefault()

        var d1 = arr.map((el, i) => {
            if (el.id == state.id) {
                return state
            }
            else {

                return setarray([...arr, state])
            } 
            // aama chene condition pela check karse ke state.id ee null no hoi / means id hoi toh edit ni andr jase arr loop karse ne check karse ke arrni id 
        })

        setarray(d1)


        setstate({
            img: "",
            title: "",
            price: ""
        })

    }
    console.log(arr)

    function de(id) {
        var d = arr.filter((el) => {
            return el.id != id


        })

        setarray(d)
    }

    function edi(id) {
        var d = arr.find((el) => {
            return el.id == id

        })
        setstate(d)
        console.log(d)
    }


    useEffect(() => {
        localStorage.setItem("datas", JSON.stringify(arr))
    }, [arr])



    return (
        <>
            <form onSubmit={hansubmit}>
                <input placeholder="enter the img" onChange={data} name='img' value={state.img}></input>
                <input placeholder="enter the title" onChange={data} name="title" value={state.title} ></input>
                <input placeholder="enter the price" onChange={data} name="price" value={state.price}></input>
                <input type="submit"></input>
            </form>

            <table border="1" width="40%">

                <tr>
                    <th>Id</th>
                    <th>image</th>
                    <th>title</th>
                    <th>price</th>

                </tr>
                <tbody>
                    {arr.map((el, i) => {
                        return <>
                            <tr key={el.id} >
                                <td>{el.id}</td>
                                <td><img src={el.img}></img></td>
                                <td>{el.title}</td>
                                <td>{el.price}</td>
                                <td><button onClick={() => { edi(el.id) }}>edit</button></td>
                                <td><button onClick={() => { de(el.id) }}>delete</button></td>
                            </tr>
                        </>
                    })}
                </tbody>
            </table>
        </>
    )
}
export default Form