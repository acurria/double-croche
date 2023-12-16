"use client";

import Image from 'next/image'
import {useNextSanityImage} from 'next-sanity-image'

// @ts-ignore
import Fade from 'react-reveal/Fade'
import {getArticle} from "@/src/createClient";
import client from "@/src/createClient";
import {PortableText} from '@portabletext/react'
import imageUrlBuilder from "@sanity/image-url";
import Script from "next/script";
import React from "react";
import PreviewArticle from "@/src/components/molecules/preview-article";

type propsType = {
	params: {article: string}
};

export default async function Article({params}:propsType) {
	const slug = params.article;
	const article = await getArticle(slug);
	const builder = imageUrlBuilder(client)
	function urlFor(source:any) {
		return builder.image(source)
	}

	const myPortableTextComponents = {
		types: {
			image: ({value}:any) => {
				return (
					<SanityImage {...value} />
				);
			},
		},
	};

	const SanityImage = ({asset}:any) => {
		const imageProps:any = useNextSanityImage(client, asset);

		if (!imageProps) return null;

		return (
			<Image {...imageProps} alt="image-article"/>
		);
	}

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
									article.categorySlug === 'musique' && article.subcategorySlug === 'interview' && <span className='info'><span className='highlight-secondary uppercase'>{article.artist} </span> pour '{article.album}'</span>
								}
								{
									article.categorySlug === 'musique' && article.subcategorySlug === 'festival' && <span className='info'><span className='highlight-secondary uppercase'>{article.musicFestivalName} {article.year} - </span>{article.city}</span>
								}
								{
									article.categorySlug === 'cinema' && article.subcategorySlug === 'festival' && <span className='info'><span className='highlight-secondary uppercase'>{article.filmFestivalName} </span>{article.year}</span>
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
					article.seeAlso1 && <div className='grid-container layout-basic see-also lg:max-w-screen-lg lg:mx-auto' >
						<h2>
							<span className='highlight-secondary'>À VOIR </span>
							<span>AUSSI</span>
						</h2>
						<div className='wrapper-grid'>
							{
								<Fade key={article.seeAlso1} bottom>
									<PreviewArticle key={article.seeAlso1} id={article.seeAlso1}/>
								</Fade>
							}
							{
								<Fade key={article.seeAlso2} bottom>
									<PreviewArticle key={article.seeAlso2} id={article.seeAlso2}/>
								</Fade>
							}
							{
								<Fade key={article.seeAlso3} bottom>
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
}
