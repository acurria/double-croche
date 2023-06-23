"use client";

import Image from 'next/image'
import Link from 'next/link';

export default function Footer() {

	return (
		<main className='footer bg-black'>
			<div className='footer-container flex flex-col items-center lg:flex-row lg:flex-wrap lg:items-start lg:max-w-screen-2xl lg:mx-auto'>
				<Link className='footer-logo' href="/">
					<Image
						src="/next.svg"
						alt="Vercel Logo"
						width={100}
						height={24}
						className="bg-white mb-7"
					/>
				</Link>
				<div className='block menu-container'>
					<p className='footer-title'>Menu</p>
					<div className='menu-columns flex flex-wrap'>
						<ul className='menu-column'>
							<span>Musique</span>
							<li>
								<Link href="./musique/interviews">Interviews</Link>
							</li>
							<li>
								<Link href="./musique/playlists">Playlists</Link>
							</li>
							<li>
								<Link href="./musique/festivals">Festivals</Link>
							</li>
						</ul>
						<ul className='menu-column'>
							<span>Cinéma</span>
							<li>
								<Link href="./cinema/interviews">Interviews</Link>
							</li>
							<li>
								<Link href="./cinema/chroniques">Chroniques</Link>
							</li>
							<li>
								<Link href="./cinema/festivals">Festivals</Link>
							</li>
						</ul>
						<div className='menu-column'>
							<Link href="./concours">Concours</Link>
						</div>
						<div className='menu-column'>
							<Link href="./agenda">Agenda</Link>
						</div>
					</div>
				</div>
				<div className='block contact-container'>
					<p className='footer-title'>Contact</p>
					<p>Écrivez-nous à <a href='mailto:info.double-croche@gmail.com'>info.double-croche@gmail.com</a></p>
				</div>
				<div className='block bottom-container lg:flex lg:flex-row-reverse lg:justify-between'>
					<div className='social flex items-center justify-center'>
						<a className='social-item' href='https://open.spotify.com/user/double-croche?si=I-k5frP5TX-riRPywdMn8w&nd=1' target='_blank'>
							<Image
								src="/spotify.svg"
								alt="Spotify Logo"
								width={25}
								height={25}
							/>
						</a>
						<a className='social-item' href='https://www.facebook.com/doublecroche.dc' target='_blank'>
							<Image
								src="/facebook.svg"
								alt="facebook Logo"
								width={25}
								height={25}
							/>
						</a>
						<a className='social-item' href='https://www.instagram.com/doublecroche_dc/' target='_blank'>
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
