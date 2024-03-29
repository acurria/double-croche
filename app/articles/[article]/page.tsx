"use client";

import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
import Script from 'next/script';
import React, { useEffect, useState } from 'react';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import { getArticle } from '@/src/createClient';
import client from '@/src/createClient';
import PreviewArticle from '@/src/components/molecules/preview-article';
import Link from "next/link";

interface propsType {
	params: { article: string };
}

export default function Article({params}:propsType) {
	const [article, setArticle] = useState<{
		artist: string,
		image: any,
		album: string,
		category: string,
		categorySlug: any,
		subcategory: string,
		subcategorySlug: any,
		musicFestivalName: string,
		filmFestivalName: string,
		city: string,
		year: string,
		month: string,
		part: string,
		director: string,
		filmTitle: string,
		date: any,
		localisation: string,
		externalLink: any,
		url: any,
		content: any,
		title: string,
		newsTitle: string,
		metadescription: string,
		seeAlso1: any,
		seeAlso2: any,
		seeAlso3: any
	} | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			const slug = params.article;
			const fetchedArticle = await getArticle(slug);
			setArticle(fetchedArticle);
		};

		fetchData();
	}, [params.article]);


	if (!article) {
		return (
			<div className='page-main' />
		);
	}

	const builder = imageUrlBuilder(client);
	function urlFor(source: any) {
		return builder.image(source);
	}

	const myPortableTextComponents = {
		types: {
			image: ({ value }: any) => {
				return <SanityImage {...value} />;
			},
		},
	};

	const SanityImage = ({ asset }: any) => {
		const imageProps: any = useNextSanityImage(client, asset);

		if (!imageProps) return null;

		return <Image {...imageProps} alt="image-article" />;
	};

	return (
		<div className="article bg-primary page-main">
			<div className="article-page">
				<div className="header-article lg:mx-auto lg:max-w-screen-2xl">
					<h1 className='sr-only'>{article.title}</h1>
					<h2 className='title-mobile'>
						<Fade left cascade>
							<p className='highlight-secondary'>{article.category} - </p>
						</Fade>
						<Fade left cascade>
							[{article.subcategory}]
						</Fade>
					</h2>
					<div className='main-section-article lg:flex'>
						<Image
							className="image-preview-article"
							src={urlFor(article.image).url()}
							alt="Vercel Logo"
							width={800}
							height={800}
						/>
						<div className='wrapper-title'>
							<h2 className='title-desktop'>
								<Fade left cascade>
									<p className='highlight-secondary'>{article.category} - </p>
								</Fade>
								<Fade left cascade>
									[{article.subcategory}]
								</Fade>
							</h2>
							<p className='title-info'>
								{
									article.categorySlug === 'series' && article.subcategorySlug === 'news' && <span className='info'><span className="uppercase highlight-secondary">{article.artist}{article.album}{article.director}{article.filmTitle}{article.musicFestivalName}{article.filmFestivalName}</span> : {article.newsTitle}</span>
								}
								{
									article.categorySlug === 'musique' && article.subcategorySlug === 'interview' && <span className='info'><span className='highlight-secondary uppercase'>{article.artist} </span> pour '{article.album}'</span>
								}
								{
									article.categorySlug === 'musique' && article.subcategorySlug === 'festival' && <span className='info'><span className='highlight-secondary uppercase'>{article.musicFestivalName} {article.year} - </span>{article.city}</span>
								}
								{
									article.categorySlug === 'musique' && article.subcategorySlug === 'news' && <span className='info'><span className="uppercase highlight-secondary">{article.artist}{article.artist}{article.musicFestivalName}</span> : {article.newsTitle}</span>
								}
								{
									article.categorySlug === 'cinema' && article.subcategorySlug === 'festival' && <span className='info'><span className='highlight-secondary uppercase'>{article.filmFestivalName} </span>{article.year}</span>
								}
								{
									article.categorySlug === 'cinema' && article.subcategorySlug === 'news' && <span className='info'><span className="uppercase highlight-secondary">{article.director}{article.filmTitle}{article.filmFestivalName}</span> : {article.newsTitle}</span>
								}
								{
									article.categorySlug === 'cinema' && article.subcategorySlug === 'chronique' && <span className='info'><span className='highlight-secondary uppercase'>'{article.filmTitle}' </span> de {article.director}</span>
								}
								{
									article.categorySlug === 'cinema' && article.subcategorySlug === 'interview' && <span className='info'><span className='highlight-secondary uppercase'>{article.director} </span> pour '{article.filmTitle}'</span>
								}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='article-container'>
				<div className='wrapper-article lg:max-w-screen-lg lg:mx-auto'>
					{
						article.categorySlug === 'cinema' && article.subcategorySlug === 'festival' && <h2 className='article-title'>{article.title}</h2>
					}
					<PortableText value={article.content} components={myPortableTextComponents}/>
				</div>
				{
					(article.seeAlso1) && <div className='grid-container layout-basic see-also lg:max-w-screen-lg lg:mx-auto' >
						<h2>
							<span className='highlight-secondary'>À VOIR </span>
							<span>AUSSI</span>
						</h2>
						<div className='wrapper-grid'>
							{
								(article.seeAlso1) && <Fade key={article.seeAlso1} bottom>
									<PreviewArticle key={article.seeAlso1} id={article.seeAlso1}/>
								</Fade>
							}
							{
								(article.seeAlso2) && <Fade key={article.seeAlso2} bottom>
									<PreviewArticle key={article.seeAlso2} id={article.seeAlso2}/>
								</Fade>
							}
							{
								(article.seeAlso3) && <Fade key={article.seeAlso3} bottom>
									<PreviewArticle key={article.seeAlso3} id={article.seeAlso3}/>
								</Fade>
							}
						</div>
					</div>
				}
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
};
