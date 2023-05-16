"use client"; 

import {useState} from 'react';
import {useEffect} from 'react';

import Image from 'next/image'

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
		<main className={`navigation h-auto w-full relative ${scroll ? "bg-black" : "bg-transparent"}`}>
			<div className='nav-container flex content-between items-center lg:max-w-screen-2xl lg:mx-auto'>
				<div className='logo-wrapper flex justify-items-center w-1/2'>
					<a href='#'>
						<Image
							src="/vercel.svg"
							alt="Double-Croche Logo"
							className="main-logo mr-2 inline-block"
							width={40}
							height={40}
						/>
						<span className='text-white uppercase'>Double-Croche</span>
					</a>
				</div>
				<div className={`navigation-wrapper mobile-view w-1/2 lg:hidden ${isOpen ? 'open' : ''}`}>
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
										<a href=''>Chroniques</a>
									</li>
									<li>
										<a href=''>Chroniques</a>
									</li>
									<li>
										<a href=''>Chroniques</a>
									</li>
								</ul>
							</li>
							<li className='item-nav'>
								<span>CINEMA</span>
								<ul className='level-1'>
									<li>
										<a href=''>Chroniques</a>
									</li>
									<li>
										<a href=''>Chroniques</a>
									</li>
									<li>
										<a href=''>Chroniques</a>
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
									<ul className='level-1'>
										<li>
											<a href=''>Chroniques</a>
										</li>
										<li>
											<a href=''>Chroniques</a>
										</li>
										<li>
											<a href=''>Chroniques</a>
										</li>
									</ul>
									<div className='recent-articles'>
										-- créer un component "Preview Article" --
										<div className='article'>
											<a href=''>
												<Image
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
										</div>
										<div className='article'>
											<a href=''>
												<Image
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
										</div>
										<div className='article'>
											<a href=''>
												<Image
													src="/placeholder.png"
													alt="Vercel Logo"
													className="dark:invert"
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
										</div>
									</div>
								</div>
							</li>
							<li className='item-nav'>
								<span>CINEMA</span>
								<div className='subnavigation'>
									<ul className='level-1'>
										<li>
											<a href=''>Chroniques</a>
										</li>
										<li>
											<a href=''>Chroniques</a>
										</li>
										<li>
											<a href=''>Chroniques</a>
										</li>
									</ul>
									<div className='recent-articles'>
										<div className='article'>
											<a href=''>
												<Image
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
										</div>
										<div className='article'>
											<a href=''>
												<Image
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
										</div>
										<div className='article'>
											<a href=''>
												<Image
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
