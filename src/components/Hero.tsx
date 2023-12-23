import Image from "next/image";

export function Hero() {
	return (
		<section className=" bg-hero bg-center bg-cover bg-no-repeat w-full">
			<div className="min-h-screen wrapper flex items-center justify-center lg:justify-between flex-col  gap-8 lg:flex-row">
				<div className="flex items-center flex-col justify-center gap-10 lg:items-start">
					<Image
						src="/logo.svg"
						alt="Anime Vault Logo"
						width={101}
						height={96}
						className="object-contain"
					/>
					<h1 className="text-center font-bold leading-[120%] lg:text-6xl lg:text-left text-3xl max-w-[350px] lg:max-w-[500px]">
						Explore The{" "}
						<span className="red-gradient">Diverse Realms</span> of
						Anime Magic
					</h1>
				</div>
				<div className="relative w-full lg:flex-1 h-[40vh] lg:h-[50vh]">
					<Image
						src="/anime.png"
						alt="Anime Image"
						fill
						className="object-contain"
					/>
				</div>
			</div>
		</section>
	);
}
