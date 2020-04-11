import * as React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { animated, useSpring } from "react-spring";
import * as ReactGA from "react-ga";

import "./../assets/scss/App.scss";

const Home = (): JSX.Element => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + location.search);
  }, []);

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const { x } = useSpring({ from: { x: 0 }, x: 1, config: { duration: 1000 } });

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
                <animated.h2
                  className="title has-text-centered section-title"
                  style={{
                    opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                    transform: x
                      .interpolate({
                        range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                        output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                      })
                      .interpolate((x) => `scale(${x})`)
                  }}
                >
                  Joe Kozak
                </animated.h2>
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
                    src="https://res.cloudinary.com/elliotjreed/image/upload/f_auto,q_auto/v1584905519/joekozak/black-and-white-joe.jpg"
                    alt="Photograph of Joe Kozak looking relatively dignified for once"
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
