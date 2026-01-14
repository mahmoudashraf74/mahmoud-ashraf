import { Linkedin, Github, Twitter, ArrowRight } from "lucide-react";

const aboutMeContent = {
	label: "Know About Me",
	heading: "Front-End Developer and\na little bit of",
	bio: [
		"I'm Mahmoud Ashraf Results-driven Senior Front-End Developer with +3 years of experience building scalable e-commerce and data-driven web applications using React, Next.js, Vue.js, and TypeScript. Developed +5 full-scale e-commerce platforms from scratch including La Poire, Concrete, Al Morshedy, and Beymen and designed +50 responsive, user-centric web templates aligned with modern UI/UX standards.",
		"Strong expertise in Redux, GraphQL/REST integrations, responsive design, and performance and accessibility best practices, achieving up to 30% improvement in page load speed and application performance. Delivered a data-driven platform (Poultry Finder), collaborated closely with design and backend teams, and mentored and onboarded new team members, improving code consistency, team productivity, and business outcomes.",
	],
	quote: "I believe in waking up each day eager to make a difference!",
	socials: [
		{ href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
		{ href: "https://github.com", label: "GitHub", icon: Github },
		{ href: "https://twitter.com", label: "Twitter", icon: Twitter },
	],
	resume: {
		href: "#",
		label: "My resume",
	},
};

export default function AboutMe() {
	return (
		<section className="relative w-full min-h-screen overflow-hidden flex flex-col md:flex-row items-center justify-between py-28 px-6 md:px-12 lg:px-24 gap-2">
			{/* Main Content Container */}
			<div className="relative w-full md:w-[50%] flex flex-col gap-8">
				{/* Section Label & Heading */}
				<div className="flex flex-col gap-4">
					{/* Label */}
					<div className="pb-4">
						<p className="font-geist-mono text-xs font-normal leading-4 tracking-[1.2px] uppercase gradient-text">
							{aboutMeContent.label}
						</p>
					</div>

					{/* Main Heading */}
					<h2 className="font-instrument-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[60px] tracking-[-1.5px] max-w-[577px] gradient-text ">
						{aboutMeContent.heading.split("\n").map((line, i) => (
							<span key={i}>
								{line}
								{i !== aboutMeContent.heading.split("\n").length - 1 && <br />}
							</span>
						))}
					</h2>
				</div>

				{/* Content Container */}
				<div className="flex flex-col gap-8 max-w-[550px]">
					{/* Bio Paragraphs */}
					<div>
						{aboutMeContent.bio.map((text, i) => (
							<p
								key={i}
								className="font-outfit text-lg font-light leading-7 tracking-[0.9px]"
								style={{ color: "#D4D4D4" }}>
								{text}
							</p>
						))}
					</div>

					{/* Quote */}
					<div>
						<p
							className="font-outfit text-lg font-light leading-7 tracking-[0.9px]"
							style={{ color: "#D4D4D4" }}>
							{aboutMeContent.quote}
						</p>
					</div>

					{/* Social Links */}
					<div className="flex items-center gap-3">
						{aboutMeContent.socials.map((social, i) => {
							const Icon = social.icon;
							return (
								<a
									key={social.label}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center justify-center w-5 h-5 hover:opacity-70 transition-opacity"
									aria-label={social.label}>
									<Icon
										className="w-5 h-5"
										strokeWidth={0.833}
										color="#D4D4D4"
									/>
								</a>
							);
						})}
					</div>

					{/* Resume Link */}
					<a
						href={aboutMeContent.resume.href}
						className="inline-flex items-center gap-2 pt-2 group w-fit">
						<span
							className="font-geist-mono text-base font-normal leading-6"
							style={{ color: "#F7F7F8" }}>
							{aboutMeContent.resume.label}
						</span>
						<div
							className="flex items-center justify-center w-6 h-6 rounded-full border transition-all"
							style={{
								borderColor: "rgba(255, 255, 255, 0.10)",
								background: "rgba(255, 255, 255, 0.05)",
							}}>
							<ArrowRight
								className="w-3.5 h-3.5"
								strokeWidth={1.167}
								color="#F7F7F8"
							/>
						</div>
					</a>
				</div>
			</div>

			<div className="w-full md:w-[50%]">
				<img src="/assets/images/firstSectionBg.png" alt="" />
			</div>
		</section>
	);
}
