import { Link, NavLink, Outlet } from "react-router-dom";



const NavBar = () => {
  return (
    <>
    <nav className="nav-bg">
    <div className="nav-flex">
        <div className="nav-left">
            <img src="airplane.png" alt="flight logo" width='50px' />
            <h1>Desi Fligt</h1>
        </div>
        <div>
            <ul className="nav-right">
                <li><NavLink to ='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/services'>Services</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </div>
    </div>
    </nav>
        <Outlet/>
    
    </>
  )
}

export default NavBar