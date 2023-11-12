"use client";

import {useState, useRef} from 'react';
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

	const [searchIsOpen, setSearchIsOpen] = useState(false);
	const openSearch = () => {
		setSearchIsOpen(searchIsOpen => !searchIsOpen);
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

	const [searchValue, setSearchValue] = useState('');

	return (
		<div>
			<nav className={`navigation w-full relative ${scroll ? 'scroll' : ''}`}>
				<div className='nav-container flex content-between items-center justify-between lg:max-w-screen-2xl lg:mx-auto'>
					<div className='logo-wrapper flex justify-items-center w-3/4'>
						<Link href="/" aria-label="Retour à l'accueil">
							<Image
								priority
								src="/logo-white.svg"
								alt="Double-Croche Logo"
								className="main-logo mr-2 inline-block"
								width={60}
								height={60}
							/>
							<span className='text-white uppercase sr-only'>Double-Croche</span>
						</Link>
					</div>
					<div className={`navigation-wrapper mobile-view lg:hidden ${burgerIsOpen ? 'open' : ''}`}>
						<div className='wrapper-search-burger'>
							<button id='search-icon' className='search-wrapper-icon' onClick={openSearch}>
								<Image
									priority
									src="/search-icon.png"
									alt="Icone de recherche"
									className="search-icon"
									width={23}
									height={23}
								/>
							</button>
							<div className='burger-nav flex justify-items-center flex-col items-end cursor-pointer' onClick={burgerClick}>
								<span className='bar top-bar h-0.5 w-7 bg-white'></span>
								<span className='bar middle-bar h-0.5 w-8 bg-white my-1.5'></span>
								<span className='bar bottom-bar h-0.5 w-6 bg-white'></span>
							</div>
						</div>
						<div className='items-nav-wrapper flex justify-items-center bg-black left-0 w-full absolute h-screen lg:flex lg:static lg:items-end'>
							<ul className='level-0 flex text-white flex-col w-full'>
								<li className='item-nav'>
									<span>MUSIQUE</span>
									<ul className='level-1'>
										<li>
											<Link href={`/musique/interviews`} onClick={burgerClick} aria-label="Aller à Musique Interview">Interviews</Link>
										</li>
										<li>
											<Link href={`/musique/playlists`} onClick={burgerClick} aria-label="Aller à Musique Playlist">Playlists</Link>
										</li>
										<li>
											<Link href={`/musique/festivals`} onClick={burgerClick} aria-label="Aller à Musique Festivals">Festivals</Link>
										</li>
									</ul>
								</li>
								<li className='item-nav'>
									<span>CINÉMA</span>
									<ul className='level-1'>
										<li>
											<Link href={`/cinema/interviews`} onClick={burgerClick} aria-label="Aller à Cinéma Interview">Interviews</Link>
										</li>
										<li>
											<Link href={`/cinema/chroniques`} onClick={burgerClick} aria-label="Aller à Cinéma Chroniques">Chroniques</Link>
										</li>
										<li>
											<Link href={`/cinema/festivals`} onClick={burgerClick} aria-label="Aller à Cinéma Festivals">Festivals</Link>
										</li>
									</ul>
								</li>
								<li className='item-nav'>
									<Link href={`/concours`} onClick={burgerClick} aria-label="Aller à Concours">CONCOURS</Link>
								</li>
								<li className='item-nav'>
									<Link href={`/agenda`} onClick={burgerClick} aria-label="Aller à Agenda">AGENDA</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className='navigation-wrapper desktop-view hidden lg:block'>
						<div className='items-nav-wrapper flex justify-items-center w-full lg:items-end'>
							<ul className='level-0 flex text-white w-full justify-end'>
								<li id='music' className='item-nav' onMouseEnter={desktopMenuEnabled} onMouseLeave={desktopMenuDisabled}>
									MUSIQUE
									<div id='music-subnavigation' className='subnavigation'>
										<div className='subnavigation-container'>
											<ul className='level-1'>
												<li onClick={desktopMenuDisabled}>
													<Link href={`/musique/interviews`} aria-label="Aller à Musique Interview">Interviews</Link>
												</li>
												<li onClick={desktopMenuDisabled}>
													<Link href={`/musique/playlists`} aria-label="Aller à Musique Playlist">Playlists</Link>
												</li>
												<li onClick={desktopMenuDisabled}>
													<Link href={`/musique/festivals`} aria-label="Aller à Musique Festival">Festivals</Link>
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
													<Link href={`/cinema/interviews`} aria-label="Aller à Musique Interview">Interviews</Link>
												</li>
												<li onClick={desktopMenuDisabled}>
													<Link href={`/cinema/chroniques`} aria-label="Aller à Musique Chroniques">Chroniques</Link>
												</li>
												<li onClick={desktopMenuDisabled}>
													<Link href={`/cinema/festivals`} aria-label="Aller à Musique Festivals">Festivals</Link>
												</li>
											</ul>
											<div className='recent-articles' onClick={desktopMenuDisabled}>
												<ArticlesNavCinema />
											</div>
										</div>
									</div>
								</li>
								<li className='item-nav'>
									<Link href={`/concours`} aria-label="Aller à Concours">CONCOURS</Link>
								</li>
								<li className='item-nav'>
									<Link href={`/agenda`} aria-label="Aller à Agenda">AGENDA</Link>
								</li>
							</ul>
						</div>
						<button id='search-icon' className='search-wrapper-icon' onClick={openSearch}>
							<Image
								priority
								src="/search-icon.png"
								alt="Icone de recherche"
								className="search-icon"
								width={23}
								height={23}
							/>
						</button>
					</div>
				</div>
			</nav>
			<div id='searchbar-wrapper' className={`searchbar-wrapper ${searchIsOpen ? 'open' : ''}`}>
				<div className='searchbar'>
					<label htmlFor='searchbar-field' className='sr-only'>Rechercher</label>
					<div className='search-field-button-wrapper'>
						<form action={`/recherche`}>
							<input id='input-search' type='search' autoComplete='off' className='searchbar-field'
								   placeholder='Rechercher' name='result' value={searchValue}
								   onChange={(event) => setSearchValue(event.target.value)}/>
							<button type='submit' className='search-button' onClick={openSearch}>Rechercher</button>
						</form>
					</div>
				</div>
				<button id='close-search' className='close-search' onClick={openSearch}>Fermer la recherche</button>
				<div className='search-overlay' onClick={openSearch}></div>
			</div>
		</div>
	)
}
