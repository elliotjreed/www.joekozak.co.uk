import * as React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import * as ReactGA from "react-ga";

const Sitemap = (): JSX.Element => {
  useEffect((): void => {
    ReactGA.pageview(window.location.pathname + location.search);
  }, []);

  return (
    <>
      <Helmet>
        <title>Sitemap | Joe Kozak</title>
        <meta name="description" content="Sitemap for JoeKozak.co.uk." />
      </Helmet>

      <main className="main-content">
        <div className="section-padded">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-12">
                <h2 className="title has-text-centered section-title">Sitemap</h2>
              </div>
              <div className="column is-12">
                <p className="has-text-centered content">
                  If the website menu wasn&apos;t enough for you, here&apos;s a sitemap:
                </p>
                <ul className="has-text-centered">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/videos">Videos</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/bookings">Bookings</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/lockdown">Lockdown</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Sitemap;
