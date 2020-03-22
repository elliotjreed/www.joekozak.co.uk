import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";

import "./../assets/scss/App.scss";

const Sitemap = (): JSX.Element => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
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
                <h2 className="title has-text-centered section-title">Sitemap</h2>
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
