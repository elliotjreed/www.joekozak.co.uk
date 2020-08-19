import * as React from "react";
import { useEffect } from "react";
import YouTube from "react-youtube";
import { animated, useSpring } from "react-spring";
import { Helmet } from "react-helmet";
import * as ReactGA from "react-ga";

import "./../assets/scss/App.scss";

const Lockdown = (): JSX.Element => {
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
        <title>Lockdown | Joe Kozak</title>
        <meta
          name="description"
          content="Get the lockdown look with Joe Kozak's unique and inspirational workout routines and dietary advice."
        />
      </Helmet>

      <animated.main className="main-content" style={props}>
        <div className="section-padded">
          <div className="container">
            <div className="columns is-multiline has-text-centered">
              <div className="column is-12 about-me">
                <h2 className="title section-title">Get the Lockdown Look</h2>
              </div>
              <div className="column is-12 content">
                <p className="has-text-centered">
                  Get the lockdown look with my inspirational workout routines and dietary advice.
                </p>
              </div>
              <div className="column is-8-desktop is-offset-2-desktop is-10 is-offset-1">
                <YouTube videoId="hGoz6fNWn1E" opts={options} />
              </div>
              <div className="column is-8-desktop is-offset-2-desktop is-10 is-offset-1">
                <YouTube videoId="fjyVThNzCj0" opts={options} />
              </div>
              <div className="column is-8-desktop is-offset-2-desktop is-10 is-offset-1">
                <YouTube videoId="b-9qOmTTeYk" opts={options} />
              </div>
              <div className="column is-8-desktop is-offset-2-desktop is-10 is-offset-1">
                <YouTube videoId="6cd2RoJVM0g" opts={options} />
              </div>
              <div className="column is-8-desktop is-offset-2-desktop is-10 is-offset-11">
                <YouTube videoId="aTDSmsIuaho" opts={options} />
              </div>
              <div className="column is-8-desktop is-offset-2-desktop is-10 is-offset-11">
                <YouTube videoId="ygtP0kQPYG4" opts={options} />
              </div>
            </div>
          </div>
        </div>
      </animated.main>
    </>
  );
};

export default Lockdown;
