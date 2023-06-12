"use client"; 

import Image from 'next/image'
import client from "../../createClient";
import {useQuery} from "react-query";

interface propsType {
	id:string
}

export default function PreviewFilm({id}:propsType) {

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
			<a className="film-image-link" href={data[0].link}>
				<span className='link-to hidden lg:block'>En savoir plus</span>
				<Image
					className="image-film"
					src={data[0].image}
					alt="Film cover"
					width={204}
					height={204}
					priority
				/>
			</a>
			<p className='film-artist'>{data[0].director}</p>
			<p className='film-name'>{data[0].film}</p>
		</main>
	)
}
