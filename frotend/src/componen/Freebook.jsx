import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import axios from "axios";

const Freebook = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getBooks = async () => {
            try {
                const res = await axios.get("http://localhost:4000/book");
                console.log("API response:", res.data); // Log the entire response
                const data = res.data.filter((data) => data.categorey === "Free");
                console.log("Filtered free books:", data); // Log filtered books
                setBooks(data);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };
        getBooks();
    }, []);

    console.log("Books state:", books); // Log the books state

    const settings = {
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
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div>
                <h1 className='font-bold text-2xl pb-2 text-black dark:bg-slate-900 dark:text-white'>Free Offered Courses</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eius, fuga pariatur vero consequuntur architecto veniam. Architecto quia similique porro minima incidunt aliquam, hic mollitia voluptatum excepturi magnam repudiandae beatae.</p>
            </div>
            <div className='dark:bg-slate-900 dark:text-white'>
                <Slider {...settings} className='dark:bg-slate-900 dark:text-white'>
                    {books.map((book) => (
                        <Cards key={book.id} item={book} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Freebook;
