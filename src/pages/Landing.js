import React from "react";
import Intro from "../components/Intro/Intro";
import Project from "../components/Project/Project";
import Footer from "../components/Footer/Footer";
import About from "./About";
import Experience from "./Experience";

function Landing() {
	return (
		<>
			<Intro />
			<About />
			<Experience />
			<Project />
			<Footer />
		</>
	);
}

export default Landing;
