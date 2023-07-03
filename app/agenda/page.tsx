"use client";

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
// @ts-ignore
import dayjs from "dayjs"
// @ts-ignore
import Fade from 'react-reveal/Fade'
// @ts-ignore
import Slider from "react-slick"
import client from "../../src/createClient";
import {useQuery} from "react-query";

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

	const {data, status} = useQuery(
		'elementsAgenda', async(context) => {
			const query = `*[_type=="events"]{
			  'date': date,
			  'month': month,
			  'title': title,
			  'type': type->slug.current,
			  'id': _id
			}`;
			return await client.fetch(query);
		}
	);

	if (status !== 'success') {
		return <></>
	}
	
	const events = (type:string, month:string):any => {
		return data.map(function (item:any) {
			if(item.type === type && item.month === month) {
				return <div key={item.id} className="event-infos">
					<ul className='month-event'>
						<li>{item.title}  <span className='highlight-secondary'>({dayjs(item.date).format("DD/MM/YYYY")})</span></li>
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
									data.map(function (item:any, index:any) {
										if (item.month === 'Janvier' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Janvier</h3>
												{
													events('albums', "Janvier")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Février' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Février</h3>
												{
													events('albums', "Février")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Mars' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Mars</h3>
												{
													events('albums', "Mars")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Avril' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Avril</h3>
												{
													events('albums', "Avril")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Mai' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Mai</h3>
												{
													events('albums', "Mai")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Juin' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Juin</h3>
												{
													events('albums', "Juin")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Juillet' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Juillet</h3>
												{
													events('albums', "Juillet")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Août' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Août</h3>
												{
													events('albums', "Août")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Septembre' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Septembre</h3>
												{
													events('albums', "Septembre")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Octobre' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Octobre</h3>
												{
													events('albums', "Octobre")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Novembre' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Novembre</h3>
												{
													events('albums', "Novembre")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Décembre' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Décembre</h3>
												{
													events('albums', "Décembre")
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
									data.map(function (item:any, index:any) {
										if (item.month === 'Janvier' && item.type === 'concerts') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Janvier</h3>
												{
													events('concerts', "Janvier")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Février' && item.type === 'concerts') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Février</h3>
												{
													events('concerts', "Février")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Mars' && item.type === 'concerts') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Mars</h3>
												{
													events('concerts', "Mars")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Avril' && item.type === 'concerts') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Avril</h3>
												{
													events('concerts', "Avril")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Mai' && item.type === 'concerts') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Mai</h3>
												{
													events('concerts', "Mai")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Juin' && item.type === 'concerts') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Juin</h3>
												{
													events('concerts', "Juin")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Juillet' && item.type === 'concerts') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Juillet</h3>
												{
													events('concerts', "Juillet")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Août' && item.type === 'concerts') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Août</h3>
												{
													events('concerts', "Août")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Septembre' && item.type === 'concerts') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Septembre</h3>
												{
													events('concerts', "Septembre")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Octobre' && item.type === 'concerts') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Octobre</h3>
												{
													events('concerts', "Octobre")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Novembre' && item.type === 'concerts') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Novembre</h3>
												{
													events('concerts', "Novembre")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Décembre' && item.type === 'concerts') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Décembre</h3>
												{
													events('concerts', "Décembre")
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
									data.map(function (item:any, index:any) {
										if (item.month === 'Janvier' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Janvier</h3>
												{
													events('films', "Janvier")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Février' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Février</h3>
												{
													events('films', "Février")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Mars' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Mars</h3>
												{
													events('films', "Mars")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Avril' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Avril</h3>
												{
													events('films', "Avril")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Mai' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Mai</h3>
												{
													events('films', "Mai")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Juin' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Juin</h3>
												{
													events('films', "Juin")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Juillet' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Juillet</h3>
												{
													events('films', "Juillet")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Août' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Août</h3>
												{
													events('films', "Août")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Septembre' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Septembre</h3>
												{
													events('films', "Septembre")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Octobre' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Octobre</h3>
												{
													events('films', "Octobre")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Novembre' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Novembre</h3>
												{
													events('films', "Novembre")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Décembre' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Décembre</h3>
												{
													events('films', "Décembre")
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
									data.map(function (item:any, index:any) {
										if (item.month === 'Janvier' && item.type === 'expos') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Janvier</h3>
												{
													events('expos', "Janvier")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Février' && item.type === 'expos') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Février</h3>
												{
													events('expos', "Février")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Mars' && item.type === 'expos') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Mars</h3>
												{
													events('expos', "Mars")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Avril' && item.type === 'expos') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Avril</h3>
												{
													events('expos', "Avril")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Mai' && item.type === 'expos') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Mai</h3>
												{
													events('expos', "Mai")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Juin' && item.type === 'expos') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Juin</h3>
												{
													events('expos', "Juin")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Juillet' && item.type === 'expos') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Juillet</h3>
												{
													events('expos', "Juillet")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Août' && item.type === 'expos') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Août</h3>
												{
													events('expos', "Août")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Septembre' && item.type === 'expos') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Septembre</h3>
												{
													events('expos', "Septembre")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Octobre' && item.type === 'expos') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Octobre</h3>
												{
													events('expos', "Octobre")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Novembre' && item.type === 'expos') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Novembre</h3>
												{
													events('expos', "Novembre")
												}
											</div>
										}
									})
								}
								{
									data.map(function (item:any, index:any) {
										if (item.month === 'Décembre' && item.type === 'expos') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Décembre</h3>
												{
													events('expos', "Décembre")
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
		</div>
	)
}
