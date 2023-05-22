"use client"; 

import Image from 'next/image'
import PreviewArticle from './preview-article'
import Album from './album'
import Film from './film'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Fade from 'react-reveal/Fade'
import Slider from "react-slick"
import {useEffect, useState} from "react";

export default function Home() {
	var settings = {
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		centerMode: true,
		slidesToScroll: 1
	};

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
				<h2>
					<Fade left cascade>
						<p className='highlight-secondary'>Derniers articles en </p>
					</Fade>
					<Fade left cascade>
						date
					</Fade>
				</h2>
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
				<h2 className='text-black'>
					<Fade left cascade>
						<p className='highlight-secondary'>En ce </p>
					</Fade>
					<Fade left cascade>
						moment
					</Fade>
				</h2>
				<div className='albums-films-wrapper lg:flex'>
					<div className='albums-wrapper'>
						<h3>Albums</h3>
						<div className='albums-items lg:flex'>
							<Slider {...settings} className="lg:hidden">
								<Album/>
								<Album/>
								<Album/>
							</Slider>
							<div className="items-no-slideshow hidden lg:flex lg:w-full">
								<Album/>
								<Album/>
								<Album/>
							</div>
						</div>
					</div>
					<div className='films-wrapper'>
						<h3>Films</h3>
						<div className='films-items lg:flex'>
							<Slider {...settings} className="lg:hidden">
								<Film/>
								<Film/>
								<Film/>
							</Slider>
							<div className="items-no-slideshow hidden lg:flex lg:w-full">
								<Film/>
								<Film/>
								<Film/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
