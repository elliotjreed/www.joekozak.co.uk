import * as React from "react";
import { Helmet } from "react-helmet";
import { animated, useSpring } from "react-spring";

import "./../assets/scss/App.scss";

const Home = (): JSX.Element => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <>
      <Helmet>
        <title>Joe Kozak</title>
        <meta name="description" content="All-round entertainer. Bearded." />
      </Helmet>

      <animated.main className="main-content" style={props}>
        <div className="section-dark resume">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-12 about-me">
                <h2 className="title has-text-centered section-title">Joe Kozak</h2>
                <h3 className="subtitle has-text-centered">
                  Welcome to my bonkers and barmy bunker where you can escape reality for a while.
                </h3>
                <a
                  href="https://www.youtube.com/channel/UCzdMkqMchEvxF4ydusuPV2w"
                  rel="noreferrer noopener"
                  title="Find me on Youtube!"
                >
                  <div className="youtube-button" />
                </a>
              </div>
            </div>
            <div className="columns">
              <div className="column is-4 is-offset-4">
                <figure className="image">
                  <img
                    className="is-rounded"
                    src="https://res.cloudinary.com/elliotjreed/image/upload/v1584810822/joekozak/scottish-joe.jpg"
                    alt="Photograph of Joe Kozak looking suitably Scottish"
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

export default Home;
