import { Routes , Route,  } from "react-router-dom"
import Home from "../Pages/Home "
import Pr from "../Pages/Product"
function R()
{
    return(
        <>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="product" element={<Pr></Pr>}></Route>
            </Routes>
        </>
    )
}
export default R