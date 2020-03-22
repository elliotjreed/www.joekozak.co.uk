import * as React from "react";
import { useSpring, animated } from "react-spring";

import "./../assets/scss/App.scss";

const PageNotFound = (): JSX.Element => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.main className="main-content" style={props}>
      <div className="section-dark resume">
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-12 about-me">
              <h2 className="title has-text-centered section-title">Page Not Found</h2>
            </div>
          </div>
        </div>
      </div>
    </animated.main>
  );
};

export default PageNotFound;
