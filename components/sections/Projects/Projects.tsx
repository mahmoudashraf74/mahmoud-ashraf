import ProjectCard from "./ProjectCard";
import { projectsData } from "../../../constants/projectsData";
import { Project } from "../../../interfaces/project";

export default function Projects() {
	return (
		<section className="relative w-full min-h-screen flex flex-col py-28 px-6 md:px-12 lg:px-24">
			<div className="flex w-full max-w-[1280px] flex-col gap-20">
				{/* Section Header */}
				<div className="flex flex-col items-start gap-4">
					{/* Badge */}
					<div className="flex items-center px-3 py-1.5 gap-3 rounded-3xl border border-[#0c6f4c] bg-[#1e1e1e] shadow-[0_0_24px_0_rgba(82,181,146,0.25)]">
						<img
							src="https://api.builder.io/api/v1/image/assets/TEMP/35b1e8dff51a5338e4e2372488aec0e82e2b1cc9?width=32"
							alt=""
							className="w-4 h-4"
						/>
						<span className="font-outfit text-base font-normal leading-8 tracking-[7.4px] text-center text-white">
							SELECTED WORK
						</span>
					</div>

					{/* Heading and Description */}
					<div className="flex flex-col gap-2">
						<h2 className=" text-[#f4f4f5]">
							<span className="font-instrument-serif text-[70px] font-normal leading-[75px]">
								Featured Projects
							</span>
						</h2>
						<p className="max-w-[882px] text-[rgba(229,229,229,0.9)]">
							<span className="font-outfit text-2xl font-normal">
								Frontend-focused projects where I craft interactive, scalable UI
								with clean design systems and smooth user flows — from
								portfolios to full-scale platforms.
							</span>
						</p>
					</div>
				</div>

				{/* Project Cards */}
				<div className="flex flex-col items-center gap-20">
					{projectsData.map((project, index) => (
						<ProjectCard key={index} {...project} />
					))}
				</div>
			</div>
		</section>
	);
}
