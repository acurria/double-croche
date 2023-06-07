"use client";

import Image from 'next/image'
// @ts-ignore
import Fade from 'react-reveal/Fade'

export default function Page() {

	return (
		<main className="article bg-primary">
			<div className="article-page">
				<div className="header-article lg:mx-auto lg:max-w-screen-2xl">
					<h1 className='sr-only'>Titre de l'article</h1>
					<h2 className='title-mobile'>
						<Fade left cascade>
							<p className='highlight-secondary'>Musique</p>
						</Fade>
						<Fade left cascade>
							Interviews
						</Fade>
					</h2>
					<div className='main-section-article lg:flex'>
						<Image
							className="image-preview-article"
							src="/placeholder.png"
							alt="Vercel Logo"
							width={500}
							height={24}
							priority
						/>
						<div className='wrapper-title'>
							<h2 className='title-desktop'>
								<Fade left cascade>
									<p className='highlight-secondary'>Musique</p>
								</Fade>
								<Fade left cascade>
									Interviews
								</Fade>
							</h2>
							<p className='title-info'>
								<span className='info'><span className='highlight-secondary'>DAFT PUNK</span> pour “Album de l’année”</span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='article-container'>
				<div className='wrapper-article lg:max-w-screen-lg lg:mx-auto'>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod velit esse cillum dolore eu fugiat nulla pariat velit esse cillum dolore eu fugiat nulla pariat velit esse cillum dolore eu fugiat nulla pariat velit esse cillum dolore eu fugiat nulla pariat velit esse cillum velit esse cillum dolore eu fugiat nuvelit esse cillum dolovelit esse cillum dolore eu fugiat nulla pariat velit esse cillum dolore eu fugiat nulla pariat velit esse cillum dolore eu fugiat nulla pariat velit esse cillum dolore eu fugiat nulla pariat re eu fugiat nulla pariatlla pariat velit esse cillum dolore eu fugiat nulla pariat velit esse cillum dolore eu fugiat nulla pariat dolore eu fugiat nulla pariat</p>
					<p>Ut enim ad minim veniam, <strong>quis nostrud exercitation </strong>ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariat velit esse cillum dolore eu fugiat nulla pariat velit esse cillum dolore eu fugiat nulla pariat velit esse cillum dolore eu fugiat nulla pariat  velit esse cillum dolore eu fugiat nulla pariat velit esse cillum dolore eu fugiat nulla pariatur.</p>
					<p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
					<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<img src="/placeholder.png" alt="Vercel Logo"></img>
					<ul>
						<li>Test</li>
						<li>Test</li>
						<li>Test</li>
					</ul>
					<p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
					<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</div>
		</main>
	)
}
