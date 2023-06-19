"use client"; 

import {useState} from 'react';
import {useEffect} from 'react';

import Link from 'next/link';

import Image from 'next/image';
import ArticlesNavMusic from '../molecules/articles-nav-music'
import ArticlesNavCinema from '../molecules/articles-nav-cinema'

export default function Navigation() {

	const [burgerIsOpen, setBurgerIsOpen] = useState(false);
	const burgerClick = () => {
		setBurgerIsOpen(burgerIsOpen => !burgerIsOpen);
	};

	const [scroll, setScroll] = useState(false);
		useEffect(() => {
			window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 0);
		});
	}, []);

	const desktopMenuEnabled = (itemName:any) => {
		let itemSelected = itemName.target.id;
		let subnavigations = document.querySelectorAll('.level-0 .subnavigation');

		subnavigations.forEach(subnavigation => {
			subnavigation.classList.remove('active');
			if(itemSelected + '-subnavigation' == subnavigation.id) {
				subnavigation.classList.add('active');
			}
		});
	};

	const desktopMenuDisabled = () => {
		let subnavigations = document.querySelectorAll('.level-0 .subnavigation');
		subnavigations.forEach(subnavigation => {
			subnavigation.classList.remove('active');
		});
	};

	return (
		<main className={`navigation h-auto w-full relative ${scroll ? 'scroll' : ''}`}>
			<div className='nav-container flex content-between items-center lg:max-w-screen-2xl lg:mx-auto'>
				<div className='logo-wrapper flex justify-items-center w-3/4'>
					<Link href="">
						<Image
							src="/next.svg"
							alt="Double-Croche Logo"
							className="main-logo mr-2 inline-block bg-white"
							width={40}
							height={40}
						/>
						<span className='text-white uppercase'>Double-Croche</span>
					</Link>
				</div>
				<div className={`navigation-wrapper mobile-view w-1/4 lg:hidden ${burgerIsOpen ? 'open' : ''}`}>
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
										<Link href="./musique/interviews" onClick={burgerClick}>Interviews</Link>
									</li>
									<li>
										<Link href="./musique/playlists" onClick={burgerClick}>Playlists</Link>
									</li>
									<li>
										<Link href="./musique/festivals" onClick={burgerClick}>Festivals</Link>
									</li>
								</ul>
							</li>
							<li className='item-nav'>
								<span>CINÉMA</span>
								<ul className='level-1'>
									<li>
										<Link href="./cinema/interviews" onClick={burgerClick}>Interviews</Link>
									</li>
									<li>
										<Link href="./cinema/chroniques" onClick={burgerClick}>Chroniques</Link>
									</li>
									<li>
										<Link href="./cinema/festivals" onClick={burgerClick}>Festivals</Link>
									</li>
								</ul>
							</li>
							<li className='item-nav'>
								<Link href="./concours" onClick={burgerClick}>CONCOURS</Link>
							</li>
							<li className='item-nav'>
								<Link href="./agenda" onClick={burgerClick}>AGENDA</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className='navigation-wrapper desktop-view w-1/2 hidden lg:block'>
					<div className='items-nav-wrapper flex justify-items-center w-full lg:items-end'>
						<ul className='level-0 flex text-white w-full justify-end'>
							<li id='music' className='item-nav' onMouseEnter={desktopMenuEnabled} onMouseLeave={desktopMenuDisabled}>
								MUSIQUE
								<div id='music-subnavigation' className='subnavigation'>
									<div className='subnavigation-container'>
										<ul className='level-1'>
											<li onClick={desktopMenuDisabled}>
												<Link href="./musique/interviews">Interviews</Link>
											</li>
											<li onClick={desktopMenuDisabled}>
												<Link href="./musique/playlists">Playlists</Link>
											</li>
											<li onClick={desktopMenuDisabled}>
												<Link href="./musique/festivals">Festivals</Link>
											</li>
										</ul>
										<div className='recent-articles' onClick={desktopMenuDisabled}>
											<ArticlesNavMusic />
										</div>
									</div>
								</div>
							</li>
							<li id='cinema' className='item-nav' onMouseEnter={desktopMenuEnabled} onMouseLeave={desktopMenuDisabled}>
								CINÉMA
								<div id='cinema-subnavigation' className='subnavigation'>
									<div className='subnavigation-container'>
										<ul className='level-1'>
											<li onClick={desktopMenuDisabled}>
												<Link href="./cinema/interviews">Interviews</Link>
											</li>
											<li onClick={desktopMenuDisabled}>
												<Link href="./cinema/chroniques">Chroniques</Link>
											</li>
											<li onClick={desktopMenuDisabled}>
												<Link href="./cinema/festivals">Festivals</Link>
											</li>
										</ul>
										<div className='recent-articles' onClick={desktopMenuDisabled}>
											<ArticlesNavCinema />
										</div>
									</div>
								</div>
							</li>
							<li className='item-nav'>
								<Link href="./concours">CONCOURS</Link>
							</li>
							<li className='item-nav'>
								<Link href="./agenda">AGENDA</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</main>
	)
}
