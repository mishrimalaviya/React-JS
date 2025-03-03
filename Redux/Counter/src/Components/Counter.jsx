import { useDispatch, useSelector } from "react-redux"
import { decre, incre } from "../Features/Slice"

function Counter()
{
    var nu=useSelector((state)=>{
        return state.slic.cou
    })
    console.log(nu)

    var dis=useDispatch()

    return(
        <>
            <h1>counter</h1>
            <p>{nu}</p>
            <button onClick={()=>dis(incre())}>+</button>
            <button onClick={()=>dis(decre())}>-</button>

        </>
    )
}
export default Counter