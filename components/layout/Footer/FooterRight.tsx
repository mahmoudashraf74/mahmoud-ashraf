import EmailIcon from "@/components/UI/Icons/FooterIcons/EmailIcon";
import LinkedInIcon from "@/components/UI/Icons/FooterIcons/LinkedInIcon";
import WhatsIcon from "@/components/UI/Icons/FooterIcons/WhatsIcon";
import { Phone } from "lucide-react";
import Link from "next/link";

export default function FooterRight() {
	return (
		<div className="flex flex-col gap-6  w-full md:w-[50%] ">
			<h3 className="text-[#D4D4D4] text-xl md:text-2xl font-outfit">
				Get in touch
			</h3>
			<div className="flex flex-col gap-2 md:gap-4 ">
				{/* Email */}
				<div className="flex items-center gap-3">
					<Link
						href="mailto:mahmoudyaqout163@gmail.com"
						title="email"
						className="text-white text-lg md:text-2xl font-outfit hover:text-[#0C6F4C] transition-colors">
						mahmoudyaqout163@gmail.com
					</Link>
				</div>
				{/* Phone */}
				<div className="flex items-center gap-3 md:gap-4">
					<Phone className="w-8 h-8 text-white flex-shrink-0" strokeWidth={2} />
					<Link
						href="tel:+201095691698"
						title="phone"
						className="text-white text-lg md:text-2xl font-outfit hover:text-[#0C6F4C] transition-colors">
						+20 109 569 1698
					</Link>
				</div>
			</div>
			{/* Social Icons */}
			<div className="flex items-center gap-2 md:gap-6 mt-4">
				<Link
					href="https://www.linkedin.com/in/mahmoud-ashraf-yaqout/"
					target="_blank"
					title="linkedin"
					rel="noopener noreferrer">
					<LinkedInIcon />
				</Link>
				<Link
					href="https://wa.me/201095691698"
					target="_blank"
					title="whatsapp"
					rel="noopener noreferrer">
					<WhatsIcon />
				</Link>
				<Link href="mailto:mahmoudyaqout163@gmail.com">
					<EmailIcon />
				</Link>
			</div>
		</div>
	);
}
