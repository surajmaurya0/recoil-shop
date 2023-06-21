import React from "react";
import './layout.css'
const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <a href="/" className="navbar-item"><i class="fa-sharp fa-solid fa-store transform"></i> </a>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <a href="/" className="button is-primary"><strong>Add Product</strong></a>
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