import * as React from "react";
import { Helmet } from "react-helmet";

import "./../assets/scss/App.scss";

const Home = (): JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Joe Kozak</title>
        <meta
          name="description"
          content="All-round entertainer. Bearded."
        />
      </Helmet>

      <main className="main-content">
        <div className="section-dark resume">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-12 about-me">
                <h2 className="title has-text-centered section-title">Joe Kozak</h2>
                <h3 className="subtitle has-text-centered">All-round entertainer and beard-owner.</h3>
              </div>
            </div>
            <div className="columns">
              <div className="column is-4 is-offset-4">
                <figure className="image">
                  <img
                    className="is-rounded"
                    src="https://res.cloudinary.com/elliotjreed/image/upload/v1584810822/joekozak/scottish-joe.jpg"
                    alt="Photograph of Joe Kozak looking suitably Scottish"
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

export default Home;
