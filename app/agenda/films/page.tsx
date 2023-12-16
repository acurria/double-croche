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
		'elementsFilms', async(context) => {
			const query = `{"albumsFilms" : *[_type=="events" && year=="${currentYear}"]|order(dateStart asc){
															  'dateStart': dateStart,
															  'dateEnd': dateEnd,
															  'platform': platform->platformName,
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
															  'platform': platform->platformName,
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
			console.log(item)
			if(item.type === type && item.month === month) {
				return <div key={item.id} className="event-infos">
					<ul className='month-event'>
						<li>{item.title} <span className='highlight-secondary'>({dayjs(item.dateStart).format("DD/MM/YYYY")}{item.dateEnd && ' au ' + dayjs(item.dateEnd).format("DD/MM/YYYY")}{item.platform && ', ' + item.platform})</span>
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
						<li>{item.title} <span className='highlight-secondary'>({dayjs(item.dateStart).format("DD/MM/YYYY")}{item.dateEnd && ' au ' + dayjs(item.dateEnd).format("DD/MM/YYYY")}{item.platform && ', ' + item.platform})</span>
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
						<li id='films-filter' className='item current'>
							<Link href={`/agenda/films`} aria-label="Aller à Agenda Films">Films</Link>
						</li>
						<li id='albums-filter' className='item'>
							<Link href={`/agenda/albums`} aria-label="Aller à Agenda Albums">Albums</Link>
						</li>
						<li id='concerts-filter' className='item'>
							<Link href={`/agenda/concerts`} aria-label="Aller à Agenda Concerts">Concerts</Link>
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
			<div className='filter-container bg-black desktop'>
				<div className='filter-items'>
					<ul>
						<li id='albums-filter' className='item'>
							<Link href={`/agenda/albums`} aria-label="Aller à Agenda Albums">Albums</Link>
						</li>
						<li id='concerts-filter' className='item'>
							<Link href={`/agenda/concerts`} aria-label="Aller à Agenda Concerts">Concerts</Link>
						</li>
						<li id='films-filter' className='item current'>
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
					<div id='films-filter-container' className='films event-category lg:max-w-screen-2xl lg:mx-auto'>
						<div className='filter-title sr-only'>
							<h2>Films</h2>
						</div>
						<div className='month-container '>
							<div className='month-list'>
								{
									data.albumsFilms.map(function (item:any, index:any) {
										if (item.month === 'Janvier' && item.type === 'films') {
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
										if (item.month === 'Février' && item.type === 'films') {
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
										if (item.month === 'Mars' && item.type === 'films') {
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
										if (item.month === 'Avril' && item.type === 'films') {
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
										if (item.month === 'Mai' && item.type === 'films') {
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
										if (item.month === 'Juin' && item.type === 'films') {
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
										if (item.month === 'Juillet' && item.type === 'films') {
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
										if (item.month === 'Août' && item.type === 'films') {
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
										if (item.month === 'Septembre' && item.type === 'films') {
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
										if (item.month === 'Octobre' && item.type === 'films') {
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
										if (item.month === 'Novembre' && item.type === 'films') {
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
										if (item.month === 'Décembre' && item.type === 'films') {
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
						<div className='month-container next-year'>
							<div className='month-list'>
								{
									data.albumsFilmsNextYear.map(function (item:any, index:any) {
										if (item.month === 'Janvier' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Janvier</h3>
												{
													albumsFilmsNextYear('films', "Janvier")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsNextYear.map(function (item:any, index:any) {
										if (item.month === 'Février' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Février</h3>
												{
													albumsFilmsNextYear('films', "Février")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsNextYear.map(function (item:any, index:any) {
										if (item.month === 'Mars' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Mars</h3>
												{
													albumsFilmsNextYear('films', "Mars")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsNextYear.map(function (item:any, index:any) {
										if (item.month === 'Avril' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Avril</h3>
												{
													albumsFilmsNextYear('films', "Avril")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsNextYear.map(function (item:any, index:any) {
										if (item.month === 'Mai' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Mai</h3>
												{
													albumsFilmsNextYear('films', "Mai")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsNextYear.map(function (item:any, index:any) {
										if (item.month === 'Juin' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Juin</h3>
												{
													albumsFilmsNextYear('films', "Juin")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsNextYear.map(function (item:any, index:any) {
										if (item.month === 'Juillet' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Juillet</h3>
												{
													albumsFilmsNextYear('films', "Juillet")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsNextYear.map(function (item:any, index:any) {
										if (item.month === 'Août' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Août</h3>
												{
													albumsFilmsNextYear('films', "Août")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsNextYear.map(function (item:any, index:any) {
										if (item.month === 'Septembre' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Septembre</h3>
												{
													albumsFilmsNextYear('films', "Septembre")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsNextYear.map(function (item:any, index:any) {
										if (item.month === 'Octobre' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Octobre</h3>
												{
													albumsFilmsNextYear('films', "Octobre")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsNextYear.map(function (item:any, index:any) {
										if (item.month === 'Novembre' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Novembre</h3>
												{
													albumsFilmsNextYear('films', "Novembre")
												}
											</div>
										}
									})
								}
								{
									data.albumsFilmsNextYear.map(function (item:any, index:any) {
										if (item.month === 'Décembre' && item.type === 'films') {
											return <div key={index} className={`month-item ${item.month}`}>
												<h3 className='month-title'>Décembre</h3>
												{
													albumsFilmsNextYear('films', "Décembre")
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
