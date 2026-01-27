"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LetsConnectButton() {
	return (
		<button
			className="connect-button group inline-flex items-center justify-between gap-3 pl-6 pr-1 py-1 rounded-full border border-white/10 bg-white/10 backdrop-blur-sm opacity-85 hover:opacity-100 transition-opacity"
			onClick={() => window.open("https://wa.me/201095691698", "_blank")}>
			<span className="text-white font-outfit font-medium text-base">
				Let&apos;s Connect
			</span>
			<motion.div
				className="flex items-center justify-center w-9 h-9 rounded-full bg-white"
				whileHover={{ scale: 1.1, rotate: 45 }}
				animate={{ opacity: [1, 0.5, 1], x: [-5, 3, -5] }}
				transition={{
					opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
					x: { duration: 2, repeat: Infinity, ease: "easeInOut" },
					scale: { duration: 0.3, ease: "easeOut" },
					rotate: { duration: 0.3, ease: "easeOut" },
				}}>
				<ArrowRight
					className="w-[18px] h-[18px] text-black"
					strokeWidth={1.5}
				/>
			</motion.div>
		</button>
	);
}
