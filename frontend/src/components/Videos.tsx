import * as React from "react";
import { useEffect } from "react";
import YouTube from "react-youtube";
import { animated, useSpring } from "react-spring";
import { Helmet } from "react-helmet";
import * as ReactGA from "react-ga";

import "./../assets/scss/App.scss";

const Videos = (): JSX.Element => {
  useEffect((): void => {
    ReactGA.pageview(window.location.pathname + location.search);
  }, []);

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

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
          content="Give your self some light relief and catch up on some of Joe Kozak's recent forays into the wonders of YouTube."
        />
      </Helmet>

      <animated.main className="main-content" style={props}>
        <div className="section-padded">
          <div className="container">
            <div className="columns is-multiline has-text-centered">
              <div className="column is-12 about-me">
                <h2 className="title section-title">Videos</h2>
              </div>
              <div className="column is-8-desktop is-offset-2-desktop is-10 is-offset-1">
                <YouTube videoId="b-9qOmTTeYk" opts={options} />
              </div>
              <div className="column is-8-desktop is-offset-2-desktop is-10 is-offset-1">
                <YouTube videoId="6cd2RoJVM0g" opts={options} />
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
