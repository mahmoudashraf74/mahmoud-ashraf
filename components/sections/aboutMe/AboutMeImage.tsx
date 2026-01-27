import { AboutMeImageProps } from "@/interfaces/aboutMe";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutMeImage({ src, alt }: AboutMeImageProps) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<div
			ref={ref}
			className="relative w-full md:w-[40%]  h-[450px] md:h-[553px]">
			{/* Green gradient background - rotated */}
			<motion.div
				className="absolute w-full max-w-[450px] h-[450px] rounded-[51px] left-2 top-0 -rotate-[8.929deg]"
				style={{
					background: "linear-gradient(180deg, #0C6F4C 0%, #002906 100%)",
				}}
				initial={{ opacity: 0 }}
				animate={isInView ? { opacity: 1 } : { opacity: 0 }}
				transition={{ duration: 0.4, delay: 1 }}
			/>

			{/* Profile image */}
			<motion.img
				src={src}
				alt={alt}
				title={alt}
				className="absolute w-full max-w-[450px] h-[450px] rounded-[51px] object-cover left-0 top-[103px] md:top-[103px]"
				initial={{ opacity: 0, scale: 0 }}
				animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
				transition={{
					duration: 0.4,
					scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
				}}
			/>
		</div>
	);
}
