import Hero from "@/components/sections/firstSection/Hero";
import AboutMe from "@/components/sections/aboutMe/AboutMe";
import Skills from "@/components/sections/skills/Skills";
import Footer from "@/components/layout/Footer/Footer";

export default function Home() {
	return (
		<div className="min-h-screen">
			{/* <Header /> */}
			<Hero />
			{/* <Projects /> */}
			<AboutMe />
			<Skills />
			<Footer />
		</div>
	);
}
