import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Social {
	href: string;
	label: string;
	icon: React.ComponentType<any>;
}

interface AboutMeContentProps {
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

export default function AboutMeContent({
	label,
	heading,
	bio,
	quote,
	socials,
	resume,
}: AboutMeContentProps) {
	return (
		<div className="relative w-full md:w-[60%] flex flex-col gap-8">
			{/* Section Label & Heading */}
			<div className="flex flex-col gap-4">
				{/* Label */}
				<div className="pb-4">
					<p className="font-geist-mono text-xs font-normal leading-4 tracking-[1.2px] uppercase gradient-text">
						{label}
					</p>
				</div>

				{/* Main Heading */}
				<h2 className="font-instrument-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[60px] tracking-[-1.5px] max-w-[577px] gradient-text ">
					{heading.split("\n").map((line, i) => (
						<span key={i}>
							{line}
							{i !== heading.split("\n").length - 1 && <br />}
						</span>
					))}
				</h2>
			</div>

			{/* Content Container */}
			<div className="flex flex-col gap-8 max-w-[750px] text-white">
				{/* Bio Paragraphs */}
				<div className="flex flex-col gap-6">
					{bio.map((text, i) => (
						<p
							key={i}
							className="font-outfit text-lg font-light leading-7 tracking-[0.9px]">
							{text}
						</p>
					))}
				</div>

				{/* Quote */}
				<div>
					<p className="font-outfit text-lg font-light leading-7 tracking-[0.9px]">
						{quote}
					</p>
				</div>

				{/* Social Links */}
				<div className="flex items-center gap-3">
					{socials.map((social, i) => {
						const Icon = social.icon;
						return (
							<Link
								key={social.label}
								href={social.href}
								target="_blank"
								title={social.label}
								rel="noopener noreferrer"
								className="flex items-center justify-center w-5 h-5 hover:opacity-70 transition-opacity"
								aria-label={social.label}>
								<Icon className="w-5 h-5" strokeWidth={0.833} color="#D4D4D4" />
							</Link>
						);
					})}
				</div>

				{/* Resume Link */}
				<Link
					href={resume.href}
					title={resume.label}
					target="_blank"
					className="inline-flex items-center gap-2 pt-2 group w-fit">
					<span
						className="font-geist-mono text-base font-normal leading-6"
						style={{ color: "#F7F7F8" }}>
						{resume.label}
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
				</Link>
			</div>
		</div>
	);
}
