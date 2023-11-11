"use client";

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Script from 'next/script'
// @ts-ignore
import dayjs from "dayjs"
// @ts-ignore
import Fade from 'react-reveal/Fade'
// @ts-ignore
import client from "../../src/createClient";
import {useQuery} from "react-query";
import React from "react";

export default function Page() {

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
			const query = `{"albumsFilms" : *[_type=="events"]|order(dateStart asc){
															  'dateStart': dateStart,
															  'dateEnd': dateEnd,
															  'month': month,
															  'year': year,
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
															  'dateStart': dateStart,
															  'dateEnd': dateEnd,
															  'month': month,
															  'title': title,
															  'type': type->slug.current,
															  'id': _id
															},
															"concerts" : *[_type=="events"][type->slug.current match 'concerts']|order(dateEnd asc){
															  'dateStart': dateStart,
															  'dateEnd': dateEnd,
															  'month': month,
															  'year': year,
															  'title': title,
															  'type': type->slug.current,
															  'id': _id
															},
															"albumsYear" : *[_type=="events"][type->slug.current match 'albums']{
															  'year': year
															},
															"filmsYear" : *[_type=="events"][type->slug.current match 'films']{
															  'year': year
															}}`;
			return await client.fetch(query);
		}
	);

	if (status !== 'success') {
		return <div className="page-main"></div>
	}

	const currentDate = new Date();
	const currentYear = new Date().getFullYear().toString();

	const nextYearInt = new Date().getFullYear() + 1;
	const nextYear = nextYearInt.toString();

	let albumsCurrentYear = false;
	const checkAlbumsCurrentYear = ():any => {
		data.albumsYear.map(function (item:any) {
			if (item.year === currentYear) {
				albumsCurrentYear = true;
			}
		});
		if (albumsCurrentYear) {
			return <p className="agenda-year">{currentYear}</p>
		}
	}

	let albumsNextYear = false;
	const checkAlbumsNextYear = ():any => {
		data.albumsYear.map(function (item:any) {
			if (item.year === nextYear) {
				albumsNextYear = true;
			}
		});
		if (albumsNextYear) {
			return <p className="agenda-year">{nextYear}</p>
		}
	}

	let concertsCurrentYear = false;
	const checkConcertsCurrentYear = ():any => {
		data.concerts.map(function (item:any) {
			if (item.year === currentYear) {
				concertsCurrentYear = true;
			}
		});
		if (concertsCurrentYear) {
			return <p className="agenda-year">{currentYear}</p>
		}
	}

	let concertsNextYear = false;
	const checkConcertsNextYear = ():any => {
		data.concerts.map(function (item:any) {
			if (item.year === nextYear) {
				concertsNextYear = true;
			}
		});
		if (concertsNextYear) {
			return <p className="agenda-year">{nextYear}</p>
		}
	}

	let filmsCurrentYear = false;
	const checkFilmsCurrentYear = ():any => {
		data.filmsYear.map(function (item:any) {
			if (item.year === currentYear) {
				filmsCurrentYear = true;
			}
		});
		if (filmsCurrentYear) {
			return <p className="agenda-year">{currentYear}</p>
		}
	}

	let filmsNextYear = false;
	const checkFilmsNextYear = ():any => {
		data.filmsYear.map(function (item:any) {
			if (item.year === nextYear) {
				filmsNextYear = true;
			}
		});
		if (filmsNextYear) {
			return <p className="agenda-year">{nextYear}</p>
		}
	}

	const albumsFilms = (type:string, month:string):any => {
		return data.albumsFilms.map(function (item:any) {
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

	const concerts = (type:string, month:string):any => {
		return data.concerts.map(function (item:any) {
			const givenDateEnd = new Date(item.dateEnd);

			if(item.type === type && item.month === month && (givenDateEnd > currentDate || (givenDateEnd.getDay() === currentDate.getDay() &&  givenDateEnd.getMonth() === currentDate.getMonth() && givenDateEnd.getFullYear() === currentDate.getFullYear()))) {
				return <div key={item.id} className="event-infos">
					<ul className='month-event'>
						<li>{item.title} <span className='highlight-secondary'>({item.dateStart && dayjs(item.dateStart).format("DD/MM/YYYY") + ' au ' }{dayjs(item.dateEnd).format("DD/MM/YYYY")})</span>
						</li>
					</ul>
				</div>
			} else {
				return null
			}
		})
	}

	const exposSoon = (type:string):any => {
		return data.exposSoon.map(function (item:any) {
			const givenDateStart = new Date(item.dateStart);

			if (givenDateStart > currentDate && item.type === type) {
				return <div key={item.id} className="event-infos">
					<ul className='month-event'>
						<li>{item.title} <span className='highlight-secondary'>({item.dateStart && dayjs(item.dateStart).format("DD/MM/YYYY") + ' au ' }{dayjs(item.dateEnd).format("DD/MM/YYYY")})</span>
						</li>
					</ul>
				</div>
			} else {
				return null
			}
		})
	}

	const exposInProgress = (type:string):any => {
		return data.exposInProgress.map(function (item:any) {
			const givenDateEnd = new Date(item.dateEnd);
			const givenDateStart = new Date(item.dateStart);

			if ((givenDateStart < currentDate || (givenDateStart.getDay() === currentDate.getDay() &&  givenDateStart.getMonth() === currentDate.getMonth() && givenDateStart.getFullYear() === currentDate.getFullYear())) && (givenDateEnd > currentDate || (givenDateEnd.getDay() === currentDate.getDay() &&  givenDateEnd.getMonth() === currentDate.getMonth() && givenDateEnd.getFullYear() === currentDate.getFullYear())) && item.type === type) {
				return <div key={item.id} className="event-infos">
					<ul className='month-event'>
						<li>{item.title} <span className='highlight-secondary'>(jusqu'au {dayjs(item.dateEnd).format("DD/MM/YYYY")})</span>
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
					<ul>
						<li id='albums-filter' className='item current' onClick={manageFilter}>Albums</li>
						<li id='concerts-filter' className='item' onClick={manageFilter}>Concerts</li>
						<li id='films-filter' className='item' onClick={manageFilter}>Films</li>
						<li id='expos-filter' className='item' onClick={manageFilter}>Expos</li>
						<li id='theater-filter' className='item' onClick={manageFilter}>Théâtre</li>
					</ul>
				</div>
			</div>
			<div className='result-filter-container bg-white'>
				<div className='agenda-list'>
					<div id='albums-filter-container' className='albums event-category lg:max-w-screen-2xl lg:mx-auto active'>
						<div className='filter-title sr-only'>
							<h2>Albums</h2>
						</div>
						{
							checkAlbumsCurrentYear()
						}
						<div className='month-container'>
							<div className='month-list'>
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Janvier' && item.type === 'albums' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Janvier</h3>
												{
													albumsFilms('albums', "Janvier")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Février' && item.type === 'albums' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Février</h3>
												{
													albumsFilms('albums', "Février")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Mars' && item.type === 'albums' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Mars</h3>
												{
													albumsFilms('albums', "Mars")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Avril' && item.type === 'albums' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Avril</h3>
												{
													albumsFilms('albums', "Avril")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Mai' && item.type === 'albums' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Mai</h3>
												{
													albumsFilms('albums', "Mai")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Juin' && item.type === 'albums' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Juin</h3>
												{
													albumsFilms('albums', "Juin")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Juillet' && item.type === 'albums' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Juillet</h3>
												{
													albumsFilms('albums', "Juillet")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Août' && item.type === 'albums' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Août</h3>
												{
													albumsFilms('albums', "Août")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Septembre' && item.type === 'albums' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Septembre</h3>
												{
													albumsFilms('albums', "Septembre")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Octobre' && item.type === 'albums' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Octobre</h3>
												{
													albumsFilms('albums', "Octobre")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Novembre' && item.type === 'albums' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Novembre</h3>
												{
													albumsFilms('albums', "Novembre")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Décembre' && item.type === 'albums' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Décembre</h3>
												{
													albumsFilms('albums', "Décembre")
												}
											</div>
										}
									})
								}
							</div>
						</div>
						{
							checkAlbumsNextYear()
						}
						<div className='month-container'>
							<div className='month-list'>
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Janvier' && item.type === 'albums' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Janvier</h3>
												{
													albumsFilms('albums', "Janvier")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Février' && item.type === 'albums' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Février</h3>
												{
													albumsFilms('albums', "Février")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Mars' && item.type === 'albums' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Mars</h3>
												{
													albumsFilms('albums', "Mars")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Avril' && item.type === 'albums' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Avril</h3>
												{
													albumsFilms('albums', "Avril")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Mai' && item.type === 'albums' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Mai</h3>
												{
													albumsFilms('albums', "Mai")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Juin' && item.type === 'albums' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Juin</h3>
												{
													albumsFilms('albums', "Juin")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Juillet' && item.type === 'albums' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Juillet</h3>
												{
													albumsFilms('albums', "Juillet")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Août' && item.type === 'albums' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Août</h3>
												{
													albumsFilms('albums', "Août")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Septembre' && item.type === 'albums' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Septembre</h3>
												{
													albumsFilms('albums', "Septembre")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Octobre' && item.type === 'albums' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Octobre</h3>
												{
													albumsFilms('albums', "Octobre")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Novembre' && item.type === 'albums' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Novembre</h3>
												{
													albumsFilms('albums', "Novembre")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Décembre' && item.type === 'albums' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Décembre</h3>
												{
													albumsFilms('albums', "Décembre")
												}
											</div>
										}
									})
								}
							</div>
						</div>
					</div>
					<div id='concerts-filter-container' className='concerts event-category lg:max-w-screen-2xl lg:mx-auto'>
						<div className='filter-title sr-only'>
							<h2>Concerts</h2>
						</div>
						{
							checkConcertsCurrentYear()
						}
						<div className='month-container'>
							<div className='month-list'>
								{
									data.concerts.map(function (item:any, index:any) {
										if (item.month === 'Janvier' && item.type === 'concerts' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Janvier</h3>
												{
													concerts('concerts', "Janvier")
												}
											</div>
										}
									})
								}
								{
									data.concerts.map(function (item:any, index:any) {
										if (item.month === 'Février' && item.type === 'concerts' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Février</h3>
												{
													concerts('concerts', "Février")
												}
											</div>
										}
									})
								}
								{
									data.concerts.map(function (item:any, index:any) {
										if (item.month === 'Mars' && item.type === 'concerts' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Mars</h3>
												{
													concerts('concerts', "Mars")
												}
											</div>
										}
									})
								}
								{
									data.concerts.map(function (item:any, index:any) {
										if (item.month === 'Avril' && item.type === 'concerts' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Avril</h3>
												{
													concerts('concerts', "Avril")
												}
											</div>
										}
									})
								}
								{
									data.concerts.map(function (item:any, index:any) {
										if (item.month === 'Mai' && item.type === 'concerts' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Mai</h3>
												{
													concerts('concerts', "Mai")
												}
											</div>
										}
									})
								}
								{
									data.concerts.map(function (item:any, index:any) {
										if (item.month === 'Juin' && item.type === 'concerts' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Juin</h3>
												{
													concerts('concerts', "Juin")
												}
											</div>
										}
									})
								}
								{
									data.concerts.map(function (item:any, index:any) {
										if (item.month === 'Juillet' && item.type === 'concerts' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Juillet</h3>
												{
													concerts('concerts', "Juillet")
												}
											</div>
										}
									})
								}
								{
									data.concerts.map(function (item:any, index:any) {
										if (item.month === 'Août' && item.type === 'concerts' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Août</h3>
												{
													concerts('concerts', "Août")
												}
											</div>
										}
									})
								}
								{
									data.concerts.map(function (item:any, index:any) {
										if (item.month === 'Septembre' && item.type === 'concerts' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Septembre</h3>
												{
													concerts('concerts', "Septembre")
												}
											</div>
										}
									})
								}
								{
									data.concerts.map(function (item:any, index:any) {
										if (item.month === 'Octobre' && item.type === 'concerts' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Octobre</h3>
												{
													concerts('concerts', "Octobre")
												}
											</div>
										}
									})
								}
								{
									data.concerts.map(function (item:any, index:any) {
										if (item.month === 'Novembre' && item.type === 'concerts' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Novembre</h3>
												{
													concerts('concerts', "Novembre")
												}
											</div>
										}
									})
								}
								{
									data.concerts.map(function (item:any, index:any) {
										if (item.month === 'Décembre' && item.type === 'concerts' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Décembre</h3>
												{
													concerts('concerts', "Décembre")
												}
											</div>
										}
									})
								}
							</div>
						</div>
						{
							checkConcertsNextYear()
						}
						<div className='month-container'>
							<div className='month-list'>
								{
									data.concerts.map(function (item:any, index:any) {
										if (item.month === 'Janvier' && item.type === 'concerts' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Janvier</h3>
												{
													concerts('concerts', "Janvier")
												}
											</div>
										}
									})
								}
								{
									data.concerts.map(function (item:any, index:any) {
										if (item.month === 'Février' && item.type === 'concerts' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Février</h3>
												{
													concerts('concerts', "Février")
												}
											</div>
										}
									})
								}
								{
									data.concerts.map(function (item:any, index:any) {
										if (item.month === 'Mars' && item.type === 'concerts' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Mars</h3>
												{
													concerts('concerts', "Mars")
												}
											</div>
										}
									})
								}
								{
									data.concerts.map(function (item:any, index:any) {
										if (item.month === 'Avril' && item.type === 'concerts' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Avril</h3>
												{
													concerts('concerts', "Avril")
												}
											</div>
										}
									})
								}
								{
									data.concerts.map(function (item:any, index:any) {
										if (item.month === 'Mai' && item.type === 'concerts' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Mai</h3>
												{
													concerts('concerts', "Mai")
												}
											</div>
										}
									})
								}
								{
									data.concerts.map(function (item:any, index:any) {
										if (item.month === 'Juin' && item.type === 'concerts' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Juin</h3>
												{
													concerts('concerts', "Juin")
												}
											</div>
										}
									})
								}
								{
									data.concerts.map(function (item:any, index:any) {
										if (item.month === 'Juillet' && item.type === 'concerts' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Juillet</h3>
												{
													concerts('concerts', "Juillet")
												}
											</div>
										}
									})
								}
								{
									data.concerts.map(function (item:any, index:any) {
										if (item.month === 'Août' && item.type === 'concerts' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Août</h3>
												{
													concerts('concerts', "Août")
												}
											</div>
										}
									})
								}
								{
									data.concerts.map(function (item:any, index:any) {
										if (item.month === 'Septembre' && item.type === 'concerts' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Septembre</h3>
												{
													concerts('concerts', "Septembre")
												}
											</div>
										}
									})
								}
								{
									data.concerts.map(function (item:any, index:any) {
										if (item.month === 'Octobre' && item.type === 'concerts' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Octobre</h3>
												{
													concerts('concerts', "Octobre")
												}
											</div>
										}
									})
								}
								{
									data.concerts.map(function (item:any, index:any) {
										if (item.month === 'Novembre' && item.type === 'concerts' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Novembre</h3>
												{
													concerts('concerts', "Novembre")
												}
											</div>
										}
									})
								}
								{
									data.concerts.map(function (item:any, index:any) {
										if (item.month === 'Décembre' && item.type === 'concerts' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Décembre</h3>
												{
													concerts('concerts', "Décembre")
												}
											</div>
										}
									})
								}
							</div>
						</div>
					</div>
					<div id='films-filter-container' className='films event-category lg:max-w-screen-2xl lg:mx-auto'>
						<div className='filter-title sr-only'>
							<h2>Films</h2>
						</div>
						{
							checkFilmsCurrentYear()
						}
						<div className='month-container'>
							<div className='month-list'>
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Janvier' && item.type === 'films' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Janvier</h3>
												{
													albumsFilms('films', "Janvier")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Février' && item.type === 'films' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Février</h3>
												{
													albumsFilms('films', "Février")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Mars' && item.type === 'films' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Mars</h3>
												{
													albumsFilms('films', "Mars")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Avril' && item.type === 'films' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Avril</h3>
												{
													albumsFilms('films', "Avril")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Mai' && item.type === 'films' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Mai</h3>
												{
													albumsFilms('films', "Mai")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Juin' && item.type === 'films' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Juin</h3>
												{
													albumsFilms('films', "Juin")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Juillet' && item.type === 'films' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Juillet</h3>
												{
													albumsFilms('films', "Juillet")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Août' && item.type === 'films' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Août</h3>
												{
													albumsFilms('films', "Août")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Septembre' && item.type === 'films' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Septembre</h3>
												{
													albumsFilms('films', "Septembre")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Octobre' && item.type === 'films' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Octobre</h3>
												{
													albumsFilms('films', "Octobre")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Novembre' && item.type === 'films' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Novembre</h3>
												{
													albumsFilms('films', "Novembre")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Décembre' && item.type === 'films' && item.year === currentYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Décembre</h3>
												{
													albumsFilms('films', "Décembre")
												}
											</div>
										}
									})
								}
							</div>
						</div>
						{
							checkFilmsNextYear()
						}
						<div className='month-container'>
							<div className='month-list'>
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Janvier' && item.type === 'films' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Janvier</h3>
												{
													albumsFilms('films', "Janvier")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Février' && item.type === 'films' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Février</h3>
												{
													albumsFilms('films', "Février")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Mars' && item.type === 'films' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Mars</h3>
												{
													albumsFilms('films', "Mars")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Avril' && item.type === 'films' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Avril</h3>
												{
													albumsFilms('films', "Avril")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Mai' && item.type === 'films' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Mai</h3>
												{
													albumsFilms('films', "Mai")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Juin' && item.type === 'films' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Juin</h3>
												{
													albumsFilms('films', "Juin")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Juillet' && item.type === 'films' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Juillet</h3>
												{
													albumsFilms('films', "Juillet")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Août' && item.type === 'films' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Août</h3>
												{
													albumsFilms('films', "Août")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Septembre' && item.type === 'films' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Septembre</h3>
												{
													albumsFilms('films', "Septembre")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Octobre' && item.type === 'films' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Octobre</h3>
												{
													albumsFilms('films', "Octobre")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Novembre' && item.type === 'films' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Novembre</h3>
												{
													albumsFilms('films', "Novembre")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Décembre' && item.type === 'films' && item.year === nextYear) {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Décembre</h3>
												{
													albumsFilms('films', "Décembre")
												}
											</div>
										}
									})
								}
							</div>
						</div>
					</div>
					<div id='expos-filter-container' className='expos event-category lg:max-w-screen-2xl lg:mx-auto'>
						<div className='filter-title sr-only'>
							<h2>Expos</h2>
						</div>
						<div className='month-container'>
							<div className='month-list'>
								<div className="month-item in-progress">
									<h3 className='month-title'>En cours</h3>
									{
										exposInProgress('expos')
									}
								</div>
								<div className="month-item soon">
									<h3 className='month-title'>À venir</h3>
									{
										exposSoon('expos')
									}
								</div>
							</div>
						</div>
					</div>
					<div id='theater-filter-container' className='theater event-category lg:max-w-screen-2xl lg:mx-auto'>
						<div className='filter-title sr-only'>
							<h2>Théâtre</h2>
						</div>
						<div className='month-container'>
							<div className='month-list'>
								<div className="month-item in-progress">
									<h3 className='month-title'>En cours</h3>
									{
										exposInProgress('theatre')
									}
								</div>
								<div className="month-item soon">
									<h3 className='month-title'>À venir</h3>
									{
										exposSoon('theatre')
									}
								</div>
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
