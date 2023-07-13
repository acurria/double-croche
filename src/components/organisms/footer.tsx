"use client";

import Image from 'next/image'
import Link from 'next/link';

export default function Footer() {

	return (
		<div className='footer bg-black'>
			<div className='footer-container flex flex-col items-center lg:flex-row lg:flex-wrap lg:items-start lg:max-w-screen-2xl lg:mx-auto'>
				<Link className='footer-logo' href="/" aria-label="Retour à l'accueil">
					<Image
						src="/logo-white.svg"
						alt="Vercel Logo"
						width={100}
						height={24}
						className="mb-7"
					/>
				</Link>
				<div className='block menu-container'>
					<p className='footer-title'>Menu</p>
					<div className='menu-columns flex flex-wrap'>
						<ul className='menu-column'>
							<span>Musique</span>
							<li>
								<Link href="./musique/interviews" aria-label="Aller à Musique Interview">Interviews</Link>
							</li>
							<li>
								<Link href="./musique/playlists" aria-label="Aller à Musique Playlists">Playlists</Link>
							</li>
							<li>
								<Link href="./musique/festivals" aria-label="Aller à Musique Festivals">Festivals</Link>
							</li>
						</ul>
						<ul className='menu-column'>
							<span>Cinéma</span>
							<li>
								<Link href="./cinema/interviews" aria-label="Aller à Cinéma Interview">Interviews</Link>
							</li>
							<li>
								<Link href="./cinema/chroniques" aria-label="Aller à Cinéma Chroniques">Chroniques</Link>
							</li>
							<li>
								<Link href="./cinema/festivals" aria-label="Aller à Cinéma Festivals">Festivals</Link>
							</li>
						</ul>
						<div className='menu-column'>
							<Link href="./concours" aria-label="Aller à Concours">Concours</Link>
						</div>
						<div className='menu-column'>
							<Link href="./agenda" aria-label="Aller à Agenda">Agenda</Link>
						</div>
					</div>
				</div>
				<div className='block contact-container'>
					<p className='footer-title'>Contact</p>
					<p>Ecrivez-nous à <a href='mailto:info.doublecroche@gmail.com'>info.doublecroche@gmail.com</a></p>
				</div>
				<div className='block bottom-container lg:flex lg:flex-row-reverse lg:justify-between'>
					<div className='social flex items-center justify-center'>
						<a className='social-item' href='https://open.spotify.com/user/double-croche?si=I-k5frP5TX-riRPywdMn8w&nd=1' target='_blank' aria-label="Redirige vers le compte Spotify">
							<Image
								src="/spotify.svg"
								alt="Spotify Logo"
								width={25}
								height={25}
							/>
						</a>
						<a className='social-item' href='https://www.facebook.com/doublecroche.dc' target='_blank' aria-label="Redirige vers le compte Facebook">
							<Image
								src="/facebook.svg"
								alt="facebook Logo"
								width={25}
								height={25}
							/>
						</a>
						<a className='social-item' href='https://www.instagram.com/doublecroche_dc/' target='_blank' aria-label="Redirige vers le compte Instagram">
							<Image
								src="/instagram.svg"
								alt="Instagram Logo"
								width={25}
								height={25}
							/>
						</a>
					</div>
					<div className='copyright text-center text-xs font-normal'>
						<p className='text-secondary'>© 2023 DOUBLE-CROCHE. Tous droits réservés</p>
						<p className='credit'>Site web réalisé par <Link href="https://alexandrecurria.fr" target='_blank' aria-label="Redirige vers le site web alexandrecurria.fr">alexandrecurria.fr</Link></p>
					</div>
				</div>
			</div>
		</div>
	)
}
