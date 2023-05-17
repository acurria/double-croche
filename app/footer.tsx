"use client";

import Image from 'next/image'

export default function Footer() {

	return (
		<main className='footer bg-black'>
			<div className='footer-container flex flex-col items-center lg:flex-row lg:flex-wrap lg:items-start lg:max-w-screen-2xl lg:mx-auto'>
				<a className='footer-logo' href=''>
					<Image
						src="/next.svg"
						alt="Vercel Logo"
						width={100}
						height={24}
						className="bg-white mb-7"
					/>
				</a>
				<div className='block menu-container'>
					<p className='footer-title'>Menu</p>
					<div className='menu-columns flex flex-wrap'>
						<ul className='menu-column'>
							<span>Musique</span>
							<li>
								<a href=''>Interviews</a>
							</li>
							<li>
								<a href=''>Playlists</a>
							</li>
							<li>
								<a href=''>Festivals</a>
							</li>
						</ul>
						<ul className='menu-column'>
							<span>Cinéma</span>
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
						<div className='menu-column'>
							<a href=''>Concours</a>
						</div>
						<div className='menu-column'>
							<a href=''>Agenda</a>
						</div>
					</div>
				</div>
				<div className='block contact-container'>
					<p className='footer-title'>Contact</p>
					<p>Écrivez-nous à <a href='mailto:info.double-croche@gmail.com'>info.double-croche@gmail.com</a></p>
				</div>
				<div className='block bottom-container lg:flex lg:flex-row-reverse lg:justify-between'>
					<div className='social flex items-center justify-center'>
						<a className='social-item' href=''>
							<Image
								src="/spotify.svg"
								alt="Spotify Logo"
								width={25}
								height={25}
							/>
						</a>
						<a className='social-item' href=''>
							<Image
								src="/facebook.svg"
								alt="facebook Logo"
								width={25}
								height={25}
							/>
						</a>
						<a className='social-item' href=''>
							<Image
								src="/instagram.svg"
								alt="Instagram Logo"
								width={25}
								height={25}
							/>
						</a>
					</div>
					<div className='copyright text-center text-xs font-normal'>
						<p className='text-secondary'>© 2023 DOUBLE CROCHE. Tous droits réservés</p>
					</div>
				</div>
			</div>
		</main>
	)
}
