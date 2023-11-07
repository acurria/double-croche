"use client";

import React, {Component, useCallback, useEffect, useState} from 'react';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import client from "../../src/createClient";
import {useQuery} from "react-query";
import PreviewArticle from "@/src/components/molecules/preview-article";
import Script from "next/script";

type propsType = {
	searchValue:string
};

export default function Page({searchValue}:propsType) {

	console.log(searchValue);
	const {data, status, refetch} = useQuery(
		'elementsSearchResults', async(context) => {
			const query = `{
									"articles" : *[_type=="articles" && category->slug.current=='musique' && subcategory->slug.current=='interview' && hidePublication != true]|order(createdDate desc){"_id": _id}
									}`;

			return await client.fetch(query);
		}
	);

	if (status !== 'success') {
		return <div className="page-main"></div>
		// Create loader to wait
	}

	return (
		<>
			<div className="category-page bg-primary page-main search-results">
				<div className="header-category lg:mx-auto lg:max-w-screen-2xl">
					<h1>
						<Fade left cascade>
							<p className='highlight-secondary'>Résultats</p>
						</Fade>
						<Fade left cascade>
							DE RECHERCHE
						</Fade>
					</h1>
				</div>
			</div>
			<div id='grid-container' className='grid-container layout-basic'>
				<div className='wrapper-grid lg:max-w-screen-2xl lg:mx-auto'>
					{
						data.articles.map(function (item:any, index:number){
								if (data.articles.length === 0) {
									return <div key={item._id} className='empty-search-container'>
										<h2>Aucun résultat ne correspond à votre recherche</h2>
									</div>
								}
								return <Fade key={item._id} bottom>
									<PreviewArticle key={item._id} id={item._id}/>
								</Fade>
							}
						)
					}
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
