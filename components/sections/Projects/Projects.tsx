import ProjectCard from "./ProjectCard";
import HeaderProjects from "./HeaderProjects";
import { projectsData } from "../../../constants/projectsData";
export default function Projects() {
	return (
		<section
			className="relative w-full min-h-screen flex flex-col py-28 px-3 md:px-12 lg:px-24 bg-no-repeat bg-cover bg-center"
			id="Projects"
			style={{ backgroundImage: "url(/assets/images/projectsSectionBg.png)" }}>
			<div className="flex w-full flex-col gap-16">
				{/*  Header projects */}
				<HeaderProjects />

				{/* projectsData */}
				<div className="flex flex-col items-center gap-16">
					{projectsData.map((project, index) => (
						<ProjectCard key={index} index={index} {...project}  />
					))}
				</div>
			</div>
		</section>
	);
}
