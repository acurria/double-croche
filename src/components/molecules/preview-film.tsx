"use client"; 

import client from "../../createClient";
import {useQuery} from "react-query";
import Link from "next/link";

import imageUrlBuilder from '@sanity/image-url'

interface propsType {
	id:string
}

export default function PreviewFilm({id}:propsType) {

	const builder = imageUrlBuilder(client)
	function urlFor(source:any) {
		return builder.image(source)
	}

	const {data, status} = useQuery(
		'elementsPreviewFilm_'+id, async(context) => {
			const query = `*[_type=="momentFilms" && _id=='${id}']{
				"image": image.asset->url,
				"director": director->firstLastName,
				"film": titleFilm->title,
				"externalUrl": link
			}`;
			return await client.fetch(query);
		}
	);

	if (status !== 'success') {
		return <></>
		// Create loader to wait
	}

	return (
		<main className='film'>
			<Link className="film-image-link" href={`/articles/${data[0].link}`}>
				<span className='link-to hidden lg:block'>En savoir plus</span>
				<img
					className="image-film"
					src={urlFor(data[0].image).url()}
					alt="Film cover"
					loading="lazy"
				/>
			</Link>
			<p className='film-artist'>{data[0].director}</p>
			<p className='film-name'>{data[0].film}</p>
		</main>
	)
}
