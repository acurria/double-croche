"use client";
import PreviewArticle from "./preview-article";

import Image from 'next/image'
import {useQuery} from 'react-query'

import client from "../../createClient";

export default function ArticlesHomepage() {

    const {data, status} = useQuery(
        'elementsArticlesHomepage', async(context) => {
            const query = '*[_type=="articles"]{_id}|order(_createdAt desc)[0..8]';
            return await client.fetch(query);
        }
    );

    if (status !== 'success') {
        return <></>
        // Create loader to wait
    }

    return (
        <main className='preview-article lg:flex lg:items-start'>
            <div className='main-article'>
                <PreviewArticle id={data[0]._id} />
            </div>
            <div className='recent-articles-grid flex justify-center items-start flex-wrap lg:justify-end'>
                {
                    data.map(function (item:any, index:number){
                        if (index === 0) {
                            return null
                        }
                        return <PreviewArticle key={item._id} id={item._id}/>
                        }
                    )
                }
            </div>
        </main>
    )
}
