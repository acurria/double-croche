"use client";

import Fade from 'react-reveal/Fade'

export default function Page() {

	return (
		<main className="category-page bg-primary">
			<div className="header-category lg:mx-auto lg:max-w-screen-2xl">
				<h1>
					<Fade left cascade>
						<p className='highlight-secondary'>Agenda</p>
					</Fade>
				</h1>
			</div>
		</main>
	)
}
