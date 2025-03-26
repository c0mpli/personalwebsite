import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import BelowButton from "../components/BelowButton";
function Experience() {
	const experienceData = [
		{
			title: "Research Intern",
			company: "IIT Delhi, Delhi - India",
			date: "July 2024 - Aug 2024",
			description:
				"Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
			logoImage: require("../images/exp/iitd.png"),
		},
		{
			title: "SDE Intern",
			company: "Zappit.ai, Texas - USA",
			date: "Feb 2024 - July 2024",
			description:
				"Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
			logoImage: require("../images/exp/zappit.jpg"),
		},
		{
			title: "SDE Intern",
			company: "Solblocks, Mumbai - India",
			date: "Nov 2023 - Jan 2024",
			description:
				"Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
			logoImage: require("../images/exp/solblocks.png"),
		},
		{
			title: "Backend Developer Intern",
			company: "Webknot Technologies, Bangalore - India",
			date: "May 2023 - Oct 2023",
			description:
				"Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
			logoImage: require("../images/exp/webknot.jpg"),
		},
		{
			title: "Full-Stack Developer Intern",
			company: "AST Consulting, Noida - India",
			date: "March 2023 - April 2023",
			description:
				"Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
			logoImage: require("../images/exp/ast.jpg"),
		},
		{
			title: "UI/UX Intern",
			company: "Teens for Cancer Patients NGO, Bangalore - India",
			date: "July 2022 - Sept 2022",
			description:
				"Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
			logoImage: require("../images/exp/tcp.jpg"),
		},
		{
			title: "Video Editor Intern",
			company: "Abstract Productions, Mumbai - India",
			date: "Sept 2021 - Jan 2022",
			description:
				"Creative Direction, User Experience, Visual Design, Project Management, Team Leading",
			logoImage: require("../images/exp/abstract.jpg"),
		},
	];
	return (
		<>
			<div className="experience">
				<VerticalTimeline>
					{experienceData.map((item, index) => (
						<VerticalTimelineElement
							style={{ marginTop: "7rem" }}
							key={index}
							className="vertical-timeline-element--work"
							date={item.date}
							dateClassName="text-white"
							iconStyle={{
								background: "black",
								color: "#fff",
							}}
							icon={
								<img
									src={item.logoImage}
									style={{
										width: "100%",
										height: "100%",
										objectFit: "cover",
										borderRadius: "100%",
										padding: "0.2rem",
									}}
								/>
							}
						>
							<h3 className="vertical-timeline-element-title">{item.title}</h3>
							<h4 className="vertical-timeline-element-subtitle">
								{item.company}
							</h4>
							{/* <p id="description">{item.description}</p> */}
						</VerticalTimelineElement>
					))}
				</VerticalTimeline>
			</div>
			<BelowButton text={"Projects"} />
		</>
	);
}

export default Experience;
