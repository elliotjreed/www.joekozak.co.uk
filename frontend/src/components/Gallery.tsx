import * as React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Swiper from "react-id-swiper";
import * as ReactGA from "react-ga";

const Gallery = (): JSX.Element => {
  useEffect((): void => {
    ReactGA.pageview(window.location.pathname + location.search);
  }, []);

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
        <meta
          name="description"
          content="Photos of Joe Kozak at various shows and performances, in a variety of interesting choices of attire."
        />
      </Helmet>

      <main className="main-content">
        <div className="section-padded">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-12 about-me">
                <h2 className="title has-text-centered section-title">Past shows and performances</h2>
              </div>
              <div className="column is-6 is-offset-3">
                <Swiper {...params}>
                  <figure className="image">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      alt="A photograph of Joe wearing a particularly Scottish-looking jacket"
                      data-src="https://res.cloudinary.com/elliotjreed/image/upload/f_auto,q_auto/v1584905518/joekozak/i-did-a-poo.jpg"
                      className="swiper-lazy"
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                  </figure>
                  <figure className="image">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      alt="A photograph of Joe randomly pointing at something, possibly believing himself to be a high-ranking member of the DPRK ruling family..."
                      data-src="https://res.cloudinary.com/elliotjreed/image/upload/f_auto,q_auto/v1584905519/joekozak/i-like-to-point-at-things.jpg"
                      className="swiper-lazy"
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                  </figure>
                  <figure className="image">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      alt="A photograph of Joe on stage surrounded by smoke, likely due to eating a considerable quantity of baked beans the previous night"
                      data-src="https://res.cloudinary.com/elliotjreed/image/upload/f_auto,q_auto/v1584905518/joekozak/my-mic-lives-in-my-beard.jpg"
                      className="swiper-lazy"
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                  </figure>
                  <figure className="image">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      alt="A photograph of Joe putting on an even more unusual expression than his otherwise relaxed face would normally exude"
                      data-src="https://res.cloudinary.com/elliotjreed/image/upload/f_auto,q_auto/v1584905519/joekozak/this-is-my-normal-face.jpg"
                      className="swiper-lazy"
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                  </figure>
                  <figure className="image">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      alt="A photograph of Joe exhibiting a very odd posture on stage, presumably unaware Tena now make products for men"
                      data-src="https://res.cloudinary.com/elliotjreed/image/upload/f_auto,q_auto/v1584905518/joekozak/smoke-joe.jpg"
                      className="swiper-lazy"
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                  </figure>
                  <figure className="image">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      alt="A photograph of Joe looking a little feminine, or at the very least attempting to"
                      data-src="https://res.cloudinary.com/elliotjreed/image/upload/f_auto,q_auto/v1584905519/joekozak/i-smell-brooms-for-fun.jpg"
                      className="swiper-lazy"
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                  </figure>
                  <figure className="image">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      alt="A photograph of Joe on stage attempting to don the traditional Tory Power Pose, or something of that ilk"
                      data-src="https://res.cloudinary.com/elliotjreed/image/upload/f_auto,q_auto/v1584905519/joekozak/stage-joe.jpg"
                      className="swiper-lazy"
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                  </figure>
                  <figure className="image">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      alt="A photograph of Joe in attire which would not be worn in the presence of those suffering epilepsy"
                      data-src="https://res.cloudinary.com/elliotjreed/image/upload/f_auto,q_auto/v1584905519/joekozak/do-not-view-if-epilectic.jpg"
                      className="swiper-lazy"
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                  </figure>
                  <figure className="image">
                    <img
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      alt="A photograph of Joe in black and white, looking decisively less weird than normal"
                      data-src="https://res.cloudinary.com/elliotjreed/image/upload/f_auto,q_auto/v1584905519/joekozak/black-and-white-joe.jpg"
                      className="swiper-lazy"
                    />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
                  </figure>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Gallery;
