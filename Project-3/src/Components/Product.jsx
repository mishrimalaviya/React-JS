function Product({ arr }) {
    return (
        <>
            {arr.map((el, i) => {
                return <>
                    <img src={el.url}></img>
                    <p>{el.title}</p>
                    <span>{el.description}</span>
                    <p>{el.price}</p>
                </>
            })}
        </>
    )
}
export default Product