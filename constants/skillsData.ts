import BootstrapIcon from "@/components/UI/Icons/BootstrapIcon";
import CssIcon from "@/components/UI/Icons/CssIcon";
import GithubIcon from "@/components/UI/Icons/GithubIcon";
import GitIcon from "@/components/UI/Icons/GitIcon";
import GraphQL from "@/components/UI/Icons/GraphQlIcon";
import GtagIcon from "@/components/UI/Icons/GtagIcon";
import JsIcon from "@/components/UI/Icons/JsIcon";
import MetaPixelIcon from "@/components/UI/Icons/MetaPixelIcon";
import NextIcon from "@/components/UI/Icons/NextIcon";
import ReactIcon from "@/components/UI/Icons/ReactIcon";
import ReduxIcon from "@/components/UI/Icons/ReduxIcon";
import SassIcon from "@/components/UI/Icons/SassIcon";
import SEOIcon from "@/components/UI/Icons/SEOIcon";
import TailwindIcon from "@/components/UI/Icons/TailwindIcon";
import TanstackIcon from "@/components/UI/Icons/TanstackIcon";
import TypeScriptIcon from "@/components/UI/Icons/TypeScriptIcon";
import { Skill } from "@/interfaces/skills";
import { Rocket } from "lucide-react";

export const skillsData: Skill[] = [
	// Frontend & Core
	{ name: "Next.js", icon: NextIcon, position: { x: -45, y: -30 } },
	{ name: "React", icon: ReactIcon, position: { x: 50, y: -20 } },
	{ name: "TypeScript", icon: TypeScriptIcon, position: { x: -30, y: 40 } },
	{ name: "Js", icon: JsIcon, position: { x: 60, y: 25 } },

	{ name: "Tailwind CSS", icon: TailwindIcon, position: { x: -55, y: -15 } },
	{ name: "Bootstrap", icon: BootstrapIcon, position: { x: 40, y: -35 } },
	{ name: "Sass", icon: SassIcon, position: { x: -25, y: 30 } },
	{ name: "CSS", icon: CssIcon, position: { x: 65, y: -10 } },

	{ name: "GraphQL", icon: GraphQL, position: { x: -40, y: 20 } },
	{ name: "Redux", icon: ReduxIcon, position: { x: 35, y: 35 } },
	{ name: "TanStack", icon: TanstackIcon, position: { x: -60, y: -25 } },

	{ name: "SEO", icon: SEOIcon, color: "#FAFAFA", position: { x: 45, y: 15 } },
	{
		name: "Google Tag Manager",
		icon: GtagIcon,
		color: "#FAFAFA",
		position: { x: -35, y: -40 },
	},
	{ name: "Meta Pixel", icon: MetaPixelIcon, position: { x: 55, y: -5 } },

	// DevOps & Tools
	{ name: "Git", icon: GitIcon, position: { x: -50, y: 10 } },
	{ name: "GitHub", icon: GithubIcon, position: { x: 30, y: -30 } },
	{
		name: "Vercel",
		icon: Rocket,
		color: "#FAFAFA",
		position: { x: -20, y: 35 },
	},
];
