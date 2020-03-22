import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";

import "./../assets/scss/App.scss";

const Bookings = (): JSX.Element => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const { x } = useSpring({ from: { x: 0 }, x: 1, config: { duration: 1000 } });

  return (
    <>
      <Helmet>
        <title>Bookings | Joe Kozak</title>
        <meta
          name="description"
          content="Services I provide, make a booking today and you shall likely not be too disappointed!"
        />
      </Helmet>

      <animated.main className="main-content" style={props}>
        <div className="section-dark resume">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-12 about-me">
                <animated.h2
                  className="title has-text-centered section-title"
                  style={{
                    opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                    transform: x
                      .interpolate({
                        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                      })
                      .interpolate(x => `scale(${x})`)
                  }}
                >
                  Bookings
                </animated.h2>
              </div>
              <div className="column is-12">
                <p className="has-text-centered content">I am available for a number of roles and shows, including:</p>
                <ul className="has-text-centered">
                  <li>Adult comedy show</li>
                  <li>Family comedy show</li>
                  <li>Hosting events</li>
                  <li>TV extras work</li>
                  <li>Radio</li>
                  <li>Solo vocalist set</li>
                </ul>
                <hr />
                <p className="has-text-centered content">
                  <Link to="/contact">Get in touch for availability and to discuss any requirements.</Link>
                </p>
              </div>
              <div className="column is-4 is-offset-4">
                <figure className="image">
                  <img
                    className="is-rounded"
                    src="https://res.cloudinary.com/elliotjreed/image/upload/v1584905518/joekozak/i-did-a-poo.jpg"
                    alt="Photograph of Joe Kozak on a stage"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </animated.main>
    </>
  );
};

export default Bookings;
