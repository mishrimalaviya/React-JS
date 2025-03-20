import { Route, Routes } from "react-router"
import Sign from "../Components/Signup"
import Daskborad from "../Components/dashboard"
import Log from "../Components/Login"

function R()
{
    return(
        <>
            <Routes>
                <Route path="/" element={<Sign></Sign>}></Route>
                <Route path="/dasboard" element={<Daskborad></Daskborad>}></Route>
                <Route path="/login" element={<Log></Log>}></Route>
            </Routes>
        </>
    )
}
export default R