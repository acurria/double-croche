"use client";

import PreviewArticle from '../../components/molecules/preview-article'

import Fade from 'react-reveal/Fade'

export default function Page() {

	return (
		<main className="category-page">
			<div className="header-category">
				<h1>
					<Fade left cascade>
						<p className='highlight-secondary'>Musique</p>
					</Fade>
					<Fade left cascade>
						Festivals
					</Fade>
				</h1>
				<h2>
					<span className='highlight-secondary'>Dernier </span>
					<span>festival</span>
				</h2>
				<PreviewArticle/>
			</div>
		</main>
	)
}
