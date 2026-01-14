"use client";

import { useState } from "react";
import { ProjectCardProps } from "../../../interfaces/project";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({
	number,
	title,
	description,
	technologies,
	link,
	details,
}: ProjectCardProps) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className="project-card-wrapper">
			<div
				className="project-card"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}>
				<div className="flex items-center gap-16 w-full">
					{/* Project Number */}
					<div className="">
						<span className="font-outfit text-[67px] font-normal leading-[40px] :hover:text-main-color">
							{number}
						</span>
					</div>

					{/* Project Content */}
					<div className="flex items-center justify-between flex-1 gap-12">
						<div className="flex flex-col gap-7 flex-1">
							{/* Project Title */}
							<h3 className="project-title">
								<span className="font-outfit text-[60px] font-normal leading-9">
									{title}
								</span>
							</h3>

							{/* Project Info */}
							<div className="flex flex-col gap-7">
								{/* Description */}
								<div className="project-description">
									<p className="font-outfit text-[15px] font-normal leading-[19.5px]">
										{description}
									</p>
								</div>
							</div>
						</div>

						{/* Arrow Button */}
						<button
							className="arrow-button"
							aria-label={`View ${title} project`}>
							<ArrowUpRight
								className="w-7 h-7"
								strokeWidth={2.368}
								color="#0A0A0A"
							/>
						</button>
					</div>
				</div>

				{/* Hover Details Panel */}
				<div
					className={`details-panel ${
						isHovered ? "details-panel-visible" : ""
					}`}>
					{details && (
						<div className="details-content">
							<div className="flex flex-col gap-4">
								<div>
									<h4 className="font-outfit text-sm font-semibold text-white mb-2">
										About the Project
									</h4>
									<p className="font-outfit text-sm font-light leading-6 text-[#D4D4D4]">
										{details.fullDescription}
									</p>
								</div>

								{details.features.length > 0 && (
									<div>
										<h4 className="font-outfit text-sm font-semibold text-white mb-2">
											Key Features
										</h4>
										<ul className="list-disc list-inside space-y-1">
											{details.features.map((feature, idx) => (
												<li
													key={idx}
													className="font-outfit text-sm font-light text-[#D4D4D4]">
													{feature}
												</li>
											))}
										</ul>
									</div>
								)}

								<div>
									<h4 className="font-outfit text-sm font-semibold text-white mb-1">
										My Role
									</h4>
									<p className="font-outfit text-sm font-light text-[#D4D4D4]">
										{details.role}
									</p>
								</div>
							</div>
						</div>
					)}
				</div>
				{/* Technologies */}
				<div className="tech-stack">
					{technologies.map((tech, index) => (
						<div key={index} className="tech-badge">
							<div className="tech-badge-inner">
								{tech.icon && (
									<img
										src={tech.icon}
										alt={tech.name}
										className="w-3.5 h-3.5 object-contain"
									/>
								)}
								<span className="font-geist-mono text-[11px] font-medium leading-[15.71px] tracking-[0.275px] uppercase">
									{tech.name}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Divider */}
			<div className="project-divider"></div>
		</div>
	);
}
