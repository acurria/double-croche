"use client";

import PreviewArticle from '../components/molecules/preview-article'

import Fade from 'react-reveal/Fade'

export default function Page() {

	return (
		<main className="category-page">
			<div className="header-category">
				<h1>
					<Fade left cascade>
						<p className='highlight-secondary'>Concours</p>
					</Fade>
				</h1>
				<h2>
					<span className='highlight-secondary'>Dernier </span>
					<span>concours</span>
				</h2>
				<PreviewArticle/>
			</div>
		</main>
	)
}
