import NextIcon from "@/components/UI/Icons/NextIcon";
import ReactIcon from "@/components/UI/Icons/ReactIcon";
import ReduxIcon from "@/components/UI/Icons/ReduxIcon";
import TailwindIcon from "@/components/UI/Icons/TailwindIcon";
import GraphQlIcon from "@/components/UI/Icons/GraphQlIcon";
import SassIcon from "@/components/UI/Icons/SassIcon";
import TypeScriptIcon from "@/components/UI/Icons/TypeScriptIcon";
import GtagIcon from "@/components/UI/Icons/GtagIcon";
import SEOIcon from "@/components/UI/Icons/SEOIcon";
import MetaPixelIcon from "@/components/UI/Icons/MetaPixelIcon";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
	NextIcon,
	ReactIcon,
	ReduxIcon,
	TailwindIcon,
	GraphQlIcon,
	SassIcon,
	TypeScriptIcon,
	GtagIcon,
	SEOIcon,
	MetaPixelIcon,
};

interface TechnologyBadgeProps {
	name: string;
	icon?: string;
}

export default function TechnologyBadge({ name, icon }: TechnologyBadgeProps) {
	const IconComponent = icon ? iconMap[icon] : null;

	return (
		<div className="flex items-center gap-2 px-3 py-1.5 rounded-[10px] border border-[#D4D4D4] bg-[#1e1e1e] text-white text-[11px] font-outfit">
			{IconComponent && <IconComponent className="w-4 h-4" />}
			<span>{name}</span>
		</div>
	);
}
