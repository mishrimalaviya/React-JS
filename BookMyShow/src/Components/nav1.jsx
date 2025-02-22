import { Link } from "react-router-dom"

function N1()
{
    return(
        <>
           <header className="w-100  " style={{height:"50px" , background:"rgb(245, 245, 245)"}}>
                <div className="container  h-100 d-flex justify-content-between">
                    <div className="w-50 h-100 pt-2 me-5" style={{fontSize:"14px"}} >
                        <ul className="nav h-100">
                        <li className="nav-item "><Link className="nav-link text-dark" >Movies</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark" >Steams</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark" >Events</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark" >Plays</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark" >Sports</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark" >Activites</Link></li>
                        </ul>
                    </div>
                    <div className=" h-100  pt-2" style={{fontSize:"14px"}}>
                        <ul className="nav">
                        <li className="nav-item"><Link className="nav-link text-dark" >ListYourShow</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark" >Corporates</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark" >Offers</Link></li>
                        <li className="nav-item"><Link className="nav-link text-dark" >Gift Cards</Link></li>
                        
                        </ul>
                    </div>
                </div>
           </header>
        </>
    )
}
export default N1