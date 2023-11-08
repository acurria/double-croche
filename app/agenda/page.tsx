"use client";

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Script from 'next/script'
// @ts-ignore
import dayjs from "dayjs"
// @ts-ignore
import Fade from 'react-reveal/Fade'
// @ts-ignore
import Slider from "react-slick"
import client from "../../src/createClient";
import {useQuery} from "react-query";
import React from "react";

export default function Page() {
	var settings = {
		dots: false,
		arrows: false,
		infinite: false,
		slidesToShow: 5,
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

	const {data, status} = useQuery(
		'elementsAgenda', async(context) => {
			const query = `{"albumsFilmsConcerts" : *[_type=="events"]|order(dateStart asc){
															  'dateStart': dateStart,
															  'dateEnd': dateEnd,
															  'month': month,
															  'title': title,
															  'type': type->slug.current,
															  'id': _id
															},
															"exposSoon" : *[_type=="events"]|order(dateStart asc){
															  'dateStart': dateStart,
															  'dateEnd': dateEnd,
															  'month': month,
															  'title': title,
															  'type': type->slug.current,
															  'id': _id
															},
															"exposInProgress" : *[_type=="events"]|order(dateEnd asc){
															  'dateEnd': dateEnd,
															  'month': month,
															  'title': title,
															  'type': type->slug.current,
															  'id': _id
															}}`;
			return await client.fetch(query);
		}
	);

	if (status !== 'success') {
		return <div className="page-main"></div>
	}

	const albumsFilmsConcerts = (type:string, month:string):any => {
		return data.albumsFilmsConcerts.map(function (item:any) {
			if(item.type === type && item.month === month) {
				return <div key={item.id} className="event-infos">
					<ul className='month-event'>
						<li>{item.title} <span className='highlight-secondary'>({dayjs(item.dateStart).format("DD/MM/YYYY")}{item.dateEnd && ' au ' + dayjs(item.dateEnd).format("DD/MM/YYYY")})</span>
						</li>
					</ul>
				</div>
			} else {
				return null
			}
		})
	}

	const exposSoon = (type:string, month:string):any => {
		return data.exposSoon.map(function (item:any) {
			if(item.type === type && item.month === month) {
				return <div key={item.id} className="event-infos">
					<ul className='month-event'>
						<li>{item.title} <span className='highlight-secondary'>({dayjs(item.dateStart).format("DD/MM/YYYY")}{item.dateEnd && ' au ' + dayjs(item.dateEnd).format("DD/MM/YYYY")})</span>
						</li>
					</ul>
				</div>
			} else {
				return null
			}
		})
	}

	const exposInProgress = (type:string, month:string):any => {
		return data.exposSoon.map(function (item:any) {
			if(item.type === type && item.month === month) {
				return <div key={item.id} className="event-infos">
					<ul className='month-event'>
						<li>{item.title} <span className='highlight-secondary'>({dayjs(item.dateStart).format("DD/MM/YYYY")}{item.dateEnd && ' au ' + dayjs(item.dateEnd).format("DD/MM/YYYY")})</span>
						</li>
					</ul>
				</div>
			} else {
				return null
			}
		})
	}

	return (
		<div className="category-page agenda bg-primary page-main">
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
						<li id='albums-filter' className='item current' onClick={manageFilter}>Albums</li>
						<li id='concerts-filter' className='item' onClick={manageFilter}>Concerts</li>
						<li id='films-filter' className='item' onClick={manageFilter}>Films</li>
						<li id='expos-filter' className='item' onClick={manageFilter}>Expos</li>
						<li id='theater-filter' className='item' onClick={manageFilter}>Théâtre/Danse</li>
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
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Janvier' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Janvier</h3>
												{
													albumsFilmsConcerts('albums', "Janvier")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Février' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Février</h3>
												{
													albumsFilmsConcerts('albums', "Février")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Mars' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Mars</h3>
												{
													albumsFilmsConcerts('albums', "Mars")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Avril' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Avril</h3>
												{
													albumsFilmsConcerts('albums', "Avril")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Mai' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Mai</h3>
												{
													albumsFilmsConcerts('albums', "Mai")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Juin' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Juin</h3>
												{
													albumsFilmsConcerts('albums', "Juin")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Juillet' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Juillet</h3>
												{
													albumsFilmsConcerts('albums', "Juillet")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Août' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Août</h3>
												{
													albumsFilmsConcerts('albums', "Août")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Septembre' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Septembre</h3>
												{
													albumsFilmsConcerts('albums', "Septembre")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Octobre' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Octobre</h3>
												{
													albumsFilmsConcerts('albums', "Octobre")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Novembre' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Novembre</h3>
												{
													albumsFilmsConcerts('albums', "Novembre")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Décembre' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Décembre</h3>
												{
													albumsFilmsConcerts('albums', "Décembre")
												}
											</div>
										}
									})
								}
							</div>
						</div>
					</div>
					<div id='concerts-filter-container' className='concerts event-category lg:max-w-screen-2xl lg:mx-auto'>
						<div className='filter-title'>
							<h2>Concerts</h2>
						</div>
						<div className='month-container'>
							<div className='month-list'>
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Janvier' && item.type === 'concerts') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Janvier</h3>
												{
													albumsFilmsConcerts('concerts', "Janvier")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Février' && item.type === 'concerts') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Février</h3>
												{
													albumsFilmsConcerts('concerts', "Février")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Mars' && item.type === 'concerts') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Mars</h3>
												{
													albumsFilmsConcerts('concerts', "Mars")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Avril' && item.type === 'concerts') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Avril</h3>
												{
													albumsFilmsConcerts('concerts', "Avril")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Mai' && item.type === 'concerts') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Mai</h3>
												{
													albumsFilmsConcerts('concerts', "Mai")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Juin' && item.type === 'concerts') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Juin</h3>
												{
													albumsFilmsConcerts('concerts', "Juin")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Juillet' && item.type === 'concerts') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Juillet</h3>
												{
													albumsFilmsConcerts('concerts', "Juillet")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Août' && item.type === 'concerts') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Août</h3>
												{
													albumsFilmsConcerts('concerts', "Août")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Septembre' && item.type === 'concerts') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Septembre</h3>
												{
													albumsFilmsConcerts('concerts', "Septembre")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Octobre' && item.type === 'concerts') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Octobre</h3>
												{
													albumsFilmsConcerts('concerts', "Octobre")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Novembre' && item.type === 'concerts') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Novembre</h3>
												{
													albumsFilmsConcerts('concerts', "Novembre")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Décembre' && item.type === 'concerts') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Décembre</h3>
												{
													albumsFilmsConcerts('concerts', "Décembre")
												}
											</div>
										}
									})
								}
							</div>
						</div>
					</div>
					<div id='films-filter-container' className='films event-category lg:max-w-screen-2xl lg:mx-auto'>
						<div className='filter-title'>
							<h2>Films</h2>
						</div>
						<div className='month-container'>
							<div className='month-list'>
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Janvier' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Janvier</h3>
												{
													albumsFilmsConcerts('films', "Janvier")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Février' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Février</h3>
												{
													albumsFilmsConcerts('films', "Février")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Mars' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Mars</h3>
												{
													albumsFilmsConcerts('films', "Mars")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Avril' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Avril</h3>
												{
													albumsFilmsConcerts('films', "Avril")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Mai' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Mai</h3>
												{
													albumsFilmsConcerts('films', "Mai")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Juin' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Juin</h3>
												{
													albumsFilmsConcerts('films', "Juin")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Juillet' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Juillet</h3>
												{
													albumsFilmsConcerts('films', "Juillet")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Août' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Août</h3>
												{
													albumsFilmsConcerts('films', "Août")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Septembre' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Septembre</h3>
												{
													albumsFilmsConcerts('films', "Septembre")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Octobre' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Octobre</h3>
												{
													albumsFilmsConcerts('films', "Octobre")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Novembre' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Novembre</h3>
												{
													albumsFilmsConcerts('films', "Novembre")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsConcerts.map(function (item:any, index:any) {
										if (item.month === 'Décembre' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Décembre</h3>
												{
													albumsFilmsConcerts('films', "Décembre")
												}
											</div>
										}
									})
								}
							</div>
						</div>
					</div>
					<div id='expos-filter-container' className='expos event-category lg:max-w-screen-2xl lg:mx-auto'>
						<div className='filter-title'>
							<h2>Expos</h2>
						</div>
						<div className='month-container'>
							<div className='month-list'>
								{
									data.exposInProgress.map(function (item:any, index:any) {
										if (item.month === 'En cours' && item.type === 'expos') {
											return <div key={index} className="month-item in-progress">
												<h3 className='month-title'>En cours</h3>
												{
													data.exposInProgress.map(function (item:any) {
														if (item.month === 'En cours' && item.type === 'expos') {
															return <div key={item.id} className="event-infos">
																<ul className='month-event'>
																	<li>{item.title} <span
																		className='highlight-secondary'>(jusqu'au {dayjs(item.dateEnd).format("DD/MM/YYYY")})</span>
																	</li>
																</ul>
															</div>
														}
													})
												}
											</div>
										}
									})
								}
								{
									data.exposSoon.map(function (item:any, index:any) {
										if (item.month === 'A venir' && item.type === 'expos') {
											return <div key={index} className="month-item soon">
												<h3 className='month-title'>À venir</h3>
												{
													exposSoon('expos', "A venir")
												}
											</div>
										}
									})
								}
							</div>
						</div>
					</div>
					<div id='theater-filter-container' className='theater event-category lg:max-w-screen-2xl lg:mx-auto'>
						<div className='filter-title'>
							<h2>Théâtre/Danse</h2>
						</div>
						<div className='month-container'>
							<div className='month-list'>
								{
									data.exposInProgress.map(function (item:any, index:any) {
										if (item.month === 'En cours' && item.type === 'theatre') {
											return <div key={index} className="month-item in-progress">
												<h3 className='month-title'>En cours</h3>
												{
													data.exposInProgress.map(function (item:any) {
														if (item.month === 'En cours' && item.type === 'theatre') {
															return <div key={item.id} className="event-infos">
																<ul className='month-event'>
																	<li>{item.title} <span
																		className='highlight-secondary'>(jusqu'au {dayjs(item.dateEnd).format("DD/MM/YYYY")})</span>
																	</li>
																</ul>
															</div>
														}
													})
												}
											</div>
										}
									})
								}
								{
									data.exposSoon.map(function (item:any, index:any) {
										if (item.month === 'A venir' && item.type === 'theatre') {
											return <div key={index} className="month-item soon">
												<h3 className='month-title'>À venir</h3>
												{
													exposSoon('theatre', "A venir")
												}
											</div>
										}
									})
								}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Script async src="https://www.googletagmanager.com/gtag/js?id=UA-80564203-1" />
			<Script id="google-analytics">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
	
					gtag('config', 'UA-80564203-1');
				`}
			</Script>
		</div>
	)
}
