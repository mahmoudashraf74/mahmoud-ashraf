"use client";
import { aboutMeContent } from "@/constants/aboutMe";
import AboutMeContent from "./AboutMeContent";
import AboutMeImage from "./AboutMeImage";

export default function AboutMe() {
	return (
		<section
			id="about"
			className="relative w-full min-h-screen overflow-hidden flex flex-col md:flex-row items-center justify-between py-28 px-6 md:px-12 lg:px-24 gap-10 bg-no-repeat bg-cover bg-center"
			style={{ backgroundImage: "url(/assets/images/aboutMeSectionBg.png)" }}>
			<AboutMeContent
				label={aboutMeContent.label}
				heading={aboutMeContent.heading}
				bio={aboutMeContent.bio}
				quote={aboutMeContent.quote}
				socials={aboutMeContent.socials}
				resume={aboutMeContent.resume}
			/>

			<AboutMeImage src="/assets/images/myImage.jpg" alt="Mahmoud Ashraf" />
		</section>
	);
}
