"use client";

import { useState } from "react";
import { ProjectCardProps } from "../../../interfaces/project";
import { ArrowUpRight, SparkleIcon, Sparkles } from "lucide-react";
import TechnologyBadge from "@/components/sections/Projects/TechnologyBadge";

export default function ProjectCard({
	title,
	description,
	technologies,
	link,
	details,
	index,
}: ProjectCardProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className="flex flex-row items-center gap-12 w-full "
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			{/* Project Number */}
			<div className="hidden md:flex items-center justify-center flex-shrink-0">
				<span
					className={`font-outfit text-[67px] font-normal leading-[40px] ${isHovered ? "text-[#0C6F4C]" : "text-white"}`}>
					{`0${index! + 1}`}
				</span>
			</div>
			<div className="w-full flex flex-col items-start gap-8">
				{/* Project Content */}
				<div className="w-full flex flex-row items-center justify-between flex-1 ">
					<div className="flex flex-col gap-7 flex-1">
						{/* Project Title */}
						<h3 className="project-title">
							<span className="font-outfit text-2xl md:text-[60px] font-normal leading-9 text-white">
								{title}
							</span>
						</h3>

						{/* Project Info */}
						<div className="flex flex-col gap-7">
							{/* Description */}
							<div className="project-description">
								<p className="font-outfit text-[15px] font-normal leading-[19.5px] text-white">
									{description}
								</p>
							</div>
						</div>
					</div>

					{/* Arrow Button */}
					<button
						className=" flex bg-white w-10 h-10 cursor-pointer rounded-full items-center justify-center hover:scale-110 transition-transform duration-300"
						aria-label={`View ${title} project`}
						onClick={() => link && window.open(link, "_blank")}>
						<ArrowUpRight
							className="w-7 h-7"
							strokeWidth={2.368}
							color="#000"
						/>
					</button>
				</div>

				{details && (
					<div className="w-full">
						<div className="flex flex-col gap-4">
							<div>
								<h4 className="font-outfit text-sm font-semibold text-white mb-2">
									About the Project
								</h4>
								<p className="font-outfit text-sm font-light leading-6 text-[#D4D4D4]">
									{details.fullDescription}
								</p>
							</div>
						</div>

						<ul className="flex flex-col ">
							{details.features.map((feature, index) => (
								<li key={index} className="">
									<Sparkles
										className="w-4 h-4 inline mr-2 text-[#0C6F4C]"
										style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.25)" }}
									/>
									<span className="font-outfit text-sm font-light leading-6 text-[#D4D4D4]">
										{feature}
									</span>
								</li>
							))}
						</ul>
					</div>
				)}
				{/* Technologies */}
				<div className="w-full flex flex-row flex-wrap gap-2">
					{technologies.map((tech) => (
						<TechnologyBadge
							key={tech.name}
							name={tech.name}
							icon={tech.icon}
						/>
					))}
				</div>
				{/* Divider */}
				<div className="w-full h-[1px] bg-[#D4D4D4]" />
			</div>
		</div>
	);
}
