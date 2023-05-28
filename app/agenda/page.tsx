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
		slidesToShow: 4,
		centerMode: false,
		slidesToScroll: 0,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3.5,
				slidesToScroll: 1,
				centerMode: false,
				dots: false,
				arrows: false,
				infinite: false
			  }
			}
		]
	};

	const manageFilter = (filterName:any) => {
		let filterSelected = (filterName.target.id);
		let eventCategories = document.querySelectorAll('.event-category');
		let filterElements = document.querySelectorAll('.filter-items .item');

		filterElements.forEach(filterElement => {
			filterElement.classList.remove('current');
		});

		eventCategories.forEach(event => {
			event.classList.remove('active');
			if(filterSelected + '-container' == event.id) {
				event.classList.add('active');
			}
		});

		filterName.target.classList.add('current');
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
					<Slider {...settings}>
						<li id='albums-filter' className='item' onClick={manageFilter}>Albums</li>
						<li id='concerts-filter' className='item' onClick={manageFilter}>Concerts</li>
						<li id='films-filter' className='item' onClick={manageFilter}>Films</li>
						<li id='expos-filter' className='item' onClick={manageFilter}>Expos</li>
					</Slider>
				</div>
			</div>
			<div className='result-filter-container bg-white'>
				<div className='agenda-list'>
					<div id='albums-filter-container' className='albums event-category lg:max-w-screen-2xl lg:mx-auto active'>
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
					<div id='concerts-filter-container' className='concerts event-category lg:max-w-screen-2xl lg:mx-auto'>
						<div className='filter-title'>
							<h2>Concerts</h2>
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
					<div id='films-filter-container' className='films event-category lg:max-w-screen-2xl lg:mx-auto'>
						<div className='filter-title'>
							<h2>Films</h2>
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
					<div id='expos-filter-container' className='expos event-category lg:max-w-screen-2xl lg:mx-auto'>
						<div className='filter-title'>
							<h2>Expos</h2>
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
