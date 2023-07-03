"use client";

// @ts-ignore
import Fade from 'react-reveal/Fade'
import client from "../../../src/createClient";
import {useQuery} from "react-query";
import PreviewArticle from "@/src/components/molecules/preview-article";

export default function Page() {

	const {data, status} = useQuery(
		'elementsArticlesCinemaChronique', async(context) => {
			const query = `*[_type=="articles" && category->slug.current=='cinema' && subcategory->slug.current=='chronique']{_id}|order(_createdAt desc)`;
			return await client.fetch(query);
		}
	);

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
							Chroniques
						</Fade>
					</h1>
					<div className='main-category-article lg:flex'>
						<div className='wrapper-title lg:order-2 lg:items-start lg:ml-12'>
							<h2>
								<span className='highlight-secondary'>Dernière </span>
								<span>chronique</span>
							</h2>
							<div className='info-main-article hidden lg:block'>
								<PreviewArticle id={data[0]._id} />
							</div>
						</div>
						<PreviewArticle id={data[0]._id} />
					</div>
				</div>
			</div>
			<div className='grid-container layout-3x2'>
				<div className='wrapper-grid lg:max-w-screen-2xl lg:mx-auto'>
					{
						data.map(function (item:any, index:number){
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
		</>
	)
}
