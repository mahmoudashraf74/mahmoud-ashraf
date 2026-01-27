"use client";

import SkillIconCard from "./SkillIconCard";
import { skillsData } from "@/constants/skillsData";
import { motion } from "framer-motion";

export default function Skills() {
	return (
		<section
			className="relative  min-h-screen py-28 px-6 md:px-12 lg:px-24 bg-[#0a0a0a]  w-full h-full z-0 bg-no-repeat bg-cover bg-center"
			style={{ backgroundImage: "url(/assets/images/skillsSectionBg.png)" }}>
			<div className="flex w-full max-w-[1280px] mx-auto flex-col items-center gap-16">
				{/* Label */}
				<div className="text-center">
					<p className="font-geist-mono text-sm font-normal tracking-widest uppercase text-white/70">
						My Skills
					</p>
				</div>

				{/* Heading */}
				<div className="flex items-center justify-center gap-2 flex-wrap">
					<h2 className="font-instrument-serif text-5xl md:text-6xl font-normal leading-[1.1] text-white">
						The Secret{" "}
						<span className="  bg-gradient-to-r from-[#0C6F4C] via-[#00AF72] to-[#087F56] bg-clip-text text-transparent">
							Sauce
						</span>
					</h2>
				</div>

				{/* Skills  */}
				<div className="w-full max-w-4xl">
					<div className="flex flex-wrap justify-center gap-2">
						{skillsData.map((skill, index) => {
							const position = skill.position || { x: 0, y: 0 };
							return (
								<motion.div
									key={index}
									initial={{
										opacity: 0,
										scale: 0.5,
										x: position.x,
										y: position.y,
									}}
									whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
									transition={{
										duration: 0.7,
										delay: index * 0.05,
										ease: "easeOut",
									}}
									viewport={{ once: false, amount: 0.5 }}>
									<SkillIconCard
										icon={skill.icon}
										name={skill.name}
										color={skill.color}
									/>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
