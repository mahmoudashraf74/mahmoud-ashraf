import Hero from "@/components/sections/firstSection/Hero";
import AboutMe from "@/components/sections/aboutMe/AboutMe";
import Skills from "@/components/sections/skills/Skills";
import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";
import Projects from "@/components/sections/Projects/Projects";

export default function Home() {
	return (
		<div className="min-h-screen">
			<Header />
			<Hero />
			<Projects />
			<Skills />

			<AboutMe />
			<Footer />
		</div>
	);
}
