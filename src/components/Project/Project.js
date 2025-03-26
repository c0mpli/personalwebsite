import React from "react";
import "./Project.css";
import Projects from "../../projectdata";
import { AnimatePresence, motion, useScroll } from "framer-motion";

import useMediaQuery from "@mui/material/useMediaQuery";
import BelowButton from "../BelowButton";

function Project() {
	const openInNewTab = (url) => {
		window.open(url, "_blank", "noopener,noreferrer");
	};
	return (
		<>
			<div className="all-projects">
				{Projects &&
					Projects.map((project, index) => {
						return (
							<AnimatePresence>
								<div className="project" key={index}>
									<motion.img
										src={project.image}
										alt=""
										class="project-image"
										initial={{ x: "-100%", opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										exit={{
											x: "-100%",
											opacity: 0,
											transition: { duration: 0, delay: 0 },
										}}
										transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
									></motion.img>
									<motion.div
										className="project-info"
										initial={{ x: "100%", opacity: 0 }}
										whileInView={{ x: 0, opacity: 1 }}
										exit={{
											x: "100%",
											opacity: 0,
											transition: { duration: 0, delay: 0 },
										}}
										transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
									>
										<h2>{project.name}</h2>
										<p className="project-description">{project.description}</p>
										<h3>Tools used:</h3>
										<ul className="tools-used">
											{project.tools.map((tool) => {
												return <li>{tool}</li>;
											})}
										</ul>
										<div className="project-buttons">
											{project.website && (
												<button onClick={() => openInNewTab(project.website)}>
													Open site
												</button>
											)}
											{project.github && (
												<button onClick={() => openInNewTab(project.github)}>
													View code
												</button>
											)}
										</div>
									</motion.div>
								</div>
							</AnimatePresence>
						);
					})}
			</div>
			<BelowButton text={"Achievements"} />
		</>
	);
}

export default Project;
