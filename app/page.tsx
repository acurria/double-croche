"use client";

import BannerHomepage from "./../src/components/molecules/banner-homepage";
import ArticlesHomepage from "./../src/components/molecules/articles-homepage";
import AlbumsHomepage from "./../src/components/molecules/albums-homepage";
import FilmsHomepage from "./../src/components/molecules/films-homepage";
import Loader from '@/src/components/organisms/loader';

import React, {useState, useEffect} from "react";

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// @ts-ignore
import Fade from 'react-reveal/Fade'
import Cookies from 'js-cookie'
import Script from "next/script";

export default function Home() {

	const [isFirstVisit, setIsFirstVisit] = useState(false);

    if (!isFirstVisit) {
		const hasVisitedBefore = Cookies.get('hasVisitedMyPage') === 'true';
		if (!hasVisitedBefore) {
			setIsFirstVisit(true);
			Cookies.set('hasVisitedMyPage', 'true');
		}
	}

	return (
		<div className="homepage bg-slate-600 page-main">
			{isFirstVisit && <Loader />}
			<h1 className="sr-only">Double-Croche - Actualité musique et cinéma</h1>
			<BannerHomepage />
			<div className="recent-articles-container bg-primary">
				<div className='recent-articles-wrapper lg:max-w-screen-2xl lg:mx-auto'>
					<h2>
						<Fade left cascade>
							<p className='highlight-secondary'>Derniers articles </p>
						</Fade>
						<Fade left cascade>
							en date
						</Fade>
					</h2>
					<div className='articles-wrapper'>
						<ArticlesHomepage />
					</div>
				</div>
			</div>
			<div className="moment-container bg-white">
				<div className='moment-wrapper lg:max-w-screen-2xl lg:mx-auto'>
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
							<AlbumsHomepage/>
						</div>
						<div className='films-wrapper'>
							<h3>Films</h3>
							<FilmsHomepage/>
						</div>
					</div>
				</div>
			</div>
			<Script async src="https://www.googletagmanager.com/gtag/js?id=UA-80564203-1" />
			<Script id="google-analytics">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
	
					gtag('config', 'UA-80564203-1');
				`}
			</Script>
		</div>
	)
}
