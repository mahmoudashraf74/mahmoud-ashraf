import { ArrowRight } from "lucide-react";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

export default function Footer() {
	return (
		<footer className="flex flex-col md:flex-row justify-between gap-12  bg-[#0a0a0a] px-3 md:px-6 lg:px-[100px]  py-12 lg:py-20">
			{/* Left Section */}
			<FooterLeft />
			{/* Right Section */}
			<FooterRight />
		</footer>
	);
}
