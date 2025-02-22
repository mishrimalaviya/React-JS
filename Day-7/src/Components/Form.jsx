

function Form({val,formhandle,state}) {


    return (
        <div>
            <form onSubmit={formhandle}>
                <input placeholder="enter the image" value={state.image} onChange={val} name="image"></input>
                <input placeholder="enter the title" value={state.title} onChange={val} name="title"></input>
                <input placeholder="enter the price" value={state.price} onChange={val} name="price"></input>
                <input type="submit" value="submit" ></input>

            </form>
        </div>
    )
}
export default Form