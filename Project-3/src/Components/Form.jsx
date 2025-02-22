function Form({ data, focu, d, blu, se, state }) {
    return (
        <>
            <form onSubmit={data}>
                <input placeholder="enter the url" value={state.url} onChange={d} name="url" onBlur={blu} onFocus={focu} style={se.set1 == false ? { border: "1px solid red" } : {}}></input>
                {se.set1 == false ? <p>wrong url</p> : ""}<br></br>
                <input placeholder="enter the title" value={state.title} onChange={d} name="title" onBlur={blu} onFocus={focu} style={se.set2 == false ? { border: "1px solid red" } : {}}></input>
                {se.set2 == false ? <p>wrong title</p> : ""}<br></br>

                 <input placeholder="enter the description" value={state.description} onChange={d} name="description" onBlur={blu} onFocus={focu} style={se.set3 == false ? { border: "1px solid red" } : {}}></input>
                

                <input placeholder="enter the price" value={state.price} onChange={d} name="price" onBlur={blu} onFocus={focu} style={se.set4 == false ? { border: "1px solid red" } : {}}></input>
                
                {se.set4 == false ? <p>enter the price</p> : ""}<br></br>

                {/* <textarea rows="4" cols="50"  form="usrform" onChange={d} name="description" value={state.description} onBlur={blu} onFocus={focu} style={se.set3==false ?{border:"1px solid red"}:{}} placeholder="enter you description"></textarea> */}

                {se.set3 == false ? <p>please fill the description</p> : ""} <br></br>

                <input type="submit"></input>
            </form>
        </>
    )
}
export default Form