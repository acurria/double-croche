"use client";
import PreviewArticle from "./preview-article";

import Image from 'next/image'
import {useQuery} from 'react-query'

import client from "../../createClient";

export default function ArticlesNavMusic() {

    const {data, status} = useQuery(
        'elementsArticlesNavMusic', async(context) => {
            const query = '*[_type=="articles" && category->title=="Musique" && hidePublication != true]|order(createdDate desc)[0..2]';
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
