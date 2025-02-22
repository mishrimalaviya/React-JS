import { Link } from "react-router-dom"

function Na() {
    return (
        <>
            <div className="w-100 " style={{ height: "800px" }} id="ba">
                <section className="w-100 d-flex justify-content-center align-items-center" style={{ height: "13%" }}>
                    <div className=" h-100  p-3 " >
                        <img src='https://devsaidul.com/ui/dynamic/assets/images/logo/logo-1.svg' className="pe-4  h-100"></img>
                    </div>
                    <div className=" h-100 d-flex justify-content-center align-items-center p-5 ">
                        <Link to="/" className="pe-5 text-white text-decoration-none">Home <i class="bi bi-arrow-down"></i></Link>
                        <Link to="product" className="pe-5 text-white text-decoration-none">Pages <i class="bi bi-arrow-down"></i></Link>
                        <Link className="pe-5 text-white text-decoration-none">Services <i class="bi bi-arrow-down"></i></Link>
                        <Link className="pe-5 text-white text-decoration-none">Blog <i class="bi bi-arrow-down"></i></Link>
                        <Link className="pe-5 text-white text-decoration-none">Protfolia <i class="bi bi-arrow-down"></i></Link>
                        <Link className="pe-5 text-white text-decoration-none">Contact <i class="bi bi-arrow-down"></i></Link>
                    </div>
                    <div className="h-100  p-3 d-flex justify-content-center align-items-center  ">
                        <button className="btn text-secondary fw-bold">log in</button>
                        <button className="btn h-75 ms-3 ps-4 pe-4" id="butt">Get in Touch</button>
                    </div>
                </section>
                <section className="w-100  p-5 d-flex justify-content-center align-items-center" style={{ height: "87%" }}>
                    <div className="w-50 h-100  d-flex justify-content-center align-items-start flex-column ps-5" style={{ marginLeft: "6%" }}>
                        <h1 className="" style={{ fontSize: "65px", color: "rgb(204, 222, 255)" }}>Digital Marketing <br></br>For Your Business</h1>
                        <img src="https://devsaidul.com/ui/dynamic/assets/images/shep/text-shep-1.png"></img>
                        <p style={{ fontSize: "20px", color: "rgb(204, 222, 255)" }} className="pt-5">At Coalition Technologies, we tightly weave our website design
                            and search engineoptimization work to exceed our clients go als.


                        </p>
                        <div className="  d-flex justify-content-evenly align-items-center">
                            <button className="btn h-50" id="butt">  Free Trail Now</button>
                            <div className="w-50  h-50">
                                <img src="https://devsaidul.com/ui/dynamic/assets/images/hero/rating.webp" className="w-100 h-100"></img>
                            </div>
                        </div>
                    </div>
                    <div className="w-50 h-100  d-flex justify-content-center align-items-center">
                        <img src='https://devsaidul.com/ui/dynamic/assets/images/banner/home-1-hero-slider.webp' className="h-100 "></img>
                    </div>

                </section>
            </div>
            
        </>
    )
}
export default Na