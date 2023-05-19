"use client"; 

import Image from 'next/image';
import PreviewArticle from './preview-article'
import Album from './album'
import Film from './film'

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
			<div className="recent-articles-container bg-primary">
				<h2><span className='highlight-secondary'>Derniers articles en </span>date</h2>
				<div className='articles-wrapper lg:flex lg:items-start'>
					<div className='main-article'>
						<PreviewArticle/>
					</div>
					<div className='recent-articles-grid flex justify-center items-center flex-wrap lg:justify-end'>
						<PreviewArticle/>
						<PreviewArticle/>
						<PreviewArticle/>
						<PreviewArticle/>
						<PreviewArticle/>
						<PreviewArticle/>
						<PreviewArticle/>
						<PreviewArticle/>
					</div>
				</div>
			</div>
			<div className="moment-container bg-white">
				<h2 className='text-black'><span className='highlight-secondary'>En ce </span>moment</h2>
				<div className='albums-films-wrapper lg:flex'>
					<div className='albums-wrapper'>
						<h3>Albums</h3>
						<div className='albums-items lg:flex'>
							<Album/>
							<Album/>
							<Album/>
						</div>
					</div>
					<div className='films-wrapper'>
						<h3>Films</h3>
						<div className='films-items lg:flex'>
							<Film/>
							<Film/>
							<Film/>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
