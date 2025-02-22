import { NavLink } from "react-router-dom"
function Nav()
{
    return(
        <>
            <NavLink to="/">home</NavLink>
            <NavLink to="/form">Form</NavLink>
            <NavLink to="/product">Product</NavLink>
        </>
    )
}
export default Nav