"use client"; 

import Image from 'next/image'

export default function Film() {

	return (
		<main className='film'>
			<a className="film-image-link" href='Redirection vers Allociné'>
				<span className='link-to hidden lg:block'>En savoir plus</span>
				<Image
					className="image-film"
					src="/film-placeholder.png"
					alt="Film cover"
					width={204}
					height={204}
					priority
				/>
			</a>
			<p className='film-artist'>Steven Spielberg</p>
			<p className='film-name'>Jurassic Park</p>
		</main>
	)
}
