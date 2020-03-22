import * as React from "react";
import { Helmet } from "react-helmet";
import { animated, useSpring } from "react-spring";

import "./../assets/scss/App.scss";

const About = (): JSX.Element => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const { x } = useSpring({ from: { x: 0 }, x: 1, config: { duration: 1000 } });

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
                  What I will do for money...
                </animated.h2>
              </div>
              <div className="column is-12">
                <p className="has-text-centered">Coming soon!</p>
              </div>
              <div className="column is-4 is-offset-4">
                <figure className="image">
                  <img
                    className="is-rounded"
                    src="https://res.cloudinary.com/elliotjreed/image/upload/f_auto,q_auto/v1584905518/joekozak/my-mic-lives-in-my-beard.jpg"
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

export default About;
