import { ArrowRight } from "lucide-react";

export default function Hero() {
	return (
		<section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
			{/* Background Image Layer */}
			<div
				className="absolute inset-0 w-full h-full z-0 bg-no-repeat bg-cover bg-center opacity-80"
				style={{ backgroundImage: "url(/assets/images/firstSectionBg.png)" }}
			/>

			{/* Content Container */}
			<div className="relative w-full max-w-[1280px]  flex flex-col items-center justify-center gap-6">
				{/* Main Heading */}
				<div className="flex flex-col items-center">
					<h1 className="text-center font-instrument-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.2]  text-white">
						I help founders turn ideas
						<br />
						into seamless <span className="italic">digital experiences</span>
					</h1>
				</div>

				{/* Subheading with Image */}
				<div className="flex items-center justify-center gap-3 flex-wrap">
					<div className="text-center font-outfit text-xl sm:text-2xl font-normal leading-8 tracking-[-0.025em] gradient-text">
						Hello, Mahmoud Ashraf
					</div>

					<div className="flex flex-col items-start px-3">
						<div className="w-20 rounded-3xl overflow-hidden">
							<img
								src="https://api.builder.io/api/v1/image/assets/TEMP/ca521af2cd81987ffed6c942e768cc63aed965ee?width=160"
								alt="Mahmoud Ashraf"
								className="w-20 h-10 object-cover"
							/>
						</div>
					</div>

					<div className="flex flex-col items-center">
						<div className="text-center font-outfit text-xl sm:text-2xl font-normal gradient-text">
							a Front-End Developer
						</div>
					</div>
				</div>

				{/* CTA Button */}
				<div className="pt-4">
					<button className="group flex items-center justify-between gap-3 pl-3 pr-1 py-1 rounded-full border border-white/10 hover:border-[#0C6F4C] opacity-85 bg-white/10 hover:bg-[#0C6F4C]/20 text-[#1C1C1E] hover:text-white">
						<div className="px-3">
							<span className="text-white text-center font-outfit text-base font-medium leading-6">
								Let's Connect
							</span>
						</div>
						<div className="flex items-center justify-center p-2.5 rounded-full bg-white group-hover:bg-[#0C6F4C]">
							<ArrowRight className="h-4 w-4" />
						</div>
					</button>
				</div>
			</div>
		</section>
	);
}
