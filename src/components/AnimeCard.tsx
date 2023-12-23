import { IAnimeItem } from "@/@types/IAnimeItem";
import Image from "next/image";
import { MotionDiv } from "./MotionDiv";

interface AnimeCardProps {
	index: number;
}

const variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

export function AnimeCard({
	episodes,
	episodes_aired,
	image,
	kind,
	name,
	score,
	index,
}: IAnimeItem & AnimeCardProps) {
	return (
		<MotionDiv
			className="max-w-sm rounded relative w-full"
			variants={variants}
			initial="hidden"
			animate="visible"
			transition={{
				duration: 0.5,
				delay: index * 0.25,
				ease: "easeInOut",
			}}
			viewport={{ amount: 0 }}
		>
			<div className="relative w-full h-[37vh]">
				<Image
					src={`https://shikimori.one${image.original}`}
					alt={name}
					fill
					className="rounded-xl"
				/>
			</div>
			<div className="py-4 flex flex-col gap-3">
				<div className="flex justify-between items-center gap-1">
					<h2 className="font-bold text-white text-xl line-clamp-1 w-full">
						{name}
					</h2>
					<div className="py-1 px-2 bg-darkSecondary rounded-sm">
						<p className="text-white text-sm font-bold capitalize">
							{kind}
						</p>
					</div>
				</div>
				<div className="flex gap-4 items-center">
					<div className="flex flex-row gap-2 items-center">
						<Image
							src="./episodes.svg"
							alt="episodes"
							width={20}
							height={20}
							className="object-contain"
						/>
						<p className="text-base text-white font-bold">
							{episodes || episodes_aired}
						</p>
					</div>
					<div className="flex flex-row gap-2 items-center">
						<Image
							src="./star.svg"
							alt="star"
							width={18}
							height={18}
							className="object-contain"
						/>
						<p className="text-base font-bold text-gold">{score}</p>
					</div>
				</div>
			</div>
		</MotionDiv>
	);
}
