import * as React from "react";
import { Helmet } from "react-helmet";
import { animated, useSpring } from "react-spring";
import Swiper from "react-id-swiper";

import "./../assets/scss/App.scss";

const Gallery = (): JSX.Element => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const params = {
    lazy: true,
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };
  return (
    <>
      <Helmet>
        <title>Gallery | Joe Kozak</title>
        <meta name="description" content="Photos of me, Joe Kozak, looking sensible." />
      </Helmet>

      <animated.main className="main-content" style={props}>
        <div className="section-dark resume">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-12 about-me">
                <h2 className="title has-text-centered section-title">A selection of photographic articles...</h2>
              </div>
              <div className="column is-4 is-offset-4">
                <Swiper {...params}>
                  <figure className="image">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      alt="A photograph of Joe at a quiz, wearing a particularly hideous jacket"
                      data-src="https://res.cloudinary.com/elliotjreed/image/upload/v1584895940/joekozak/quiz-joe.jpg"
                      className="swiper-lazy"
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                  </figure>
                  <figure className="image">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      alt="A photograph of Joe at Christmas, for some unknown reason wearing shorts"
                      data-src="https://res.cloudinary.com/elliotjreed/image/upload/v1584895940/joekozak/christmas-joe.jpg"
                      className="swiper-lazy"
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                  </figure>
                  <figure className="image">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      alt="A photograph of Joe wearing an especially shiny jacket"
                      data-src="https://res.cloudinary.com/elliotjreed/image/upload/v1584812681/joekozak/jazzy-joe.jpg"
                      className="swiper-lazy"
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                  </figure>
                  <figure className="image">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      alt="A photograph of Joe wearing culturally sensitive Scottish attire"
                      data-src="https://res.cloudinary.com/elliotjreed/image/upload/v1584810822/joekozak/scottish-joe.jpg"
                      className="swiper-lazy"
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                  </figure>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </animated.main>
    </>
  );
};

export default Gallery;
