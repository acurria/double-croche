"use client"; 

import Image from 'next/image'
import client from "../../createClient";
import {useQuery} from "react-query";

interface propsType {
	id:string
}

export default function PreviewAlbum({id}:propsType) {

	const {data, status} = useQuery(
		'elementsPreviewAlbum_'+id, async(context) => {
			const query = `*[_type=="momentAlbums" && _id=='${id}']{
				"image": image.asset->url,
				"artist": artist->firstLastName,
				"album": titleAlbum->title,
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
		<main className='album'>
			<a className="album-image-link" href='' title={data[0].link}>
				<span className='link-to hidden lg:block'>Écouter</span>
				<Image
					className="image-album"
					src={data[0].image}
					alt="Album cover"
					width={204}
					height={204}
					priority
				/>
			</a>
			<p className='album-artist'>{data[0].artist}</p>
			<p className='album-name'>{data[0].album}</p>
		</main>
	)
}
