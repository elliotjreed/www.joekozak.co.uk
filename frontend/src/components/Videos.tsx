import * as React from "react";
import YouTube from "react-youtube";
import { Helmet } from "react-helmet";

import "./../assets/scss/App.scss";

const Videos = (): JSX.Element => {
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

      <main className="main-content">
        <div className="section-dark resume">
          <div className="container">
            <div className="columns is-multiline has-text-centered">
              <div className="column is-12 about-me">
                <h2 className="title section-title">Some light relief and a sock...</h2>
              </div>
              <div className="column is-10 is-offset-1">
                <YouTube videoId="ARVNCgiasb0" opts={options} />
              </div>
              <div className="column is-10 is-offset-1">
                <YouTube videoId="rjmK9HWp_lQ" opts={options} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Videos;
