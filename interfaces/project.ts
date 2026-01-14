export interface ProjectDetails {
	fullDescription: string;
	features: string[];
	role: string;
}

export interface Technology {
	name: string;
	icon?: string;
}
export interface ProjectCardProps {
	number: string;
	title: string;
	description: string;
	technologies: Technology[];
	link?: string;
	details?: ProjectDetails;
}

export interface Project {
	number: string;
	title: string;
	description: string;
	technologies: Technology[];
	link: string;
	details: ProjectDetails;
}
