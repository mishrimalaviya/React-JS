import { Link } from "react-router-dom"
import N1 from "./nav1"
import im from '../Image/loko.png'

function N() {
    return (
        <>
            <header className=" w-100 " style={{ height: "80px" }}>
                <div className="container w-100 h-100  d-flex  justify-content-between align-items-center">
                    <div className="  h-100 d-flex  align-items-center" style={{ width: "60%" }}>
                        <div className="d-flex   justify-content-center align-items-center w-25 p-4  h-100 ">
                            <Link to="/" ><img src={im} className="w-100 h-100"></img></Link>
                        </div>
                        <div className="w-75 h-100 d-flex  justify-content-between align-items-center">
                            <i class="bi bi-search" style={{ position: "relative", left: "30px" }}></i>
                            <input className="form-control ps-5" placeholder="Search for Movies,Events,Plays,Sports and Activities"></input>
                        </div>
                    </div>


                    <div className="p-3   h-100 d-flex  justify-content-between align-items-center">
                        <div className=" h-100 d-flex  justify-content-center align-items-center me-2 ">
                            <select className="form-select border-0">
                                <option selected>Rajkot</option>
                                <option value="1">Bhavnagar</option>
                                <option value="2">Raichur</option>
                                <option value="3">Pune</option>
                                <option value="4">Mumbai</option>

                            </select>
                        </div>
                        <div className="  d-flex  justify-content-center align-items-center">
                            <button className="h-100 rounded-2 border-0 " style={{ background: "rgb(248, 68, 100)" }}><Link to='form' style={{ textDecoration: "none", fontSize: "14px" }} className="text-light ps-2 pe-2 ">Add Movie</Link></button>
                        </div>
                        {/* <i className="bi bi-list fs-3 ps-4 pb-1"></i> */}
                        <button className="  rounded-2 border-0 ms-2" style={{ background: "rgb(248, 68, 100)" }}><Link to='movie' style={{ textDecoration: "none", fontSize: "14px" }} className="text-light ps-2 pe-2 ">Movie</Link></button>
                    </div>
                </div>
            </header>
            <N1></N1>
        </>
    )
}
export default N