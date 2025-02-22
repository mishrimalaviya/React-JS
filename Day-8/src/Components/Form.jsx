import { useState } from 'react'
function Form({da,focu,blu,obj,sub,state}) {
   



    return (
        <form onSubmit={sub}>
            <input placeholder="enter the url" value={state.username} onChange={da} name="username" onBlur={blu} onFocus={focu} style={obj.set == false ? { border: '1px solid red' } : {}}></input>
            {obj.set == false ? <p>wrong username</p> : ""}
            <input placeholder="enter the title" value={state.email} onChange={da} name="email" onBlur={blu} onFocus={focu} style={obj.set1==false ?{border:'1px solid red'}:{}} ></input>
            {obj.set1 == false ? <p>email id is wrong</p> : ""}
            <input placeholder="enter the price" value={state.password} onChange={da} name="password" onBlur={blu} onFocus={focu} style={obj.set2==false ?{border:'1px solid red'}:{}}></input>
            {obj.set2 == false ? <p>password is wrong</p> : ""}

            <input type="submit"></input>
        </form>
    )
}

export default Form