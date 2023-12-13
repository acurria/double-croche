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
		'elementsAlbums', async(context) => {
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

	const albumsFilmsNextYear = (type:string, month:string):any => {
		return data.albumsFilmsNextYear.map(function (item:any) {
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
					<ul>
						<li id='albums-filter' className='item current'>
							<Link href={`/agenda/albums`} aria-label="Aller à Agenda Albums">Albums</Link>
						</li>
						<li id='concerts-filter' className='item'>
							<Link href={`/agenda/concerts`} aria-label="Aller à Agenda Concerts">Concerts</Link>
						</li>
						<li id='films-filter' className='item'>
							<Link href={`/agenda/films`} aria-label="Aller à Agenda Films">Films</Link>
						</li>
						<li id='expos-filter' className='item'>
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
					<div id='albums-filter-container' className='albums event-category lg:max-w-screen-2xl lg:mx-auto'>
						<div className='filter-title sr-only'>
							<h2>Albums</h2>
						</div>
						<div className='month-container'>
							<div className='month-list'>
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Janvier' && item.type === 'albums') {
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
										if (item.month === 'Février' && item.type === 'albums') {
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
										if (item.month === 'Mars' && item.type === 'albums') {
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
										if (item.month === 'Avril' && item.type === 'albums') {
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
										if (item.month === 'Mai' && item.type === 'albums') {
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
										if (item.month === 'Juin' && item.type === 'albums') {
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
										if (item.month === 'Juillet' && item.type === 'albums') {
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
										if (item.month === 'Août' && item.type === 'albums') {
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
										if (item.month === 'Septembre' && item.type === 'albums') {
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
										if (item.month === 'Octobre' && item.type === 'albums') {
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
										if (item.month === 'Novembre' && item.type === 'albums') {
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
										if (item.month === 'Décembre' && item.type === 'albums') {
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
						<div className='month-container next-year'>
							<div className='month-list'>
								{
									data.albumsFilmsNextYear.map(function (item:any, index:any) {
										if (item.month === 'Janvier' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Janvier</h3>
												{
													albumsFilmsNextYear('albums', "Janvier")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsNextYear.map(function (item:any, index:any) {
										if (item.month === 'Février' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Février</h3>
												{
													albumsFilmsNextYear('albums', "Février")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsNextYear.map(function (item:any, index:any) {
										if (item.month === 'Mars' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Mars</h3>
												{
													albumsFilmsNextYear('albums', "Mars")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsNextYear.map(function (item:any, index:any) {
										if (item.month === 'Avril' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Avril</h3>
												{
													albumsFilmsNextYear('albums', "Avril")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsNextYear.map(function (item:any, index:any) {
										if (item.month === 'Mai' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Mai</h3>
												{
													albumsFilmsNextYear('albums', "Mai")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsNextYear.map(function (item:any, index:any) {
										if (item.month === 'Juin' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Juin</h3>
												{
													albumsFilmsNextYear('albums', "Juin")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsNextYear.map(function (item:any, index:any) {
										if (item.month === 'Juillet' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Juillet</h3>
												{
													albumsFilmsNextYear('albums', "Juillet")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsNextYear.map(function (item:any, index:any) {
										if (item.month === 'Août' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Août</h3>
												{
													albumsFilmsNextYear('albums', "Août")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsNextYear.map(function (item:any, index:any) {
										if (item.month === 'Septembre' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Septembre</h3>
												{
													albumsFilmsNextYear('albums', "Septembre")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsNextYear.map(function (item:any, index:any) {
										if (item.month === 'Octobre' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Octobre</h3>
												{
													albumsFilmsNextYear('albums', "Octobre")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsNextYear.map(function (item:any, index:any) {
										if (item.month === 'Novembre' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Novembre</h3>
												{
													albumsFilmsNextYear('albums', "Novembre")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsNextYear.map(function (item:any, index:any) {
										if (item.month === 'Décembre' && item.type === 'albums') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Décembre</h3>
												{
													albumsFilmsNextYear('albums', "Décembre")
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
