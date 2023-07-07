"use client";

import React, {Component, useCallback, useEffect, useState} from 'react';
// @ts-ignore
import Fade from 'react-reveal/Fade'
import client from "../../../src/createClient";
import {useQuery} from "react-query";
import PreviewArticle from "@/src/components/molecules/preview-article";
import Pager from "@/src/components/organisms/pager";

export default function Page() {
	const [page, setPage] = useState(0);
	const itemsPerPage = 17;

	const {data, status, refetch} = useQuery(
		'elementsArticlesCinemaInterview', async(context) => {
			const query = `{"total": count(*[_type=="articles" && category->slug.current=='cinema' && subcategory->slug.current=='interview']), "articles" : *[_type=="articles" && category->slug.current=='cinema' && subcategory->slug.current=='interview']{_id}|order(_createdAt desc)[${page*itemsPerPage}...${page*itemsPerPage + itemsPerPage-1}]}`;
			return await client.fetch(query);
		}
	);

	const changePage = useCallback((newPage:number) => {
		setPage(newPage);
	},[])

	useEffect(() => {
		refetch();
	}, [page, refetch]);

	if (status !== 'success') {
		return <></>
	}

	return (
		<>
			<div className="category-page bg-primary page-main">
				<div className="header-category lg:mx-auto lg:max-w-screen-2xl">
					<h1>
						<Fade left cascade>
							<p className='highlight-secondary'>Cinéma</p>
						</Fade>
						<Fade left cascade>
							Interviews
						</Fade>
					</h1>
					<div className='main-category-article lg:flex'>
						<div className='wrapper-title lg:order-2 lg:items-start lg:ml-12'>
							<h2>
								<span className='highlight-secondary'>Dernière </span>
								<span>interview</span>
							</h2>
							<div className='info-main-article hidden lg:block'>
								<PreviewArticle id={data.articles[0]._id} />
							</div>
						</div>
						<PreviewArticle id={data.articles[0]._id} />
					</div>
				</div>
			</div>
			<div className='grid-container layout-3x2'>
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
			<Pager items={itemsPerPage} total={data.total} onChange={changePage}/>
		</>
	)
}
