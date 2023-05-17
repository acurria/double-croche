"use client"; 

import {useState} from 'react';
import {useEffect} from 'react';

import Image from 'next/image';
import PreviewArticle from './preview-article'

export default function Navigation() {

	const [isOpen, setIsOpen] = useState(false);
	const burgerClick = () => {
		setIsOpen(isOpen => !isOpen);
	};

	const [scroll, setScroll] = useState(false);
		useEffect(() => {
			window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 0);
		});
	}, []);

	return (
		<main className={`navigation h-auto w-full relative ${scroll ? 'scroll' : ''}`}>
			<div className='nav-container flex content-between items-center lg:max-w-screen-2xl lg:mx-auto'>
				<div className='logo-wrapper flex justify-items-center w-3/4'>
					<a href='#'>
						<Image
							src="/next.svg"
							alt="Double-Croche Logo"
							className="main-logo mr-2 inline-block bg-white"
							width={40}
							height={40}
						/>
						<span className='text-white uppercase'>Double-Croche</span>
					</a>
				</div>
				<div className={`navigation-wrapper mobile-view w-1/4 lg:hidden ${isOpen ? 'open' : ''}`}>
					<div className='burger-nav flex justify-items-center flex-col items-end cursor-pointer' onClick={burgerClick}>
						<span className='bar top-bar h-0.5 w-7 bg-white'></span>
						<span className='bar middle-bar h-0.5 w-8 bg-white my-1.5'></span>
						<span className='bar bottom-bar h-0.5 w-6 bg-white'></span>
					</div>
					<div className='items-nav-wrapper flex justify-items-center bg-black left-0 w-full absolute h-screen lg:flex lg:static lg:items-end'>
						<ul className='level-0 flex text-white flex-col w-full'>
							<li className='item-nav'>
								<span>MUSIQUE</span>
								<ul className='level-1'>
									<li>
										<a href=''>Interview</a>
									</li>
									<li>
										<a href=''>Playlists</a>
									</li>
									<li>
										<a href=''>Festivals</a>
									</li>
								</ul>
							</li>
							<li className='item-nav'>
								<span>CINÉMA</span>
								<ul className='level-1'>
									<li>
										<a href=''>Chroniques</a>
									</li>
									<li>
										<a href=''>Playlists</a>
									</li>
									<li>
										<a href=''>Festivals</a>
									</li>
								</ul>
							</li>
							<li className='item-nav'>
								<a href=''>CONCOURS</a>
							</li>
							<li className='item-nav'>
								<a href=''>AGENDA</a>
							</li>
						</ul>
					</div>
				</div>
				<div className='navigation-wrapper desktop-view w-1/2 hidden lg:block'>
					<div className='items-nav-wrapper flex justify-items-center w-full lg:items-end'>
						<ul className='level-0 flex text-white w-full justify-end'>
							<li className='item-nav'>
								<span>MUSIQUE</span>
								<div className='subnavigation'>
									<div className='subnavigation-container'>
										<ul className='level-1'>
											<li>
												<a href=''>Interview</a>
											</li>
											<li>
												<a href=''>Playlists</a>
											</li>
											<li>
												<a href=''>Festivals</a>
											</li>
										</ul>
										<div className='recent-articles'>
											<div className='article'>
												<PreviewArticle/>
											</div>
											<div className='article'>
												<PreviewArticle/>
											</div>
											<div className='article'>
												<PreviewArticle/>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li className='item-nav'>
								<span>CINEMA</span>
								<div className='subnavigation'>
									<div className='subnavigation-container'>
										<ul className='level-1'>
											<li>
												<a href=''>Chroniques</a>
											</li>
											<li>
												<a href=''>Playlists</a>
											</li>
											<li>
												<a href=''>Festivals</a>
											</li>
										</ul>
										<div className='recent-articles'>
											<div className='article'>
												<PreviewArticle/>
											</div>
											<div className='article'>
												<PreviewArticle/>
											</div>
											<div className='article'>
												<PreviewArticle/>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li className='item-nav'>
								<a href=''>CONCOURS</a>
							</li>
							<li className='item-nav'>
								<a href=''>AGENDA</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</main>
	)
}
