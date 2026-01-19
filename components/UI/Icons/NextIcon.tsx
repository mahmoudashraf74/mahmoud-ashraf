import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
	width?: number | string;
	height?: number | string;
};

const NextIcon = ({ width = 41, height = 41, ...props }: Props) => (
	<svg
		width={width}
		height={height}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 41 41"
		{...props}>
		<g clipPath="url(#a)">
			<path
				d="M20.057 39.353c10.677-.015 19.32-8.681 19.305-19.356C39.347 9.322 30.68.68 20.002.696 9.323.71.68 9.377.695 20.052c.015 10.675 8.683 19.316 19.36 19.3Z"
				fill="#000"
				stroke="#fff"
				strokeWidth={1.333}
			/>
			<path
				d="M33.275 35.006 15.383 12.033l-3.365.005.022 15.99 2.692-.004-.018-12.572 16.45 21.185a20.07 20.07 0 0 0 2.11-1.63Z"
				fill="#fff"
			/>
			<path
				d="m28.24 12.015-2.667.004.023 15.996 2.667-.004-.023-15.996Z"
				fill="#fff"
			/>
		</g>
		<defs>
			<clipPath id="a">
				<rect
					y={0.058}
					width={40}
					height={39.99}
					rx={6}
					transform="rotate(-.082 0 .058)"
					fill="#fff"
				/>
			</clipPath>
		</defs>
	</svg>
);

export default NextIcon;
