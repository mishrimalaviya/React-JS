import { useState , useEffect } from "react";
function D()
{
    var [state,setState]=useState(true);
    function handleAPI(){
      setState(!state)
    }
  
    const [arr,setArr]=useState([]);
    useEffect(()=>{
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((res)=>{
          return res.json()
        })
        .then((res)=>{
          setArr(res.message)
          console.log(res);
        })
        .catch((err)=>{
          console.log(err);
        })
    },[state])
    
    return(
        <>
        <h1>Dog API</h1>
        <div >
        <div >
        <img src={arr} alt="image"  />
        </div>
        <button onClick={handleAPI} >Change</button>
        </div>
        </>
    )
    
}
export default D