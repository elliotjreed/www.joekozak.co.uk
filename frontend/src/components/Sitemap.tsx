import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";

import "./../assets/scss/App.scss";

const Sitemap = (): JSX.Element => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const { x } = useSpring({ from: { x: 0 }, x: 1, config: { duration: 1000 } });

  return (
    <>
      <Helmet>
        <title>Sitemap | Joe Kozak</title>
        <meta name="description" content="Sitemap for JoeKozak.co.uk." />
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
                  Sitemap
                </animated.h2>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/videos">Videos</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </animated.main>
    </>
  );
};

export default Sitemap;
