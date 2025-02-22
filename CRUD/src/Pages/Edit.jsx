import { useEffect, useState } from "react"
import { v4 } from "uuid"
import { useParams } from "react-router"

function Edit() {

    var [data, setdata] = useState(JSON.parse(localStorage.getItem("data")) || [])

    var [sta,setstate]=useState({
        url:"",
        title:"",
        price:"",
        id:v4()
    })

    // getting id from the url 
    var id =useParams() 

    console.log(data)
    console.log(id)


    // aagar id nd data bei same hoi means jeni par click kariyu aa aani id nd data mathi je id hoi ee same ho toh ee state ma set thai ja aani value 
    useEffect(()=>{
        var d1=data.filter((el)=>{
            if(el.id==id.id)
            {
                return el
            }
        })

        setstate(d1[0])
    },[data,id])

    console.log(sta)



    function hanchange(e)
    {
        var value =e.target.value
        var name=e.target.name 

        
        setstate({...sta,[name]:value})       
    }
    console.log(sta)

    useEffect(()=>{
        localStorage.setItem("data",JSON.stringify(data))
    },[data])


    function sub(e)
    {
        e.preventDefault()
        var d2=data.map((el)=>{
            if(el.id==id.id)
            {
                return  sta
            }
            else{
                return el
            }
        })

        setdata(d2)
    }
    console.log(data)




    return (
        <>
            <form onSubmit={sub}>
                <input placeholder="enter the url" onChange={hanchange} name="url" value={sta.url}></input>
                <input placeholder="enter the title" onChange={hanchange} name="title" value={sta.title}></input>
                <input placeholder="enter the price" onChange={hanchange} name="price" value={sta.price}></input>
                <input type="submit" value={"Edit"}></input>
            </form>
        </>
    )
}

export default Edit
// import { useEffect, useState } from "react";
// import { v4 } from "uuid";
// import { useParams } from "react-router-dom";

// function Edit() {
//     const { id } = useParams(); // Proper destructuring
//     const [data, setData] = useState(JSON.parse(localStorage.getItem("data")) || []);
//     const [sta, setSta] = useState({
//         url: "",
//         title: "",
//         price: "",
//         id: v4(),
//     });

//     // Load item to be edited into state
//     useEffect(() => {
//         const currentItem = data.find((el) => el.id === id); // Use find instead of map
//         if (currentItem) {
//             setSta(currentItem);
//         }
//     }, [id, data]);

//     // Save data to localStorage when it changes
//     useEffect(() => {
//         localStorage.setItem("data", JSON.stringify(data));
//     }, [data]);

//     function handleChange(e) {
//         const { name, value } = e.target;
//         setSta({ ...sta, [name]: value });
//     }

//     function handleSubmit(e) {
//         e.preventDefault();
//         const updatedData = data.map((el) => (el.id === id ? sta : el));
//         setData(updatedData);
//     }

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     placeholder="Enter the URL"
//                     onChange={handleChange}
//                     name="url"
//                     value={sta.url}
//                 />
//                 <input
//                     placeholder="Enter the Title"
//                     onChange={handleChange}
//                     name="title"
//                     value={sta.title}
//                 />
//                 <input
//                     placeholder="Enter the Price"
//                     onChange={handleChange}
//                     name="price"
//                     value={sta.price}
//                 />
//                 <input type="submit" value="Save" />
//             </form>
//         </>
//     );
// }

// export default Edit;
