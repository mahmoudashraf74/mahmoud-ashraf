"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { projectLogos } from "@/constants/projectsSwiper";

export default function ProjectsLogoSwiper() {
	return (
		<div className="relative w-full px-2">
			<Swiper
				modules={[Autoplay]}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
				loop={true}
				slidesPerView={2.5}
				spaceBetween={30}
				breakpoints={{
					640: {
						slidesPerView: 2.5,
					},
					768: {
						slidesPerView: 4.5,
					},
					1024: {
						slidesPerView: 5.5,
					},
				}}
				className="w-full">
				{projectLogos?.map((logo) => (
					<SwiperSlide key={logo.id} className="flex justify-center">
						<Link
							href={logo?.link}
							title={logo.alt}
							target="_blank"
							rel="noopener noreferrer"
							className="h-20 flex items-center justify-center">
							<img
								src={logo.src}
								alt={logo.alt}
								title={logo.link}
								className="h-full object-contain"
							/>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
