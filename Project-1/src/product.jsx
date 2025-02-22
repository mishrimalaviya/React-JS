import { useState } from "react"

function Product() {
    var [state, setstate] = useState(true)
    var [img, setimg] = useState("")
    var [title, settitle] = useState("")
    var [price, setprice] = useState("")
    var [arr, setarray] = useState([])

    function data() {
        var obj = {
            img,
            title,
            price
        }
        setarray([...arr, obj])
        setimg("")
        settitle("")
        setprice("")

    }
    console.log(arr)
    return (
        <div>
            <div class="w-25  m-auto d-flex justify-content-evenly align-items-center" style={{ height: "60px" }}><button onClick={() => setstate(true)} class="btn border border-1 "> form</button>
                <button onClick={() => setstate(false)} class="btn border border-1">product</button></div>


            <div class="w-100   p-5 m-auto mt-5 d-flex justify-content-center align-items-center flex-wrap" style={{ height: "600px" }}>
                {state ?
                    <div class="w-25 m-auto " style={{ height: "700px" }}>
                        <h3>Form Page </h3>
                        <br></br>
                        <input placeholder="Enter the Image" class="form-control rounded-pill mt-2" onChange={(e) => setimg(e.target.value)} ></input><br></br>

                        <input placeholder="Enter the title" class="form-control rounded-pill mt-2" onChange={(e) => settitle(e.target.value)} ></input><br></br>
                        <input placeholder="Enter the price" class="form-control rounded-pill mt-2" onChange={(e) => setprice(e.target.value)}  ></input><br></br>
                        <button class="form-control btn rounded-pill" style={{ background: "rgb(255, 216, 95)" }} onClick={data}>Submit</button>
                        <p onClick={() => setstate(false)} class="text-center pt-2" style={{ cursor: "pointer" }}>Product Page</p>

                    </div> :
                    <div class="w-100 border border-1 d-flex justify-content-center align-items-center flex-wrap">
                        {
                            arr.map((el) => (
                                <>
                                    <div class="w-25 border border-1" style={{ height: "550px" }}>
                                        <div class="w-100 h-75 border border-1">
                                            <img src={el.img} class="w-100 h-100"></img>
                                        </div>
                                        <div class="text-center h-25 m-auto mt-3">
                                            <h5>{el.title}</h5>
                                            <p>₹{el.price}</p>
                                            <button class="btn border border-1">Add To Card</button>
                                        </div>
                                    </div>
                                </>
                            ))
                        }
                    </div>
                }
            </div>


        </div>
    )
}
export default Product