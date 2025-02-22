import { useState } from "react"
import Swal from 'sweetalert2'

function Login() {
    var [state, setstate] = useState(true)
    var [usename, setusename] = useState("")
    var [email, emails] = useState("")
    var [password, passwords] = useState("")
    
    var [checkemail, setemail] = useState("")
    var [checkpassword, setpassword] = useState("")
    var [arr, array] = useState([])

    function data() {
        var obj = {
            username: usename,
            email: email,
            password: password
        }
        array([...arr, obj])
        setusename("")
        emails("")
        passwords("")

    }

    function check() {
        arr.filter((el, i) => {
            if (el.email == checkemail && el.password == checkpassword) {
                Swal.fire("SweetAlert2 is working!");
                setemail("")
                setpassword("")

            }
            else {
                if (el.email != checkemail) {
                    alert("your email is wrong")
                }
                else if (el.password != checkpassword) {
                    alert("your password is wrong ")
                }
            }

        })
    }
    return (
        <div className=" border border-1 d-flex justify-content-center align-items-center mt-5 p-5 rounded-5 m-auto" style={{ height: "680px", width: "70%", background: "  linear-gradient(rgb(248, 247, 247),#F0E9C5)" }}>

            <div className="w-50 h-100  p-5">
                <div className="w-25  border border-1 rounded-5 fs-5 d-flex justify-content-center align-items-center " style={{ height: "50px", }} id="div1">
                    Crextio
                </div>
                {state ?

                    <div>
                        <h3>Get Started </h3>
                        <p style={{ fontSize: "13px"}}>Wecome to Crextio - Let's Creat`e an Account</p>
                        <span style={{ fontSize: "13px" }} className="ps-3 ">Email</span><br></br>
                        <input value={checkemail} placeholder="Enter the email" className="form-control rounded-pill mt-2" onChange={(e) => setemail(e.target.value)}></input><br></br>
                        <span style={{ fontSize: "13px" }} className="ps-3 ">Password</span><br></br>
                        <input value={checkpassword} placeholder="Enter the Pasword" className="form-control rounded-pill mt-2" type="password" onChange={(e) => setpassword(e.target.value)}></input><br></br>
                        <button className="form-control btn rounded-pill" style={{ background: "rgb(255, 216, 95)" }} onClick={check}>Submit</button>
                        <p onClick={() => setstate(false)} className="text-center pt-2" style={{ cursor: "pointer" }}>Don't have an Account ? SignIn</p>

                    </div> :
                    <div>
                        <h3 className="text-center">Create an account </h3>
                        <p className="text-center" style={{ fontSize: "13px" }}>Sign Up and get 30 day free trail</p>
                        <span style={{ fontSize: "13px" }} className="ps-3 ">Full Name</span><br></br>
                        <input value={usename} placeholder="Enter the Username" className="form-control rounded-pill mt-2" onChange={(e) => setusename(e.target.value)}></input><br></br>
                        <span style={{ fontSize: "13px" }} className="ps-3 ">Email</span><br></br>
                        <input value={email} placeholder="Enter the email" className="form-control rounded-pill mt-2" onChange={(e) => emails(e.target.value)}></input><br></br>
                        <span style={{ fontSize: "13px" }} className="ps-3 ">Password</span><br></br>
                        <input value={password} placeholder="Enter the Pasword" className="form-control rounded-pill mt-2" type="password" onChange={(e) => passwords(e.target.value)}></input><br></br>
                        <button className="form-control btn rounded-pill" style={{ background: "rgb(255, 216, 95)" }} onClick={data}>Submit</button>
                        <p onClick={() => setstate(true)} className="text-center pt-2" style={{ cursor: "pointer" }}>Already Have an account ? LogIn</p>
                    </div>}
            </div>
            <div className=" h-100  rounded-5" style={{ width: "48%" }}>
                <img src="https://cdn.prod.website-files.com/620cd0a0a71b604afcaa3acd/65b2c97030c708bbae48ba15_getty-images-Pxz75CRqvkM-unsplash.jpg" className="w-100 h-100 rounded-5"></img>
            </div>
        </div>



    )
}
export default Login