"use client";

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Fade from 'react-reveal/Fade'
import Slider from "react-slick"

export default function Page() {
	var settings = {
		dots: false,
		arrows: false,
		infinite: false,
		slidesToShow: 3.5,
		centerMode: false,
		slidesToScroll: 1
	};

	return (
		<main className="category-page agenda bg-primary">
			<div className="header-category lg:mx-auto lg:max-w-screen-2xl">
				<h1>
					<Fade left cascade>
						<p className='highlight-secondary'>Agenda</p>
					</Fade>
				</h1>
			</div>
			<div className='filter-container bg-black'>
				<div className='filter-items'>
					<Slider {...settings} className="lg:hidden">
						<li id='albums-filter' className='item'>Albums</li>
						<li id='concerts-filter' className='item'>Concerts</li>
						<li id='films-filter' className='item'>Films</li>
						<li id='expos-filter' className='item'>Expos</li>
					</Slider>
					<ul className="items-no-slideshow hidden lg:flex lg:w-full">
					<li id='albums-filter' className='item'>Albums</li>
						<li id='concerts-filter' className='item'>Concerts</li>
						<li id='films-filter' className='item'>Films</li>
						<li id='expos-filter' className='item'>Expos</li>
					</ul>
				</div>
			</div>
			<div className='result-filter-container bg-white'>
				<div className='agenda-list'>
					<div id='albums-filter-container' className='albums lg:max-w-screen-2xl lg:mx-auto'>
						<div className='filter-title'>
							<h2>Albums</h2>
						</div>
						<div className='month-container'>
							<div className='month-list'>
								<div className='month-item'>
									<h3 className='month-title'>Avril</h3>
									<div className="event-infos">
										<div className='month-date'>
											<p>17/07/23</p>
										</div>
										<div className='month-event'>
											<ul>
												<li>Stereo Mind Game</li>
												<li>Stereo Mind Game</li>
												<li>Stereo Mind Game</li>
												<li>Stereo Mind Game</li>
											</ul>
										</div>
									</div>
									<div className="event-infos">
										<div className='month-date'>
											<p>17/07/23</p>
										</div>
										<div className='month-event'>
											<ul>
												<li>Stereo Mind Game</li>
												<li>Stereo Mind Game</li>
												<li>Stereo Mind Game</li>
												<li>Stereo Mind Game</li>
											</ul>
										</div>
									</div>
									<div className="event-infos">
										<div className='month-date'>
											<p>17/07/23</p>
										</div>
										<div className='month-event'>
											<ul>
												<li>Stereo Mind Game</li>
												<li>Stereo Mind Game</li>
												<li>Stereo Mind Game</li>
												<li>Stereo Mind Game</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className='month-list'>
								<div className='month-item'>
									<h3 className='month-title'>Avril</h3>
									<div className="event-infos">
										<div className='month-date'>
											<p>17/07/23</p>
										</div>
										<div className='month-event'>
											<ul>
												<li>Stereo Mind Game</li>
												<li>Stereo Mind Game</li>
												<li>Stereo Mind Game</li>
												<li>Stereo Mind Game</li>
											</ul>
										</div>
									</div>
									<div className="event-infos">
										<div className='month-date'>
											<p>17/07/23</p>
										</div>
										<div className='month-event'>
											<ul>
												<li>Stereo Mind Game</li>
												<li>Stereo Mind Game</li>
												<li>Stereo Mind Game</li>
												<li>Stereo Mind Game</li>
											</ul>
										</div>
									</div>
									<div className="event-infos">
										<div className='month-date'>
											<p>17/07/23</p>
										</div>
										<div className='month-event'>
											<ul>
												<li>Stereo Mind Game</li>
												<li>Stereo Mind Game</li>
												<li>Stereo Mind Game</li>
												<li>Stereo Mind Game</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className='month-list'>
								<div className='month-item'>
									<h3 className='month-title'>Avril</h3>
									<div className="event-infos">
										<div className='month-date'>
											<p>17/07/23</p>
										</div>
										<div className='month-event'>
											<ul>
												<li>Stereo Mind Game</li>
												<li>Stereo Mind Game</li>
												<li>Stereo Mind Game</li>
												<li>Stereo Mind Game</li>
											</ul>
										</div>
									</div>
									<div className="event-infos">
										<div className='month-date'>
											<p>17/07/23</p>
										</div>
										<div className='month-event'>
											<ul>
												<li>Stereo Mind Game</li>
												<li>Stereo Mind Game</li>
												<li>Stereo Mind Game</li>
												<li>Stereo Mind Game</li>
											</ul>
										</div>
									</div>
									<div className="event-infos">
										<div className='month-date'>
											<p>17/07/23</p>
										</div>
										<div className='month-event'>
											<ul>
												<li>Stereo Mind Game</li>
												<li>Stereo Mind Game</li>
												<li>Stereo Mind Game</li>
												<li>Stereo Mind Game</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
