import React from "react";
import "./Navbar.scss";

function Navbar() {
    return (
        <div className="Navbar">
            <nav className="container nav-container">
                <div className="nav-left">
                    <h1 className="banner">Ajay Kumar</h1>
                </div>
                <div className="nav-right">
                    <ul className="link-group">
                        <li className="hover-link">Home</li>
                        <li className="hover-link">About</li>
                        <li className="hover-link">Projects</li>
                        <li className="hover-link">Skills</li>
                        <li className="hover-link">Contact</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
