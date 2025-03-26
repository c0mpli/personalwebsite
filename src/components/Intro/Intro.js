import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import React, { useState } from "react";
import "./Intro.css";
import Navbar from "../Navbar/Navbar";
import BelowButton from "../BelowButton";

function Intro() {
	return (
		<>
			<div>
				<Navbar />
			</div>
			<div className="body">
				<div className="main-wrapper">
					<h1 className="title">
						I create <span className="playful">playful</span>
						<br></br>experiences.{" "}
					</h1>
					<img src={require("../personIcon.png")} className="personicon"></img>
				</div>
				<p className="subtitle">Jash Doshi / Software Developer</p>
				<BelowButton text={"About Me"} />
			</div>
		</>
	);
}

export default Intro;
