import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "./About.css";

import img1 from "../images/about/1.jpeg";
import img2 from "../images/about/2.jpeg";
import img3 from "../images/about/3.jpeg";
import img4 from "../images/about/4.jpeg";
import img5 from "../images/about/5.jpeg";
import img6 from "../images/about/6.jpeg";
import img7 from "../images/about/7.jpeg";
import img8 from "../images/about/8.jpeg";
import BelowButton from "../components/BelowButton";
import { AnimatePresence, motion } from "framer-motion";
function About() {
	const images = [img1, img2, img3, img4, img5, img6, img7, img8];
	return (
		<>
			<AnimatePresence>
				<div className="about-content-wrapper">
					<motion.p
						initial={{ x: "-100%", opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						exit={{
							x: "-100%",
							opacity: 0,
							transition: { duration: 0, delay: 0 },
						}}
						transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
					>
						Hey there, I'm Jash Doshi, a coding sorcerer and photography ninja
						pursuing a Bachelor's in Computer Engineering at the University of
						Mumbai. When I'm not decoding the secrets of quantum computing,
						you'll find me dominating CS:GO, making strategic chess moves, and
						spiking on the volleyball court. Beyond MERN and LLMs, I'm fluent in
						the languages of snooker and finance. Feel free to connect with me
						anytime! 🚀📸💻
					</motion.p>
					<motion.div
						style={{ overflow: "auto" }}
						initial={{ x: "100%", opacity: 0 }}
						whileInView={{ x: 0, opacity: 1 }}
						exit={{
							x: "100%",
							opacity: 0,
							transition: { duration: 0, delay: 0 },
						}}
						transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
					>
						<Swiper
							spaceBetween={50}
							slidesPerView={1}
							modules={[Autoplay, EffectFade]}
							loop={true}
							effect="fade"
							autoplay={{ delay: 3000, disableOnInteraction: false }}
						>
							{images.map((image, index) => {
								return (
									<SwiperSlide key={index}>
										<img src={image} className="about-image" />
									</SwiperSlide>
								);
							})}
						</Swiper>
					</motion.div>
				</div>
			</AnimatePresence>
			<BelowButton text={"Experiences"} />
		</>
	);
}

export default About;
