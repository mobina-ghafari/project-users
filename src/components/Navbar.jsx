import { Link } from "react-router-dom";

const Navbar =()=>{
    return(
        <nav className="navbar shadow d-flex align-items-center justify-content-start py-3">
            <Link className="my-nvbar-link text-info mx-3" style={{textDecoration:"none" , fontSize:"20px"}} to="/" >Home</Link>
            <Link className="my-nvbar-link text-info mx-3" style={{textDecoration:"none" , fontSize:"20px"}} to="/users" >Users</Link>
            <Link className="my-nvbar-link text-info mx-3" style={{textDecoration:"none" , fontSize:"20px"}} to="/login" >Login</Link>

        </nav>
    )
}
export default Navbar;