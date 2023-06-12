"use client";
import PreviewArticle from "./preview-article";

import Image from 'next/image'
import {useQuery} from 'react-query'

import client from "../../createClient";

export default function ArticlesNavCinema() {

    const {data, status} = useQuery(
        'elementsArticlesNavCinema', async(context) => {
            const query = '*[_type=="articles" && category->title=="Cinéma"]{_id}|order(_createdAt desc)[0..2]';
            return await client.fetch(query);
        }
    );

    if (status !== 'success') {
        return <></>
        // Create loader to wait
    }

    return (
        data.map(function (item:any, index:number){
                return <PreviewArticle key={item._id} id={item._id}/>
            }
        )
    )
}
