import LetsConnectButton from "@/components/shared/LetsConnectButton";

export default function FooterLeft() {
	return (
		<div className="flex flex-col gap-6 w-full md:w-[50%]  ">
			<h2 className="text-4xl md:text-5xl lg:text-[67px] leading-tight font-outfit">
				<span
					className="text-white"
					style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.25)" }}>
					Let&apos;s Have{" "}
				</span>
				<span
					className="text-[#0C6F4C]"
					style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.25)" }}>
					a Chat
				</span>
			</h2>
			<p className="text-[#D4D4D4] text-lg md:text-xl lg:text-2xl font-outfit leading-relaxed">
				Want to chat design, products, anything digital or just grab a smoothie?
				Hit me up!
			</p>
			<div className="mt-4">
				<LetsConnectButton />
			</div>
		</div>
	);
}
