import * as React from "react";
import { useSpring, animated } from "react-spring";

import "./../assets/scss/App.scss";

const PageNotFound = (): JSX.Element => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const { x } = useSpring({ from: { x: 0 }, x: 1, config: { duration: 1000 } });

  return (
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
                Page Not Found
              </animated.h2>
            </div>
          </div>
        </div>
      </div>
    </animated.main>
  );
};

export default PageNotFound;
