import React from 'react'
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';


function Freebooks() {

    const filterdata = list.filter((data) => data.price==="0");
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
  <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 bg:text-white">
    <div>
        <h1 className="font-semibold text-xl mt-10 pt-2 pb-2">free offered courses</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, ad? Quaerat ali</p>
     </div>
    <div className="slider-container">
      <Slider {...settings}>
        {filterdata.map((item)=>(<Cards item = {item} key={item.id}/>))}
      </Slider>
    </div>
    </div>

  </>
      )
}

export default Freebooks
