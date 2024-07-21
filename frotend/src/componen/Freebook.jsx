import React from 'react'
import list from "../../public/list.json"
import Cards from './Cards';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Freebook = () => {
    const filterData = list.filter((data) => data.categorey === "Free");
    console.log("Free book");
    console.log(filterData);

    var settings = {
        dots: true,
        infinite: false,
        speed: 400,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div>
                    <h1 className='font-bold text-2xl pb-2 text-black dark:bg-slate-900 dark:text-white'>Free Offered courses</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eius, fuga pariatur vero consequuntur architecto veniam. Architecto quia similique porro minima incidunt aliquam, hic mollitia voluptatum excepturi magnam repudiandae beatae.</p>
                </div>
                <div className='dark:bg-slate-900 dark:text-white'>
                    <Slider {...settings} className='dark:bg-slate-900 dark:text-white'>
                        {
                            filterData.map((item) => (
                                <Cards item={item} key={item.id} />
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Freebook;
