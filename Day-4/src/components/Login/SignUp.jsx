import { useState } from "react"
import "../../index.css";


function Login() {
    var [state, setstate] = useState(true)

    return (
        <div class=" border border-1 d-flex justify-content-center align-items-center mt-5 p-5 rounded-5 m-auto" style={{ height: "680px",width:"70%" , background:"  linear-gradient(rgb(248, 247, 247),#F0E9C5)"}}>
            <div class="w-50 h-100  p-5">
                <div class="w-25  border border-1 rounded-5 fs-5 d-flex justify-content-center align-items-center " style={{height:"50px",} } id="div1">
                    Crextio
                </div>
                {state ?

                    <div>
                        <h3 >Get Started </h3>
                        <p style={{fontSize:"13px"}}>Wecome to Crextio - Let's Create an Account</p>
                        <span style={{fontSize:"13px"}} class="ps-3 ">Email</span><br></br>
                        <input placeholder="Enter the email" class="form-control rounded-pill mt-2"></input><br></br>
                        <span style={{fontSize:"13px"}} class="ps-3 ">Password</span><br></br>
                        <input placeholder="Enter the Pasword" class="form-control rounded-pill mt-2" type="password"></input><br></br>
                        <button class="form-control btn rounded-pill" style={{background:"rgb(255, 216, 95)"}}>Submit</button>
                        <p onClick={() => setstate(false)} class="text-center pt-2" style={{cursor:"pointer"}}>Don't have an Account ? SignIn</p>
                       
                    </div> :
                    <div>
                        
                        <h3 class="text-center">Create an account </h3>
                        <p class="text-center" style={{fontSize:"13px"}}>Sign Up and get 30 day free trail</p>
                        <span style={{fontSize:"13px"}} class="ps-3 ">Full Name</span><br></br>
                        <input placeholder="Enter the Username" class="form-control rounded-pill mt-2"></input><br></br>
                        <span style={{fontSize:"13px"}} class="ps-3 ">Email</span><br></br>
                        <input placeholder="Enter the email" class="form-control rounded-pill mt-2"></input><br></br>
                        <span style={{fontSize:"13px"}} class="ps-3 ">Password</span><br></br>
                        <input placeholder="Enter the Pasword" class="form-control rounded-pill mt-2" type="password"></input><br></br>
                        <button class="form-control btn rounded-pill" style={{background:"rgb(255, 216, 95)"}}>Submit</button>
                        <p onClick={() => setstate(true)} class="text-center pt-2" style={{cursor:"pointer"}}>Already Have an account ? LogIn</p>
                    </div>}
            </div>
            <div class=" h-100  rounded-5" style={{ width: "48%"}}>
                <img src="https://cdn.prod.website-files.com/620cd0a0a71b604afcaa3acd/65b2c97030c708bbae48ba15_getty-images-Pxz75CRqvkM-unsplash.jpg" class="w-100 h-100 rounded-5"></img>
            </div>





        </div>
    )


}
export default Login