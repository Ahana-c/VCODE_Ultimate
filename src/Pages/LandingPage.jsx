import React from "react";
import styles from "../styles";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import "../styles/Landing.css"
const LandingPage = () => {
	return (
		<div className="hello">
			<Navbar />
			<Hero />
		</div>
	);
};

export default LandingPage;
