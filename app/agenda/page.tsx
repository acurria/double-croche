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

    const currentDate = new Date();
    const currentYear = new Date().getFullYear().toString();

    const nextYearInt = new Date().getFullYear() + 1;
    const nextYear = nextYearInt.toString();

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
            const givenDateStart = new Date(item.dateStart);

            if(item.type === type && item.month === month && (givenDateStart.getMonth() + 1) >= (currentDate.getMonth() + 1)) {
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

    const concerts = (type:string, month:string):any => {
        return data.concerts.map(function (item:any) {
            const givenDateEnd = new Date(item.dateEnd);

            if(item.type === type && item.month === month && (givenDateEnd > currentDate || (givenDateEnd.getDate() === currentDate.getDate() && givenDateEnd.getMonth() === currentDate.getMonth() && givenDateEnd.getFullYear() === currentDate.getFullYear()))) {
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

    const concertsNextYear = (type:string, month:string):any => {
        return data.concertsNextYear.map(function (item:any) {
            const givenDateEnd = new Date(item.dateEnd);

            if(item.type === type && item.month === month && (givenDateEnd > currentDate || (givenDateEnd.getDate() === currentDate.getDate() && givenDateEnd.getMonth() === currentDate.getMonth() && givenDateEnd.getFullYear() === currentDate.getFullYear()))) {
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
                        <div className='month-container'>
                            <div className='month-list'>
                                {
                                    data.albumsFilms.map(function (item:any, index:any) {
                                        const givenDateStart = new Date(item.dateStart);

                                        if (item.month === 'Janvier' && item.type === 'albums' && ((givenDateStart.getMonth() + 1) >= (currentDate.getMonth() + 1))) {
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
                                        const givenDateStart = new Date(item.dateStart);

                                        if (item.month === 'Février' && item.type === 'albums' && ((givenDateStart.getMonth() + 1) >= (currentDate.getMonth() + 1))) {
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
                                        const givenDateStart = new Date(item.dateStart);

                                        if (item.month === 'Mars' && item.type === 'albums' && ((givenDateStart.getMonth() + 1) >= (currentDate.getMonth() + 1))) {
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
                                        const givenDateStart = new Date(item.dateStart);

                                        if (item.month === 'Avril' && item.type === 'albums' && ((givenDateStart.getMonth() + 1) >= (currentDate.getMonth() + 1))) {
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
                                        const givenDateStart = new Date(item.dateStart);

                                        if (item.month === 'Mai' && item.type === 'albums' && ((givenDateStart.getMonth() + 1) >= (currentDate.getMonth() + 1))) {
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
                                        const givenDateStart = new Date(item.dateStart);

                                        if (item.month === 'Juin' && item.type === 'albums' && ((givenDateStart.getMonth() + 1) >= (currentDate.getMonth() + 1))) {
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
                                        const givenDateStart = new Date(item.dateStart);

                                        if (item.month === 'Juillet' && item.type === 'albums' && ((givenDateStart.getMonth() + 1) >= (currentDate.getMonth() + 1))) {
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
                                        const givenDateStart = new Date(item.dateStart);

                                        if (item.month === 'Août' && item.type === 'albums' && ((givenDateStart.getMonth() + 1) >= (currentDate.getMonth() + 1))) {
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
                                        const givenDateStart = new Date(item.dateStart);

                                        if (item.month === 'Septembre' && item.type === 'albums' && ((givenDateStart.getMonth() + 1) >= (currentDate.getMonth() + 1))) {
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
                                        const givenDateStart = new Date(item.dateStart);

                                        if (item.month === 'Octobre' && item.type === 'albums' && ((givenDateStart.getMonth() + 1) >= (currentDate.getMonth() + 1))) {
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
                                        const givenDateStart = new Date(item.dateStart);

                                        if (item.month === 'Novembre' && item.type === 'albums' && ((givenDateStart.getMonth() + 1) >= (currentDate.getMonth() + 1))) {
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
                                        const givenDateStart = new Date(item.dateStart);

                                        if (item.month === 'Décembre' && item.type === 'albums' && ((givenDateStart.getMonth() + 1) >= (currentDate.getMonth() + 1))) {
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
                    <div id='concerts-filter-container' className='concerts event-category lg:max-w-screen-2xl lg:mx-auto'>
                        <div className='filter-title sr-only'>
                            <h2>Concerts</h2>
                        </div>
                        <div className='month-container'>
                            <div className='month-list'>
                                {
                                    data.concerts.map(function (item:any, index:any) {
                                        const givenDateEnd = new Date(item.dateEnd);

                                        if (item.month === 'Janvier' && item.type === 'concerts' && givenDateEnd > currentDate) {
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
                                        const givenDateEnd = new Date(item.dateEnd);

                                        if (item.month === 'Février' && item.type === 'concerts' && givenDateEnd > currentDate) {
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
                                        const givenDateEnd = new Date(item.dateEnd);

                                        if (item.month === 'Mars' && item.type === 'concerts' && givenDateEnd > currentDate) {
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
                                        const givenDateEnd = new Date(item.dateEnd);

                                        if (item.month === 'Avril' && item.type === 'concerts' && givenDateEnd > currentDate) {
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
                                        const givenDateEnd = new Date(item.dateEnd);

                                        if (item.month === 'Mai' && item.type === 'concerts' && givenDateEnd > currentDate) {
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
                                        const givenDateEnd = new Date(item.dateEnd);

                                        if (item.month === 'Juin' && item.type === 'concerts' && givenDateEnd > currentDate) {
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
                                        const givenDateEnd = new Date(item.dateEnd);

                                        if (item.month === 'Juillet' && item.type === 'concerts' && givenDateEnd > currentDate) {
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
                                        const givenDateEnd = new Date(item.dateEnd);

                                        if (item.month === 'Août' && item.type === 'concerts' && givenDateEnd > currentDate) {
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
                                        const givenDateEnd = new Date(item.dateEnd);

                                        if (item.month === 'Septembre' && item.type === 'concerts' && givenDateEnd > currentDate) {
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
                                        const givenDateEnd = new Date(item.dateEnd);

                                        if (item.month === 'Octobre' && item.type === 'concerts' && givenDateEnd > currentDate) {
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
                                        const givenDateEnd = new Date(item.dateEnd);

                                        if (item.month === 'Novembre' && item.type === 'concerts' && givenDateEnd > currentDate) {
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
                                        const givenDateEnd = new Date(item.dateEnd);

                                        if (item.month === 'Décembre' && item.type === 'concerts' && givenDateEnd > currentDate) {
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
                        <div className='month-container next-year'>
                            <div className='month-list'>
                                {
                                    data.concertsNextYear.map(function (item:any, index:any) {
                                        const givenDateEnd = new Date(item.dateEnd);

                                        if (item.month === 'Janvier' && item.type === 'concerts' && givenDateEnd > currentDate) {
                                            return <div key={index} className={`month-item ${item.month}`}>
                                                <h3 className='month-title'>Janvier</h3>
                                                {
                                                    concertsNextYear('concerts', "Janvier")
                                                }
                                            </div>
                                        }
                                    })
                                }
                                {
                                    data.concertsNextYear.map(function (item:any, index:any) {
                                        const givenDateEnd = new Date(item.dateEnd);

                                        if (item.month === 'Février' && item.type === 'concerts' && givenDateEnd > currentDate) {
                                            return <div key={index} className={`month-item ${item.month}`}>
                                                <h3 className='month-title'>Février</h3>
                                                {
                                                    concertsNextYear('concerts', "Février")
                                                }
                                            </div>
                                        }
                                    })
                                }
                                {
                                    data.concertsNextYear.map(function (item:any, index:any) {
                                        const givenDateEnd = new Date(item.dateEnd);

                                        if (item.month === 'Mars' && item.type === 'concerts' && givenDateEnd > currentDate) {
                                            return <div key={index} className={`month-item ${item.month}`}>
                                                <h3 className='month-title'>Mars</h3>
                                                {
                                                    concertsNextYear('concerts', "Mars")
                                                }
                                            </div>
                                        }
                                    })
                                }
                                {
                                    data.concertsNextYear.map(function (item:any, index:any) {
                                        const givenDateEnd = new Date(item.dateEnd);

                                        if (item.month === 'Avril' && item.type === 'concerts' && givenDateEnd > currentDate) {
                                            return <div key={index} className={`month-item ${item.month}`}>
                                                <h3 className='month-title'>Avril</h3>
                                                {
                                                    concertsNextYear('concerts', "Avril")
                                                }
                                            </div>
                                        }
                                    })
                                }
                                {
                                    data.concertsNextYear.map(function (item:any, index:any) {
                                        const givenDateEnd = new Date(item.dateEnd);

                                        if (item.month === 'Mai' && item.type === 'concerts' && givenDateEnd > currentDate) {
                                            return <div key={index} className={`month-item ${item.month}`}>
                                                <h3 className='month-title'>Mai</h3>
                                                {
                                                    concertsNextYear('concerts', "Mai")
                                                }
                                            </div>
                                        }
                                    })
                                }
                                {
                                    data.concertsNextYear.map(function (item:any, index:any) {
                                        const givenDateEnd = new Date(item.dateEnd);

                                        if (item.month === 'Juin' && item.type === 'concerts' && givenDateEnd > currentDate) {
                                            return <div key={index} className={`month-item ${item.month}`}>
                                                <h3 className='month-title'>Juin</h3>
                                                {
                                                    concertsNextYear('concerts', "Juin")
                                                }
                                            </div>
                                        }
                                    })
                                }
                                {
                                    data.concertsNextYear.map(function (item:any, index:any) {
                                        const givenDateEnd = new Date(item.dateEnd);

                                        if (item.month === 'Juillet' && item.type === 'concerts' && givenDateEnd > currentDate) {
                                            return <div key={index} className={`month-item ${item.month}`}>
                                                <h3 className='month-title'>Juillet</h3>
                                                {
                                                    concertsNextYear('concerts', "Juillet")
                                                }
                                            </div>
                                        }
                                    })
                                }
                                {
                                    data.concertsNextYear.map(function (item:any, index:any) {
                                        const givenDateEnd = new Date(item.dateEnd);

                                        if (item.month === 'Août' && item.type === 'concerts' && givenDateEnd > currentDate) {
                                            return <div key={index} className={`month-item ${item.month}`}>
                                                <h3 className='month-title'>Août</h3>
                                                {
                                                    concertsNextYear('concerts', "Août")
                                                }
                                            </div>
                                        }
                                    })
                                }
                                {
                                    data.concertsNextYear.map(function (item:any, index:any) {
                                        const givenDateEnd = new Date(item.dateEnd);

                                        if (item.month === 'Septembre' && item.type === 'concerts' && givenDateEnd > currentDate) {
                                            return <div key={index} className={`month-item ${item.month}`}>
                                                <h3 className='month-title'>Septembre</h3>
                                                {
                                                    concertsNextYear('concerts', "Septembre")
                                                }
                                            </div>
                                        }
                                    })
                                }
                                {
                                    data.concertsNextYear.map(function (item:any, index:any) {
                                        const givenDateEnd = new Date(item.dateEnd);

                                        if (item.month === 'Octobre' && item.type === 'concerts' && givenDateEnd > currentDate) {
                                            return <div key={index} className={`month-item ${item.month}`}>
                                                <h3 className='month-title'>Octobre</h3>
                                                {
                                                    concertsNextYear('concerts', "Octobre")
                                                }
                                            </div>
                                        }
                                    })
                                }
                                {
                                    data.concertsNextYear.map(function (item:any, index:any) {
                                        const givenDateEnd = new Date(item.dateEnd);

                                        if (item.month === 'Novembre' && item.type === 'concerts' && givenDateEnd > currentDate) {
                                            return <div key={index} className={`month-item ${item.month}`}>
                                                <h3 className='month-title'>Novembre</h3>
                                                {
                                                    concertsNextYear('concerts', "Novembre")
                                                }
                                            </div>
                                        }
                                    })
                                }
                                {
                                    data.concertsNextYear.map(function (item:any, index:any) {
                                        const givenDateEnd = new Date(item.dateEnd);

                                        if (item.month === 'Décembre' && item.type === 'concerts' && givenDateEnd > currentDate) {
                                            return <div key={index} className={`month-item ${item.month}`}>
                                                <h3 className='month-title'>Décembre</h3>
                                                {
                                                    concertsNextYear('concerts', "Décembre")
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
                        <div className='month-container '>
                            <div className='month-list'>
                                {
                                    data.albumsFilms.map(function (item:any, index:any) {
                                        const givenDateStart = new Date(item.dateStart);

                                        if (item.month === 'Janvier' && item.type === 'films' && ((givenDateStart.getMonth() + 1) >= (currentDate.getMonth() + 1))) {
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
                                        const givenDateStart = new Date(item.dateStart);

                                        if (item.month === 'Février' && item.type === 'films' && ((givenDateStart.getMonth() + 1) >= (currentDate.getMonth() + 1))) {
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
                                        const givenDateStart = new Date(item.dateStart);

                                        if (item.month === 'Mars' && item.type === 'films' && ((givenDateStart.getMonth() + 1) >= (currentDate.getMonth() + 1))) {
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
                                        const givenDateStart = new Date(item.dateStart);

                                        if (item.month === 'Avril' && item.type === 'films' && ((givenDateStart.getMonth() + 1) >= (currentDate.getMonth() + 1))) {
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
                                        const givenDateStart = new Date(item.dateStart);

                                        if (item.month === 'Mai' && item.type === 'films' && ((givenDateStart.getMonth() + 1) >= (currentDate.getMonth() + 1))) {
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
                                        const givenDateStart = new Date(item.dateStart);

                                        if (item.month === 'Juin' && item.type === 'films' && ((givenDateStart.getMonth() + 1) >= (currentDate.getMonth() + 1))) {
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
                                        const givenDateStart = new Date(item.dateStart);

                                        if (item.month === 'Juillet' && item.type === 'films' && ((givenDateStart.getMonth() + 1) >= (currentDate.getMonth() + 1))) {
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
                                        const givenDateStart = new Date(item.dateStart);

                                        if (item.month === 'Août' && item.type === 'films' && ((givenDateStart.getMonth() + 1) >= (currentDate.getMonth() + 1))) {
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
                                        const givenDateStart = new Date(item.dateStart);

                                        if (item.month === 'Septembre' && item.type === 'films' && ((givenDateStart.getMonth() + 1) >= (currentDate.getMonth() + 1))) {
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
                                        const givenDateStart = new Date(item.dateStart);

                                        if (item.month === 'Octobre' && item.type === 'films' && ((givenDateStart.getMonth() + 1) >= (currentDate.getMonth() + 1))) {
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
                                        const givenDateStart = new Date(item.dateStart);

                                        if (item.month === 'Novembre' && item.type === 'films' && ((givenDateStart.getMonth() + 1) >= (currentDate.getMonth() + 1))) {
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
                                        const givenDateStart = new Date(item.dateStart);

                                        if (item.month === 'Décembre' && item.type === 'films' && ((givenDateStart.getMonth() + 1) >= (currentDate.getMonth() + 1))) {
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