function Product({ arr }) {
    return (
        <>
            <div className="d-flex justify-content-evenly align-items-center w-100 border border border-danger flex-wrap h-auto">
                {arr.map((el) => {
                    return <div className="border border-1 mt-3" style={{ height: '300px', width: '24%' }}>
                        <div className="w-75 m-auto  border border-1" style={{ height: '80%' }}> <img src={el.username} className="w-100 h-100"></img></div>
                        <p>{el.email}</p>
                        <p>{el.password}</p>
                    </div>

                })}
            </div>
        </>
    )
}

export default Product