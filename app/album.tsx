"use client"; 

import Image from 'next/image'

export default function Album() {

	return (
		<main className='album'>
			<a className="album-image-link" href='' title='Redirection vers Spotify'>
				<span className='link-to'>Écouter</span>
				<Image
					className="image-album"
					src="/album-placeholder.png"
					alt="Album cover"
					width={204}
					height={204}
					priority
				/>
			</a>
			<p className='album-artist'>Daft Punk</p>
			<p className='album-name'>Around the world</p>
		</main>
	)
}
