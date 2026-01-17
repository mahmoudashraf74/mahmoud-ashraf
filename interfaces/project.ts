export interface ProjectDetails {
	fullDescription: string;
	features: string[];
}

export interface Technology {
	name: string;
	icon?: string;
}
export interface ProjectCardProps {
	index?: number;
	title: string;
	description: string;
	technologies: Technology[];
	link?: string;
	details?: ProjectDetails;
}

export interface Project {
	index?: number;
	title: string;
	description: string;
	technologies: Technology[];
	link: string;
	details: ProjectDetails;
}
