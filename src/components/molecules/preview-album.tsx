"use client"; 

import client from "../../createClient";
import {useQuery} from "react-query";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

interface propsType {
	id:string
}

export default function PreviewAlbum({id}:propsType) {

	const builder = imageUrlBuilder(client)
	function urlFor(source:any) {
		return builder.image(source)
	}

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
			<Link className="album-image-link" href={`/articles/${data[0].link}`} aria-label="Écouter">
				<span className='link-to hidden lg:block'>Écouter</span>
				<Image
					className="image-album"
					src={urlFor(data[0].image).url()}
					alt="Album cover"
					width={800}
					height={800}
				/>
			</Link>
			<p className='album-artist'>{data[0].artist}</p>
			<p className='album-name'>{data[0].album}</p>
		</main>
	)
}
