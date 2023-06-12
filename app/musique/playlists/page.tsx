"use client";

import PreviewArticle from '@/src/components/molecules/preview-article'
import CategoryGrid1x1 from '@/src/components/organisms/category-grid-1x1'
// @ts-ignore
import Fade from 'react-reveal/Fade'

export default function Page() {

	return (
		<>
			<main className="category-page bg-primary">
				<div className="header-category lg:mx-auto lg:max-w-screen-2xl">
					<h1>
						<Fade left cascade>
							<p className='highlight-secondary'>Musique</p>
						</Fade>
						<Fade left cascade>
							Playlists
						</Fade>
					</h1>
					<div className='main-category-article square lg:flex'>
						<div className='wrapper-title lg:order-2 lg:items-start lg:ml-12'>
							<h2>
								<span className='highlight-secondary'>Dernière </span>
								<span>playlist</span>
							</h2>
							<div className='info-main-article hidden lg:block'>
								{/*<PreviewArticle/>*/}
							</div>
						</div>
						{/*<PreviewArticle/>*/}
					</div>
				</div>
			</main>
			{/*<CategoryGrid1x1/>*/}
		</>
	)
}
