import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "swiper/css";

const truncateText = (text, limit) => {
  const words = text.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  }
  return text;
};

const Home = () => {
  const [popular, setPopular] = useState([]);
  const [Rated, setRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=36201686cce757ae2ee78ef110492003&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopular(data.results));
  }, []);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=36201686cce757ae2ee78ef110492003&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setRated(data.results));
  }, []);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=36201686cce757ae2ee78ef110492003&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setUpcoming(data.results));
  }, []);

  var settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" w-full absolute">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={10}
        infiniteLoop={true}
        showStatus={false}
      >
        {popular.map((movie) => (
          <Link to={`/movie/${movie.id}`}>
            <div className=" car h-[80vh]">
              <div className=" cartext absolute z-50 flex flex-col text-left p-10 space-y-2 pt-[40vh] ">
                <span className=" title font-semibold text-7xl uppercase w-[60vw]">
                  {movie.title}
                </span>
                <div className=" flex space-x-10 text-xl">
                  <span className="pop">
                    <strong>Votes - </strong>
                    {movie.popularity}
                  </span>
                  <span className=" font-semibold date">
                    {movie.release_date}
                  </span>
                </div>
                <span className=" text-lg  w-[50vw] overview">
                  {truncateText(movie.overview, 30)}
                </span>
              </div>
              <img
                className=" opacity-60 -z-50 object-cover "
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              />
            </div>
          </Link>
        ))}
      </Carousel>

      {/* Top Rated  */}

      <h1 className=" p-10 pl-12 pb-4 text-3xl head ">Top Rated</h1>

      <div className=" p-10 pt-0">
        <Slider {...settings}>
          {Rated.map((movie) => (
            <Link to={`/movie/${movie.id}`}>
              <img
                className=" rounded-xl popimage"
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              />
            </Link>
          ))}
        </Slider>
      </div>

      {/* POpular carousel */}

      <h1 className=" p-10 pl-12 pb-4 text-3xl head ">Popular Movies</h1>

      <div className=" p-10 pt-0">
        <Slider {...settings}>
          {popular.map((movie) => (
            <Link to={`/movie/${movie.id}`}>
              <img
                className=" rounded-xl popimage"
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              />
            </Link>
          ))}
        </Slider>
      </div>

      {/* Upcoming  */}

      <h1 className=" p-10 pl-12 pb-4 text-3xl head ">Upcoming</h1>

      <div className=" p-10 pt-0">
        <Slider {...settings}>
          {upcoming.map((movie) => (
            <Link to={`/movie/${movie.id}`}>
              <img
                className=" rounded-xl popimage"
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              />
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
