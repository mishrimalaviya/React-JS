    import {useState,useEffect} from 'react'
    import { Link } from 'react-router'
    function Product()
    {
        var [state,setstate]=useState(JSON.parse(localStorage.getItem("data")) || [])
        console.log(state)

        useEffect(()=>{
            localStorage.setItem("data",JSON.stringify(state))
        },[state])

        function handleDelete(id)
        {
            var de=state.filter((el)=>{
                if(el.id!=id)
                {
                    return el
                }
            })

            setstate(de)
        }

        return(
            <>
                {state .map((el)=>{
                    return <>
                        <br></br><br></br>
                        <div key={el.id}>
                            <img src={el.url} width={"100px"} height={"100px"} ></img>
                            <p>title: {el.title}</p>
                            <p>price :{el.price}</p>
                            <button onClick={()=>handleDelete(el.id)}>delete</button>
                            <Link to={`/product/edit/${el.id}`}><button>edit</button></Link>
                            {console.log(el.id)}
                        </div>
                    </>
                })}
            </>
        )   
    }
    export default Product