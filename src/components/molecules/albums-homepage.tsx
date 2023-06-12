"use client";
import PreviewAlbum from "./preview-album";

import {useQuery} from 'react-query'
// @ts-ignore
import Slider from "react-slick"

import client from "../../createClient";

export default function AlbumsHomepage() {
    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1
    };

    const {data, status} = useQuery(
        'elementsAlbumsHomepage', async(context) => {
            const query = '*[_type=="momentAlbums"]{_id}';
            return await client.fetch(query);
        }
    );

    if (status !== 'success') {
        return <></>
        // Create loader to wait
    }

    return (
        <div className='albums-items lg:flex'>
            <Slider {...settings} className="lg:hidden">
                {
                    data.map(function (item:any){
                        console.log(item._id)
                            return <PreviewAlbum key={item._id} id={item._id}/>
                        }
                    )
                }
            </Slider>
            <div className="items-no-slideshow hidden lg:flex lg:w-full">
                {
                    data.map(function (item:any){
                            return <PreviewAlbum key={item._id} id={item._id}/>
                        }
                    )
                }
            </div>
        </div>
    )
}
