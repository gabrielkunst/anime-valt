import Image from "next/image";

const CURRENT_YEAR = new Date().getFullYear();
const FOOTER_LINKS = ["/tiktok.svg", "/twitter.svg", "/instagram.svg"];

export function Footer() {
	return (
		<footer className="bg-darkSecondary">
			<div className="wrapper py-4 flex items-center justify-center flex-col gap-4 md:flex-row md:justify-between">
				<div>
					<Image
						src="/logo.svg"
						alt="Anime Vault Logo"
						width={80}
						height={70}
						className="object-contain"
					/>
				</div>
				<p className="font-bold text-lg">
					@{CURRENT_YEAR} EpicAnimeVault
				</p>
				<div className="flex items-center justify-center gap-4">
					{FOOTER_LINKS.map((link) => (
						<Image
							key={link}
							src={link}
							alt="Social Media Link"
							width={24}
							height={24}
							className="object-contain"
						/>
					))}
				</div>
			</div>
		</footer>
	);
}
