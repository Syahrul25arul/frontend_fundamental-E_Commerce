import React from "react";
import { Account, Footer, FooterAbout, InfoAccount, InfoLink, Information, Input, NewsLatter } from "./Footer.styles";
import { ButtonSubscribe } from "../button";

function index() {
	return (
		<Footer>
			<FooterAbout className="footer-about">
				<h4 className="font-rubik">E - Shop</h4>
				<p className="font-rale">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, cum!</p>
			</FooterAbout>
			<NewsLatter className="newslatter">
				<h4 className="font-rubik">Newslatter</h4>
				<form action="/">
					<Input type={`email`} placeholder="Email" />
					<ButtonSubscribe>Subscribe</ButtonSubscribe>
				</form>
			</NewsLatter>
			<Information className="information">
				<h4 className="font-rubik">Information</h4>
				<InfoLink className="font-rale">
					<a href="#">About us</a>
					<a href="#">Delivery Information</a>
					<a href="#">Privacy Policy</a>
					<a href="#">Terms & Conditions</a>
				</InfoLink>
			</Information>
			<Account className="account">
				<h4 className="font-rubik">account</h4>
				<InfoAccount>
					<a href="#">My Account</a>
					<a href="#">Order History</a>
					<a href="#">Wish List</a>
					<a href="#">Newslatter</a>
				</InfoAccount>
			</Account>
		</Footer>
	);
}

export default index;
