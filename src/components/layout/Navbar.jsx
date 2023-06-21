import React from "react";
import './layout.css'
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { NavbarRecoil } from "../../recoil/navbarRecoil";
const Navbar = () => {
   const url = useRecoilValue(NavbarRecoil)
   console.log(url)

    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item"><i className="fa-sharp fa-solid fa-store transform" style={{color:url == "" ? "#485fc7":''}}></i> </Link>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    {
                                        url ===""?  <Link to="/add-product" className="button is-primary"><strong>Add Product</strong></Link>
                                        :
                                        <Link to="/" className="button is" style={{background:'#485fc7',color:'white'}}><strong>Home</strong></Link>
                                    }
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar