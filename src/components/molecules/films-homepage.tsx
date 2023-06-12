"use client";
import PreviewFilm from "./preview-film";

import {useQuery} from 'react-query'
// @ts-ignore
import Slider from "react-slick"

import client from "../../createClient";

export default function FilmsHomepage() {
    var settings = {
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1
    };

    const {data, status} = useQuery(
        'elementsFilmsHomepage', async(context) => {
            const query = '*[_type=="momentFilms"]{_id}';
            return await client.fetch(query);
        }
    );

    if (status !== 'success') {
        return <></>
        // Create loader to wait
    }

    return (
        <div className='films-items lg:flex'>
            <Slider {...settings} className="lg:hidden">
                {
                    data.map(function (item:any){
                            return <PreviewFilm key={item._id} id={item._id}/>
                        }
                    )
                }
            </Slider>
            <div className="items-no-slideshow hidden lg:flex lg:w-full">
                {
                    data.map(function (item:any){
                            return <PreviewFilm key={item._id} id={item._id}/>
                        }
                    )
                }
            </div>
        </div>
    )
}
