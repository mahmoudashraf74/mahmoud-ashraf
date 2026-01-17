"use client";
import { useState } from "react";

const navItems = [
	{ label: "Home", key: "home" },
	{ label: "Work", key: "work" },
	{ label: "About", key: "about" },
	{ label: "Resume", key: "resume" },
	{ label: "Let's connect", key: "connect", isButton: true },
];

const handleNavClick = (key: string) => {
	if (key === "about") {
		const aboutSection = document.getElementById("about");
		if (aboutSection) {
			aboutSection.scrollIntoView({ behavior: "smooth" });
		}
	} else if (key === "resume") {
		const aboutSection = document.getElementById("about");
		if (aboutSection) {
			aboutSection.scrollIntoView({ behavior: "smooth" });
		}
	} else if (key === "connect") {
		const footer = document.getElementById("footer");
		if (footer) {
			footer.scrollIntoView({ behavior: "smooth" });
		}
	}
};

export default function Header() {
	const [active, setActive] = useState("home");
	return (
		<header className="absolute top-12 left-1/2 -translate-x-1/2 z-50">
			<nav className="px-2  flex items-center justify-between gap-1 sm:gap-4 h-10  rounded-[22px] bg-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),inset_0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-[20px]">
				{navItems.map((item) => (
					<div
						className={
							active === item.key
								? "relative flex flex-col items-start text-white bg-white/10 rounded-full py-1 px-2"
								: "flex flex-col items-start py-1 px-2"
						}
						key={item.key}
						onClick={() => {
							setActive(item.key);
							handleNavClick(item.key);
						}}
						style={{ cursor: "pointer" }}>
						<span
							className={
								"relative font-outfit text-[12px] sm:text-[16px]  font-normal whitespace-nowrap " +
								(active === item.key ? "text-white" : "text-white/70")
							}>
							{item.label}
						</span>
					</div>
				))}
			</nav>
		</header>
	);
}
