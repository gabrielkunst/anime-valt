import { IAnimeItem } from "@/@types/IAnimeItem";
import { AnimeCard } from "@/components/AnimeCard";
import { LoadMore } from "@/components/LoadMore";
import { data as TEMP_LIST } from "@/data";

export default function HomePage() {
	return (
		<main className="sm:p-16 py-16 px-8 flex flex-col gap-10 wrapper">
			<h2 className="text-3xl text-white font-bold">Explore Anime</h2>

			<section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
				{TEMP_LIST.map((item: IAnimeItem) => (
					<AnimeCard key={item.id} {...item} />
				))}
			</section>
			<LoadMore />
		</main>
	);
}
