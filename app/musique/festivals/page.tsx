"use client";

import React, {Component, useCallback, useEffect, useState} from 'react';

// @ts-ignore
import Fade from 'react-reveal/Fade'
import client from "../../../src/createClient";
import {useQuery} from "react-query";
import PreviewArticle from "@/src/components/molecules/preview-article";
import Script from "next/script";

export default function Page() {

	const {data, status, refetch} = useQuery(
		'elementsArticlesMusiqueFestival', async(context) => {
			const query = `{
			"main" : *[_type=="articles" && category->slug.current=='musique' && subcategory->slug.current=='festival' && hidePublication != true && oldArticle != true]|order(date asc){"_id": _id},
			"articles" : *[_type=="articles" && category->slug.current=='musique' && subcategory->slug.current=='festival' && hidePublication != true && oldArticle != true]|order(date asc){"_id": _id}, 
			"oldArticles" : *[_type=="articles" && category->slug.current=='musique' && subcategory->slug.current=='festival' && hidePublication != true && oldArticle == true]|order(date desc){"_id": _id}}`;
			return await client.fetch(query);
		}
	);

	if (status !== 'success') {
		return <div className="page-main"></div>
	}

	return (
		<>
			<div className="page-main">
				<div className="category-page bg-primary festival">
					<div className="header-category lg:mx-auto lg:max-w-screen-2xl">
						<h1>
							<Fade left cascade>
								<p className='highlight-secondary'>Musique</p>
							</Fade>
							<Fade left cascade>
								Festivals
							</Fade>
						</h1>
						<div className='main-category-article lg:flex'>
							<div className='wrapper-title lg:order-2 lg:items-start lg:ml-12'>
								<h2>
									<span className='highlight-secondary'>Prochain </span>
									<span>festival</span>
								</h2>
								<div className='info-main-article hidden lg:block'>
									<PreviewArticle id={data.main[0]._id} />
								</div>
							</div>
							<PreviewArticle id={data.main[0]._id} />
						</div>
					</div>
				</div>
				<div className='grid-container layout-1x1 empty-grid'>
					<div className='wrapper-grid lg:max-w-screen-2xl lg:mx-auto'>
						{
							data.articles.map(function (item:any, index:number){
									if (index === 0) {
										return null
									}

									return <Fade key={item._id} bottom>
										<PreviewArticle key={item._id} id={item._id}/>
									</Fade>
								}
							)
						}
					</div>
				</div>
				<div className='grid-container layout-basic'>
					<h2>
						<span className='highlight-secondary'>FESTIVALS </span>
						<span>PASSÉS</span>
					</h2>
					<div className='wrapper-grid'>
						{
							data.oldArticles.map(function (item:any, index:number){
									return <Fade key={item._id} bottom>
										<PreviewArticle key={item._id} id={item._id}/>
									</Fade>
								}
							)
						}
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
		</>
	)
}
