import React from "react";
import "./nav.css";
import logo from "../img/arb-logo.png";
const Nav=() =>{
    return(
		
		<nav className="navbar navbar-expand-lg navbar-light position-fixed">
			
			<a href=""><img src={logo} alt="Logo" width="300rem" height="50px" /></a>

	  <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" >
			  <span className="navbar-toggler-icon"></span>
		  </button>
	  <div className="collapse navbar-collapse text-right" id="navbarNavAltMarkup" >
			   <div className="nav-link">
				  <ul calss="navbar-nav">
					   <li className="nav-item active">
						  <a className="nav-link" href="#">HOME</a>
					   </li>
						<li className="nav-item active">
					   <a className="nav-link" href="#aboutus">ABOUT US</a>
					   </li>
					   <li className="nav-item active">
					   <a className="nav-link" href="#services">SERVICES</a>
					   </li>
					   <li className="nav-item active">
						<a className="nav-link" href="#contactus">CONTACT US</a>
						</li>
				   </ul>
				</div>
	  </div>
  </nav>
  
    )
}
export default Nav;