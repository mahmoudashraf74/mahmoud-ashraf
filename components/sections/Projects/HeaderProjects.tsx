import { Sparkles } from "lucide-react";

export default function HeaderProjects() {
	return (
		<div className="flex flex-col items-start gap-4">
			{/* Badge */}
			<div className="flex items-center px-3 py-1.5 gap-3 rounded-3xl border border-[#0c6f4c] bg-[#1e1e1e] shadow-[0_0_24px_0_rgba(82,181,146,0.25)]">
				<Sparkles className="w-5 h-5 " strokeWidth={2} />
				<span className="font-outfit text-sm md:text-base font-normal leading-8 tracking-[7.4px] text-center text-white whitespace-nowrap">
					SELECTED WORK
				</span>
			</div>

			{/* Heading and Description */}
			<div className="flex flex-col gap-2">
				<h2 className=" text-[#f4f4f5]">
					<span className="font-instrument-serif text-[40px] md:text-[70px] font-normal leading-[75px]">
						Featured Projects
					</span>
				</h2>
				<p className="max-w-[882px] text-[rgba(229,229,229,0.9)]">
					<span className="font-outfit text-base md:text-2xl font-normal">
						Frontend-focused projects where I craft interactive, scalable UI
						with clean design systems and smooth user flows — from portfolios to
						full-scale platforms.
					</span>
				</p>
			</div>
		</div>
	);
}
