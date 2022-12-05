import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";


function Navbar(){
return <nav className="nav">
    <h4><Link className="link" to='/'>Home</Link></h4>
    <h4><Link className="link" to='/notes'>Notes</Link></h4>
    <h4><Link className="link" to='/create'>Create Notes</Link></h4>
    <h4><Link className="link" to='/code'>Code</Link></h4>
    <h4><Link className="link" to='/form'>Form</Link></h4>
</nav>
}


export default Navbar;