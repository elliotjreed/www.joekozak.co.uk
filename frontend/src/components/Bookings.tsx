import * as React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import * as ReactGA from "react-ga";

import "./../assets/scss/App.scss";

const Bookings = (): JSX.Element => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + location.search);
  }, []);

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <>
      <Helmet>
        <title>Bookings | Joe Kozak</title>
        <meta
          name="description"
          content="Joe Kozak is available for a number of roles and shows including adult and family comedy shows, event hosting, TV extra work, radio, and solo vocalist sets."
        />
      </Helmet>

      <animated.main className="main-content" style={props}>
        <div className="section-dark resume">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-12">
                <h2 className="title has-text-centered section-title">Bookings</h2>
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
