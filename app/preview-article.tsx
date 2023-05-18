"use client"; 

import {useState} from 'react';
import {useEffect} from 'react';

import Image from 'next/image'

export default function PreviewArticle() {

	return (
		<main className='preview-article'>
			<a className="link-image" href=''>
				<Image
					className="image-preview-article"
					src="/placeholder.png"
					alt="Vercel Logo"
					width={100}
					height={24}
					priority
				/>
			</a>
			<p>
				<span className='category'>Musique</span>
				<span className='subcategory'> - Interview</span>
			</p>
			<p>
				<span className='info'>DAFT PUNK pour “Album de l’année”</span>
			</p>
			<a className="link" href=''>Lire l'article</a>
		</main>
	)
}
