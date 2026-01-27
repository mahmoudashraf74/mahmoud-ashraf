import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AboutMeContentProps } from "@/interfaces/aboutMe";

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
				<motion.h2
					className="font-instrument-serif text-5xl sm:text-5xl md:text-6xl font-normal leading-[60px] tracking-[-1.5px] max-w-[577px] gradient-text "
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
					viewport={{ once: false, amount: 0.5 }}>
					{heading.split("\n").map((line, i) => (
						<span key={i}>
							{line}
							{i !== heading.split("\n").length - 1 && <br />}
						</span>
					))}
				</motion.h2>
			</div>

			{/* Content Container */}
			<motion.div
				className="flex flex-col gap-8 max-w-[750px] text-white"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
				viewport={{ once: false, amount: 0.3 }}>
				{/* Bio Paragraphs */}
				<motion.div className="flex flex-col gap-6">
					{bio.map((text, i) => (
						<p
							key={i}
							className="font-outfit text-lg font-light leading-7 tracking-[0.9px]">
							{text}
						</p>
					))}
				</motion.div>
			</motion.div>

			{/* Quote */}
			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
				viewport={{ once: false, amount: 0.5 }}>
				<p className="font-outfit text-lg font-light leading-7 tracking-[0.9px]">
					{quote}
				</p>
			</motion.div>

			{/* Social Links */}
			<motion.div
				className="flex items-center gap-3"
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
				viewport={{ once: false, amount: 0.5 }}>
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
			</motion.div>

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
	);
}
