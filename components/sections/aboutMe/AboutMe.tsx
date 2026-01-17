import { Linkedin, Github, Twitter } from "lucide-react";
import AboutMeContent from "./AboutMeContent";
import AboutMeImage from "./AboutMeImage";

const aboutMeContent = {
	label: "Know About Me",
	heading: "Front-End Developer and\na little bit of",
	bio: [
		"I'm Mahmoud Ashraf Results-driven Senior Front-End Developer with +3 years of experience building scalable e-commerce and data-driven web applications using React, Next.js, and TypeScript. Developed +5 full-scale e-commerce platforms from scratch including La Poire, Concrete, Al Morshedy, and Beymen and designed +50 responsive, user-centric web templates aligned with modern UI/UX standards.",
		"Strong expertise in Redux, GraphQL/REST integrations, responsive design, and performance and accessibility best practices, achieving up to 30% improvement in page load speed and application performance. Delivered a data-driven platform (Poultry Finder), collaborated closely with design and backend teams, and mentored and onboarded new team members, improving code consistency, team productivity, and business outcomes.",
	],
	quote: "I believe in waking up each day eager to make a difference!",
	socials: [
		{
			href: "https://www.linkedin.com/in/mahmoud-ashraf-yaqout/",
			label: "LinkedIn",
			icon: Linkedin,
		},
		{
			href: "https://github.com/mahmoudashraf74",
			label: "GitHub",
			icon: Github,
		},
	],
	resume: {
		href: "https://drive.google.com/file/d/1shH03MGwOUhZ0gNnvooaQ2eXERgoHj99/view?usp=sharing",
		label: "My resume",
	},
};

export default function AboutMe() {
	return (
		<section
			id="about"
			className="relative w-full min-h-screen overflow-hidden flex flex-col md:flex-row items-center justify-between py-28 px-6 md:px-12 lg:px-24 gap-10 bg-no-repeat bg-cover bg-center"
			style={{ backgroundImage: "url(/assets/images/aboutMeSectionBg.png)" }}>
			<AboutMeContent
				label={aboutMeContent.label}
				heading={aboutMeContent.heading}
				bio={aboutMeContent.bio}
				quote={aboutMeContent.quote}
				socials={aboutMeContent.socials}
				resume={aboutMeContent.resume}
			/>

			<AboutMeImage src="/assets/images/myImage.jpg" alt="Mahmoud Ashraf" />
		</section>
	);
}
