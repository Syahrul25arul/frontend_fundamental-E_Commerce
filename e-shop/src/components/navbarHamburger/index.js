import React from "react";
import { bannner } from "../../Images";
import "./navbar.css";
import { Navbar, NavbarContainer } from "./navbar.styles";

function index() {
	const handleToggle = (e) => {
		const navbar = document.querySelector(".navbar");
		navbar.classList.toggle("show");
	};
	return (
		<NavbarContainer className="font-roboto">
			<a href="/" className="logo">
				E - Shop
			</a>
			<Navbar className="navbar">
				<a href="#home">Home</a>
				<a href="#services">Services</a>
				<a href="#about">About Us</a>
				<a href="#contact">Contact Us</a>
				<a href="#" className="btn">
					Make an Order
				</a>
			</Navbar>
			{/* `<!-- Hamburger -->` */}
			<div className="hamburger " onClick={handleToggle}>
				<img src={bannner["grid-outline.svg"]} alt="" />
			</div>
		</NavbarContainer>
	);
}

export default index;
