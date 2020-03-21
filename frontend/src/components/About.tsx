import * as React from "react";
import { Helmet } from "react-helmet";

import "./../assets/scss/App.scss";

const About = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>About | Joe Kozak</title>
        <meta name="description" content="All about me, Joe Kozak, and my beard." />
      </Helmet>

      <main className="main-content">
        <div className="section-dark resume">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-12 about-me">
                <h2 className="title has-text-centered section-title">What I will do for money...</h2>
              </div>
              <div className="column is-12">
                <p className="has-text-centered">Coming soon!</p>
              </div>
              <div className="column is-4 is-offset-4">
                <figure className="image">
                  <img
                    className="is-rounded"
                    src="https://res.cloudinary.com/elliotjreed/image/upload/v1584812681/joekozak/jazzy-joe.jpg"
                    alt="Photograph of Joe Kozak looking somewhat jazzy"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
