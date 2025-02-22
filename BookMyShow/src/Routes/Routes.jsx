import H from '../Pages/Home'
import F from '../Pages/Form'
import Fss from '../Components/FSS'
import { Routes , Route, Router } from "react-router-dom"


function R()
{
    return(
        <>
           <Routes>
                <Route path='/' element={<H></H>}></Route>
                <Route path='/form' element={<F></F>}></Route>
                <Route path='/form/:id' element={<F></F>}></Route>
                <Route path='movie' element={<Fss></Fss>}></Route>
           </Routes>
        </>
    )
}
export default R