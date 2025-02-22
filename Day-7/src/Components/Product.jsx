function Product({arr})
{
    return(
        <div>
            {arr.map((el)=>{
                {console.log(el.title)}
               return <p>{el.title}</p>
            })}
        </div>
    )
}
export default Product