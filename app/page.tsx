"use client"; 

import Image from 'next/image';
import PreviewArticle from './preview-article'

export default function Home() {
	return (
		<main className="homepage bg-slate-600">
			<h1 className="sr-only">HomePage - Double Croche</h1>
			<div className="banner-container flex justify-end items-end">
				<Image
					src="/banner-placeholder-mobile.png"
					alt="Banner Background"
					className="background-image backgound-banner-image-mobile lg:hidden"
					width={100}
					height={40}
				/>
				<Image
					src="/banner-placeholder-desktop.png"
					alt="Banner Background"
					className="background-image backgound-banner-image-desktop hidden lg:block"
					width={100}
					height={40}
				/>
				<PreviewArticle/>
			</div>
		</main>
	)
}
