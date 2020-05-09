import * as React from "react";
import { useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { Helmet } from "react-helmet";
import * as ReactGA from "react-ga";

import "./../assets/scss/App.scss";

const PageNotFound = (): JSX.Element => {
  useEffect((): void => {
    ReactGA.pageview(window.location.pathname + location.search);
  }, []);

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <>
      <Helmet>
        <title>Not Found | Joe Kozak</title>
        <meta name="description" content="The page you are looking for does not exist." />
      </Helmet>

      <animated.main className="main-content" style={props}>
        <div className="section-padded">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-12 about-me">
                <h2 className="title has-text-centered section-title">Page Not Found</h2>
              </div>
            </div>
          </div>
        </div>
      </animated.main>
    </>
  );
};

export default PageNotFound;
