import type { Metadata } from "next";
import Script from "next/script";
import { Outfit, Instrument_Serif, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
	variable: "--font-outfit",
	subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
	variable: "--font-instrument-serif",
	subsets: ["latin"],
	weight: ["400"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Mahmoud Ashraf - Front-End Developer",
	description:
		"Senior Front-End Developer with 3+ years building e-commerce and data-driven web apps using React, Next.js, and TypeScript. Strong in Redux, GraphQL/REST integrations, responsive UI, and performance/accessibility best practices. partnering closely with design and backend to deliver maintainable, high-quality UI.",
	keywords: [
		"Front-End Developer",
		"React Developer",
		"Next.js Developer",
		"TypeScript",
		"Web Developer",
		"E-commerce",
		"GraphQL",
		"Redux",
		"Tailwind CSS",
		"Full-Stack",
	],
	authors: [
		{
			name: "Mahmoud Ashraf",
			url: "https://mahmoud-ashraf-yaqout.vercel.app/",
		},
	],
	creator: "Mahmoud Ashraf",
	metadataBase: new URL("https://mahmoud-ashraf-yaqout.vercel.app/"),
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://mahmoud-ashraf-yaqout.vercel.app/",
		siteName: "Mahmoud Ashraf Portfolio",
		title: "Mahmoud Ashraf - Senior Front-End Developer",
		description:
			"Explore my portfolio showcasing e-commerce platforms and web applications built with React, Next.js, and modern web technologies.",
		images: [
			{
				url: "/assets/images/myImage.jpg",
				width: 1200,
				height: 630,
				alt: "Mahmoud Ashraf - Front-End Developer",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Mahmoud Ashraf - Senior Front-End Developer",
		description:
			"Senior Front-End Developer specialized in React, Next.js, and modern web technologies.",
		creator: "@mahmoudashraf",
		images: ["/assets/images/myImage.jpg"],
	},
	robots: {
		index: true,
		follow: true,
		"max-image-preview": "large",
		"max-snippet": -1,
		"max-video-preview": -1,
		googleBot: "index, follow",
	},
	verification: {
		google: "your-google-verification-code",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const schemaData = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Mahmoud Ashraf",
		url: "https://mahmoud-ashraf-yaqout.vercel.app/",
		image: "https://mahmoud-ashraf-yaqout.vercel.app/assets/images/myImage.jpg",
		sameAs: [
			"https://www.linkedin.com/in/mahmoud-ashraf-yaqout/",
			"https://github.com/mahmoudashraf74",
			"https://twitter.com/mahmoudashraf",
		],
		jobTitle: "Senior Front-End Developer",
		description:
			"Senior Front-End Developer with 3+ years building e-commerce and data-driven web apps using React, Next.js, and TypeScript.",
		expertise: [
			"React",
			"Next.js",
			"TypeScript",
			"GraphQL",
			"Redux",
			"Tailwind CSS",
			"E-commerce",
		],
		knowsAbout: [
			"Web Development",
			"Front-End Development",
			"React",
			"Next.js",
			"TypeScript",
			"JavaScript",
			"GraphQL",
			"REST APIs",
		],
	};

	return (
		<html lang="en">
			<head>
				<Script
					id="schema-org"
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
				/>
			</head>
			<body
				className={`${outfit.variable} ${instrumentSerif.variable} ${geistMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
