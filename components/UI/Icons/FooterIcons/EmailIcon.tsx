import { SVGProps } from "react";

const EmailIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={61}
		height={61}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<g filter="url(#a)">
			<rect
				y={0.069}
				width={60.046}
				height={60}
				rx={14}
				transform="rotate(-.066 0 .07)"
				fill="#292A2A"
			/>
			<path
				d="M16.724 16.702h26.667c1.833 0 3.333 1.5 3.333 3.333v20c0 1.834-1.5 3.334-3.333 3.334H16.724a3.343 3.343 0 0 1-3.333-3.334v-20c0-1.833 1.5-3.333 3.333-3.333Z"
				stroke="#fff"
				strokeWidth={3.333}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M46.724 20.035 30.058 31.702 13.39 20.035"
				stroke="#fff"
				strokeWidth={3.333}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</g>
		<defs>
			<filter
				id="a"
				x={0}
				y={0}
				width={60.115}
				height={60.069}
				filterUnits="userSpaceOnUse"
				colorInterpolationFilters="sRGB">
				<feFlood floodOpacity={0} result="BackgroundImageFix" />
				<feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
				<feColorMatrix
					in="SourceAlpha"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feMorphology
					radius={1}
					in="SourceAlpha"
					result="effect1_innerShadow_128_13180"
				/>
				<feOffset />
				<feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
				<feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.06 0" />
				<feBlend in2="shape" result="effect1_innerShadow_128_13180" />
				<feColorMatrix
					in="SourceAlpha"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset dy={1} />
				<feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
				<feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
				<feBlend
					in2="effect1_innerShadow_128_13180"
					result="effect2_innerShadow_128_13180"
				/>
			</filter>
		</defs>
	</svg>
);

export default EmailIcon;
