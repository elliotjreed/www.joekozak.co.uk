import * as React from "react";
import YouTube from "react-youtube";
import { animated, useSpring } from "react-spring";
import { Helmet } from "react-helmet";

import "./../assets/scss/App.scss";

const Videos = (): JSX.Element => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const { x } = useSpring({ from: { x: 0 }, x: 1, config: { duration: 1000 } });

  const options = {
    height: "390",
    width: "100%"
  };

  return (
    <>
      <Helmet>
        <title>Videos | Joe Kozak</title>
        <meta
          name="description"
          content="Immerse yourself into a world of polite and intellectual discussion on the nature of the universe and other dairy products."
        />
      </Helmet>

      <animated.main className="main-content" style={props}>
        <div className="section-dark resume">
          <div className="container">
            <div className="columns is-multiline has-text-centered">
              <div className="column is-12 about-me">
                <animated.h2
                  className="title section-title"
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
                  Some light relief and a sock...
                </animated.h2>
              </div>
              <div className="column is-8-desktop is-offset-2-desktop is-10 is-offset-1">
                <YouTube videoId="R99LaZC1sNM" opts={options} />
              </div>
              <div className="column is-8-desktop is-offset-2-desktop is-10 is-offset-1">
                <YouTube videoId="na2lF6Y0AbM" opts={options} />
              </div>
              <div className="column is-8-desktop is-offset-2-desktop is-10 is-offset-1">
                <YouTube videoId="ARVNCgiasb0" opts={options} />
              </div>
              <div className="column is-8-desktop is-offset-2-desktop is-10 is-offset-11">
                <YouTube videoId="rjmK9HWp_lQ" opts={options} />
              </div>
            </div>
          </div>
        </div>
      </animated.main>
    </>
  );
};

export default Videos;
