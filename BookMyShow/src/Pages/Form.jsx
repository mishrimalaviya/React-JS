import { useEffect, useState } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import "../CSS/index.css"; 


function F() {

    var { id } = useParams()
    console.log(id)


    var [obj, setobj] = useState({
        id: Date.now(),
        poster: "",
        nam: "",
        type: ""
    })
    console.log(obj)

    function val(e) {
        var value = e.target.value
        var name = e.target.name

        setobj({ ...obj, [name]: value })
    }
    console.log(obj)

    var [arr, setarray] = useState(JSON.parse(localStorage.getItem("data")) || [])
    var navigate = useNavigate()

    function sub(e) {
        e.preventDefault()
        var d2
        if (id) {
            d2 = arr.map((el) => {
                if (el.id == id) {
                    return obj
                }
                else {
                    return el
                }
            })

            setarray(d2)


        }
        else {

            setarray([...arr, obj])

        }
        setobj({
            id: "",
            poster: "",
            nam: "",
            type: ""
        })

        navigate('/')


    }
    console.log(arr)

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(arr))

    }, [arr])



    // aa edit exciting data 

    useEffect(() => {
        if (id) {
            let d1 = arr.find((el) => {
                if (el.id == id) {
                    return el
                }
            })

            // if (d1) {

            console.log(d1);
            setobj(d1)
            // }
        }


    }, [id, arr])


    return (
        <>
            <div className="container ">
                <div className="w-100 h-auto p-5 border border-1">
                    <h5 className="text-center pb-3">Enter the Movie</h5>
                    <form onSubmit={sub} className="d-flex">
                        <input placeholder="Enter Image" onChange={val} name="poster" value={obj.poster} className="form-control ms-3"></input>
                        <input placeholder="Enter the movie name" onChange={val} name="nam" value={obj.nam} className="form-control ms-3"></input>
                        <input placeholder="Enter the type of movie" onChange={val} name="type" value={obj.type} className="form-control ms-3"></input>
                        <button style={{ background: "rgb(248, 68, 100)" }} className="pt-2 text-light ms-4 pb-2 rounded-2 border-0 ps-4 pe-4 ">Submit</button>
                    </form>
                </div>
                <div className="w-100 border border-1 d-flex justify-content-between align-items-center" style={{
                    height: "500px", backgroundImage: `linear-gradient(to right,rgba(0,0,0,9),rgba(0,0,0,0.6)),url(${obj.poster})`, backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }} id="bg" >
                    <div className="w-75 h-100 m-auto d-flex  align-items-center">
                        <div className="h-75 border border border-1 rounded-4" style={{ width: "25%" }}>
                            <img src={obj.poster} className="w-100 h-100 rounded-4"></img>
                        </div>
                        <div className=" me-5 w-50 text-light ms-5 h-50" >
                            <h1>{obj.nam}</h1>
                            <div className="w-75  rounded p-2 ps-2  d-flex justify-content-start align-items-center mt-3" style={{ background: "rgb(51, 51, 51)" }} >
                                <i className="bi bi-star-fill" style={{ color: "rgb(248, 68, 100)" }}></i>
                                <h5 className="pt-2 ps-3">8.1/10 (2.6K Votes) </h5>
                                <button className="pt-2  ms-4 pb-2 rounded-2 border-0 ps-4 pe-4 "  type="button">Rate Now</button>
                                {/* tooltips start  */}
                                {/* <div className="toast-container position-fixed bottom-0 end-0 p-3">
                                    <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                                        <div className="toast-header">
                                           
                                                <strong className="me-auto">Bootstrap</strong>
                                                <small>11 mins ago</small>
                                                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                                        </div>
                                        <div className="toast-body">
                                            Hello, world! This is a toast message.
                                        </div>
                                    </div>
                                </div> */}

                                {/* tooltips close  */}
                            </div>
                            <p className="fs-5 pt-4">{obj.type}</p>

                            <button style={{ background: "rgb(248, 68, 100)", marginRight: "100px" }} className="pt-2 w-50 h-25 text-light mt-3 pb-2 rounded-2 border-0 ps-4 pe-4 ">Book Tickets</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default F
