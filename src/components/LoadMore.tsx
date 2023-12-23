"use client";

import { fetchAnime } from "@/app/action";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { IAnimeCard } from "@/@types/IAnimeCard";

let currentPage = 2;

export function LoadMore() {
	const { ref, inView } = useInView();
	const [animeList, setAnimeList] = useState<IAnimeCard[]>([]);

	useEffect(() => {
		if (!inView) {
			return;
		}

		const fetchAnimeList = async () => {
			const response = await fetchAnime(currentPage);
			setAnimeList((prevState) => [...prevState, ...response]);
			currentPage++;
		};

		fetchAnimeList();
	}, [inView, animeList]);

	return (
		<section className="flex justify-center items-center w-full flex-col gap-10">
			<section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
				{animeList}
			</section>
			<div ref={ref}>
				<Image
					src="/spinner.svg"
					alt="spinner"
					width={56}
					height={56}
					className="object-contain"
				/>
			</div>
		</section>
	);
}
