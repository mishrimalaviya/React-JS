import { useEffect, useState } from "react"
import Swal from 'sweetalert2'
function UE() {
    var [arr, setarray] = useState(null)
    var [state, setstate] = useState(null)


    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setarray(res.products)
                console.log(res.products)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    function add() {
        setstate(state + 1)
        Swal.fire({
            position: "top-end",
            icon: "success",

            title: "Successfull Added to the card",
            showConfirmButton: false,
            timer: 1500
        });

    }


    return (
        <div>
            {/* <button onClick={()=>setstate(state+1)}>click</button> */}
            <h1 className="text-center pe-5">Total Added Items - {state}</h1>
            {arr == null ? <p>Loading</p> :
                <div className="w-100  d-flex justify-content-center align-items-center flex-wrap" style={{ height: "auto" }}>
                    {arr.map((el) => {
                        return <div className="w-25  p-3" style={{ height: "450px", boxShadow: "2px 2px 2px 2px" }}>
                            <div className="w-100 h-75 ">
                                <img src={el.thumbnail} alt={el.thumbnail} className="w-100 h-100" />
                            </div>
                            <div className="w-100 h-25  d-flex justify-content-center align-items-center flex-column">
                                <h5>{el.title}</h5>
                                <p className="fs-5">{el.price}</p>
                                <button className="btn border border-1" onClick={add}>Add to card</button>
                            </div>
                        </div>

                    })}
                </div>
            }

        </div>
    )
}

export default UE