interface AboutMeImageProps {
	src: string;
	alt: string;
}

export default function AboutMeImage({ src, alt }: AboutMeImageProps) {
	return (
		<div className="relative w-full md:w-[40%]  h-[450px] md:h-[553px]">
			{/* Green gradient background - rotated */}
			<div
				className="absolute w-full max-w-[450px] h-[450px] rounded-[51px] left-2 top-0 -rotate-[8.929deg]"
				style={{
					background: "linear-gradient(180deg, #0C6F4C 0%, #002906 100%)",
				}}></div>

			{/* Profile image */}
			<img
				src={src}
				alt={alt}
				className="absolute w-full max-w-[450px] h-[450px] rounded-[51px] object-cover left-0 top-[103px] md:top-[103px]"
			/>
		</div>
	);
}
