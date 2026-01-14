import { LucideIcon } from "lucide-react";

interface SkillIconCardProps {
	icon: LucideIcon;
	name: string;
	color?: string;
}

export default function SkillIconCard({ icon: Icon, name, color = "#FAFAFA" }: SkillIconCardProps) {
	return (
		<div className="flex items-center justify-center p-2.5 rounded-[14px] bg-[#292A2A] border border-white/10 shadow-[0_1px_0_0_rgba(255,255,255,0.10)_inset,0_0_0_1px_rgba(255,255,255,0.06)_inset] hover:border-white/20 transition-colors">
			<div className="flex items-center justify-center w-10 h-10 rounded-[6px]">
				<Icon size={24} color={color} strokeWidth={1.5} />
			</div>
		</div>
	);
}
