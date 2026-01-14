import Header from "@/components/layout/Header/Header";
import Hero from "@/components/sections/firstSection/Hero";
import AboutMe from "@/components/sections/aboutMe/AboutMe";
import Projects from "@/components/sections/Projects/Projects";
import Skills from "@/components/sections/skills/Skills";

export default function Home() {
	return (
		<div className="min-h-screen">
			{/* <Header /> */}
			<Hero />
			<Projects />
			<AboutMe />
			<Skills />
		</div>
	);
}
