"use server";

import { IAnimeItem } from "@/@types/IAnimeItem";
import { AnimeCard } from "@/components/AnimeCard";

export async function fetchAnime(page: number) {
	try {
		const response = await fetch(
			`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
		);
		const data = await response.json();

		return data.map((item: IAnimeItem, index: number) => (
			<AnimeCard key={item.id} {...item} index={index} />
		));
	} catch (error) {
		console.error(error);
	}
}
