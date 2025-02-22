import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addata, deletee, edit } from "../Features/Slice"

function Cr() {
    const [obj, setobj] = useState({
        id: Date.now(),
        task: ""
    })

    const dispatch = useDispatch()
    const st = useSelector((state) => {
        return state.re.student
    })

    const [upda, setupda] = useState(null)

    useEffect(() => {
        console.log(st)
        localStorage.setItem("data", JSON.stringify(st))
    }, [st])

    function d(e) {
        var value = e.target.value
        var name = e.target.name

        setobj({ ...obj, [name]: value })
    }
    console.log(obj)
    function add() {
        if (upda == null) {
            dispatch(addata(obj))

        }
        else
        {
            dispatch(edit(obj.task,upda.id))
        }
        setobj({
            task: ""
        })
    }

    function del(id) {
        dispatch(deletee(id))
    }

    function ed(id) {
        const e = st.filter((el, i) => {
            if (el.id == id) {
                return el
            }
        })
        setobj(e[0])
        setupda(e)
        // dispatch(edit(e))
    }
    return (
        <>

            <input placeholder="enter the task" onChange={d} name="task" value={obj.task}></input>
            <input type="submit" onClick={add}></input>

            {st.map((el, i) => {
                return <div key={i}>
                    <p>{el.task}</p>
                    <button onClick={() => { ed(el.id) }}>edit</button>
                    <button onClick={() => { del(el.id) }}>delete</button>
                </div>
            })}
        </>
    )
}
export default Cr