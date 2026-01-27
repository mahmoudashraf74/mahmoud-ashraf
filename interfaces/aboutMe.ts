export interface Social {
	href: string;
	label: string;
	icon: React.ComponentType<any>;
}

export interface AboutMeContentProps {
	label: string;
	heading: string;
	bio: string[];
	quote: string;
	socials: Social[];
	resume: {
		href: string;
		label: string;
	};
}

export interface AboutMeImageProps {
	src: string;
	alt: string;
}
