import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Se3 from "../Components/se3"
import Se4 from "../Components/se4"

function H() {
    var [state, setstate] = useState(JSON.parse(localStorage.getItem("data")) || [])

    console.log(state)

    function del(id) {
        var da = state.filter((el) => {
            if (el.id != id) {
                return el
            }
        })

        setstate(da)

    }
    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(state))
    }, [state])

    return (
        <>
            <section className="w-100  " style={{ height: "50px" }}>
                <div className="container  h-100 d-flex justify-content-between">
                    <div className="h-100 d-flex align-items-center">
                        <h4 className="pt-2 ">Recommended Movies</h4>
                    </div>
                    <div className="h-100  d-flex justify-content-between align-items-center">
                        <p style={{ color: "rgb(248, 68, 100)" }} className="pt-3 pe-3" >See All</p>
                    </div>
                </div>

            </section>
            <section className="w-100 " >
                <div className="container  d-flex justify-content-between algn-items-center flex-wrap">
                    {state.map((el) => {
                        return <>
                            <div style={{ width: "18%", height: "500px" }} className="rounded-2 mt-3" key={el.id}>
                                <div className="w-100 h-75 ">
                                    <img src={el.poster} className="w-100 h-100 rounded-2"></img>
                                </div>
                                <div className="w-100 h-25 ms-2">
                                    <h5 className="pt-3">{el.nam}</h5>
                                    <p className="text-secondary ">{el.type}</p>
                                    <Link to={`/form/${el.id}`}> <button className="btn ps-4 text-light pe-4 " style={{background:"rgb(248, 68, 100)"}}>Edit</button></Link>
                                    <button onClick={() => { del(el.id) }} className="btn ps-4 pe-4 ms-2" style={{background:"rgb(224, 224, 224)"}}>Delete</button>
                                </div>

                            </div>
                        </>
                    })}
                </div>

            </section>
            <Se3></Se3>
            <Se4></Se4>


        </>
    )
}
export default H