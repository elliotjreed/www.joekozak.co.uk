import * as React from "react";
import { Helmet } from "react-helmet";
import { animated, useSpring } from "react-spring";

import "./../assets/scss/App.scss";

const About = (): JSX.Element => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <>
      <Helmet>
        <title>About | Joe Kozak</title>
        <meta name="description" content="All about me, Joe Kozak, and my beard." />
      </Helmet>

      <animated.main className="main-content" style={props}>
        <div className="section-dark resume">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-12 about-me">
                <h2 className="title has-text-centered section-title">What I will do for money...</h2>
              </div>
              <div className="column is-12">
                <p className="has-text-centered">Coming soon!</p>
              </div>
              <div className="column is-4 is-offset-4">
                <figure className="image">
                  <img
                    className="is-rounded"
                    src="https://res.cloudinary.com/elliotjreed/image/upload/v1584812681/joekozak/jazzy-joe.jpg"
                    alt="Photograph of Joe Kozak looking somewhat jazzy"
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

export default About;
