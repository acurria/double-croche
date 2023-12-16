"use client";

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Script from 'next/script'
// @ts-ignore
import dayjs from "dayjs"
// @ts-ignore
import Fade from 'react-reveal/Fade'
// @ts-ignore
import client from "@/src/createClient";
import {useQuery} from "react-query";
import React from "react";
import Link from "next/link";

export default function Page() {

	const currentDate = new Date();
	const currentYear = new Date().getFullYear().toString();

	const nextYearInt = new Date().getFullYear() + 1;
	const nextYear = nextYearInt.toString();

	const {data, status} = useQuery(
		'elementsExpos', async(context) => {
			const query = `{"albumsFilms" : *[_type=="events" && year=="${currentYear}"]|order(dateStart asc){
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
															"concerts" : *[_type=="events"][type->slug.current match 'concerts' && year=="${currentYear}"]|order(dateEnd asc){
															  'dateStart': dateStart,
															  'dateEnd': dateEnd,
															  'month': month,
															  'year': year,
															  'title': title,
															  'type': type->slug.current,
															  'id': _id
															},
															"albumsFilmsNextYear" : *[_type=="events" && year=="${nextYear}"]|order(dateStart asc){
															  'dateStart': dateStart,
															  'dateEnd': dateEnd,
															  'month': month,
															  'year': year,
															  'title': title,
															  'type': type->slug.current,
															  'id': _id
															},
															"concertsNextYear" : *[_type=="events"][type->slug.current match 'concerts' && year=="${nextYear}"]|order(dateEnd asc){
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

			if ((givenDateStart < currentDate || (givenDateStart.getDate() === currentDate.getDate() &&  givenDateStart.getMonth() === currentDate.getMonth() && givenDateStart.getFullYear() === currentDate.getFullYear())) && (givenDateEnd > currentDate || (givenDateEnd.getDate() === currentDate.getDate() &&  givenDateEnd.getMonth() === currentDate.getMonth() && givenDateEnd.getFullYear() === currentDate.getFullYear())) && item.type === type) {
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
					<p className='highlight-secondary'>Agenda</p>
				</h1>
			</div>
			<div className='filter-container bg-black mobile'>
				<div className='filter-items'>
					<ul>
						<li id='expos-filter' className='item current'>
							<Link href={`/agenda/expos`} aria-label="Aller à Agenda Expos">Expos</Link>
						</li>
						<li id='albums-filter' className='item'>
							<Link href={`/agenda/albums`} aria-label="Aller à Agenda Albums">Albums</Link>
						</li>
						<li id='concerts-filter' className='item'>
							<Link href={`/agenda/concerts`} aria-label="Aller à Agenda Concerts">Concerts</Link>
						</li>
						<li id='films-filter' className='item'>
							<Link href={`/agenda/films`} aria-label="Aller à Agenda Films">Films</Link>
						</li>
						<li id='theater-filter' className='item'>
							<Link href={`/agenda/theatre`} aria-label="Aller à Agenda Théâtre">Théâtre</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className='filter-container bg-black desktop'>
				<div className='filter-items'>
					<ul>
						<li id='albums-filter' className='item'>
							<Link href={`/agenda/albums`} aria-label="Aller à Agenda Albums">Albums</Link>
						</li>
						<li id='concerts-filter' className='item'>
							<Link href={`/agenda/concerts`} aria-label="Aller à Agenda Concerts">Concerts</Link>
						</li>
						<li id='films-filter' className='item'>
							<Link href={`/agenda/films`} aria-label="Aller à Agenda Films">Films</Link>
						</li>
						<li id='expos-filter' className='item current'>
							<Link href={`/agenda/expos`} aria-label="Aller à Agenda Expos">Expos</Link>
						</li>
						<li id='theater-filter' className='item'>
							<Link href={`/agenda/theatre`} aria-label="Aller à Agenda Théâtre">Théâtre</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className='result-filter-container bg-white'>
				<div className='agenda-list'>
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
