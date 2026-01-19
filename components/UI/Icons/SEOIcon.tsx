import { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & {
	width?: number | string;
	height?: number | string;
};

const SEOIcon = ({ width = 512, height = 512, ...props }: Props) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={width}
		height={height}
		// style={{
		// 	enableBackground: "new 0 0 512 512",
		// }}
		viewBox="0 0 512 512"
		xmlSpace="preserve"
		{...props}>
		<g data-name="50-SEO copy">
			<path
				fill="#EA4235"
				d="M412 161a95 95 0 1 0 95 95 95 95 0 0 0-95-95zm0 153.46A58.46 58.46 0 1 1 470.46 256 58.52 58.52 0 0 1 412 314.46z"
				data-original="#ea4235"
			/>
			<path
				fill="#4385F5"
				d="M114.663 260.069a73.083 73.083 0 0 0-15.227-10.584l-42.73-22.469a36.621 36.621 0 0 1-7.624-5.243C45.491 218.5 52.861 202.822 64.905 201c7.637-1.15 26.714-1.565 38.974 19.438L135 199.43c-16.433-28.152-44.556-42.19-75.206-37.56-25.534 3.857-45.655 19.82-51.261 40.668-4.68 17.4 1.445 35.408 16.8 49.393a73.178 73.178 0 0 0 15.226 10.584l42.741 22.47a36.652 36.652 0 0 1 7.621 5.241C94.507 293.5 87.139 309.178 75.1 311c-7.634 1.152-26.714 1.565-38.974-19.438L5 312.57c13.517 23.155 34.938 36.764 59.177 38.287a75.523 75.523 0 0 0 16.028-.728c25.535-3.857 45.655-19.819 51.261-40.667 4.68-17.405-1.444-35.408-16.803-49.393z"
				data-original="#4385f5"
			/>
			<path
				fill="#FABC05"
				d="M219 198.688v35h66v40h-66v35h66v40H175v-190h110v40z"
				data-original="#fabc05"
			/>
		</g>
	</svg>
);

export default SEOIcon;
