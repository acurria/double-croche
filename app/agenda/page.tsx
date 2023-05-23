"use client";

import PreviewArticle from '../components/molecules/preview-article'

import Fade from 'react-reveal/Fade'

export default function Page() {

	return (
		<main className="category-page">
			<div className="header-category">
				<h1>
					<Fade left cascade>
						<p className='highlight-secondary'>Agenda</p>
					</Fade>
				</h1>
			</div>
		</main>
	)
}
