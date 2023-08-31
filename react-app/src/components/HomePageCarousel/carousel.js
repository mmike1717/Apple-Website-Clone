import React, { useState, useEffect } from "react";
import image1 from './imagesForCarousel/moviepic1.png'
import image2 from './imagesForCarousel/moviepic2.jpg'
import image3 from './imagesForCarousel/moviepic3.jpg'
import image4 from './imagesForCarousel/moviepic4.jpg'
import './carousel.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



export default function HomePageCarousel() {
    // let images = [
    //     { path: image1 },
    //     { path: image2 },
    //     { path: image3 },
    //     { path: image4 }
    // ]
    // const [curr, setCurr] = useState(0)
    // const arrLength = images.length - 1;

    // const prev = () => {
    //     setCurr( curr === 0 ? arrLength : curr - 1)
    // }

    // const next = () => {
    //     setCurr( curr === arrLength ? 0 : curr + 1)
    // }

    // useEffect(() => {
    //     setCurr(0)
    // }, [])

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };


    return (
        <div className="DivHoldingCarousel">
            {/* <button onClick={() => prev()}>{'< prev'}</button> */}
            {/* {images.map((image, i)=>{
                return curr === i && (
                    <div>
                        <img className="EachImgInCarousel" src={image.path} />
                    </div>
                )
            })} */}
            {/* <button onClick={() => next()}>{'> next'}</button> */}
            <Carousel
            centerMode={true}
            responsive={responsive}
            showDots={true}
            // itemClass="carousel-item-padding-40-px"
            swipeable={true}
            infinite={true}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            autoPlay={true}
            autoPlaySpeed={4000}
            // keyBoardControl={true}
            customTransition="transform 900ms ease-in-out"
            // transitionDuration={500}

            >
                <div className="DivHoldingImgs">
                    <img className="EachImgInCarousel" src={image1} />

                </div>
                <div className="DivHoldingImgs">
                    <img className="EachImgInCarousel" src={image2} />

                </div>
                <div className="DivHoldingImgs">
                    <img className="EachImgInCarousel" src={image3} />

                </div>
                <div className="DivHoldingImgs">
                    <img className="EachImgInCarousel" src={image4} />

                </div>

            </Carousel>




        </div>
    )
}
