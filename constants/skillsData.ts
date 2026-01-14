import BootstrapIcon from "@/components/UI/Icons/BootstrapIcon";
import CssIcon from "@/components/UI/Icons/CssIcon";
import GithubIcon from "@/components/UI/Icons/GithubIcon";
import GitIcon from "@/components/UI/Icons/GitIcon";
import GraphQL from "@/components/UI/Icons/GraphQlIcon";
import JsIcon from "@/components/UI/Icons/JsIcon";
import NextIcon from "@/components/UI/Icons/NextIcon";
import ReactIcon from "@/components/UI/Icons/ReactIcon";
import ReduxIcon from "@/components/UI/Icons/ReduxIcon";
import SassIcon from "@/components/UI/Icons/SassIcon";
import TailwindIcon from "@/components/UI/Icons/TailwindIcon";
import TypeScriptIcon from "@/components/UI/Icons/TypeScriptIcon";
import { Rocket } from "lucide-react";

export interface Skill {
	name: string;
	icon: any;
	color?: string;
}

export const skillsData: Skill[] = [
	// Frontend & Core
	{ name: "Next.js", icon: NextIcon },
	{ name: "React", icon: ReactIcon },
	{ name: "TypeScript", icon: TypeScriptIcon },
	{ name: "Js", icon: JsIcon },

	{ name: "Tailwind CSS", icon: TailwindIcon },
	{ name: "Bootstrap", icon: BootstrapIcon },
	{ name: "Sass", icon: SassIcon },
	{ name: "CSS", icon: CssIcon },

	{ name: "GraphQL", icon: GraphQL },
	{ name: "Redux", icon: ReduxIcon },
	{ name: "TanStack", icon: ReduxIcon },

	// DevOps & Tools
	{ name: "Git", icon: GitIcon },
	{ name: "GitHub", icon: GithubIcon },
	{ name: "Vercel", icon: Rocket, color: "#FAFAFA" },
];
