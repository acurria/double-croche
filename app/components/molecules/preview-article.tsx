"use client"; 

import Image from 'next/image'

export default function PreviewArticle() {

	return (
		<main className='preview-article'>
			<a className="link-image" href=''>
				<span className='read-article link-to hidden lg:block'>Voir l'article</span>
				<Image
					className="image-preview-article"
					src="/album-placeholder.png"
					alt="Vercel Logo"
					width={500}
					height={24}
					priority
				/>
			</a>
			<p className='category-subcategory'>
				<span className='category'>Musique</span>
				<span className='subcategory'> - Interview</span>
			</p>
			<p className='title-info'>
				<span className='info'><span className='highlight-secondary'>DAFT PUNK</span> pour “Album de l’année”</span>
			</p>
			<a className="link" href=''>Lire l'article</a>
		</main>
	)
}
