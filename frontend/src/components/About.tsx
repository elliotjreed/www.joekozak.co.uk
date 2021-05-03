import * as React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import * as ReactGA from "react-ga";

const About = (): JSX.Element => {
  useEffect((): void => {
    ReactGA.pageview(window.location.pathname + location.search);
  }, []);

  return (
    <>
      <Helmet>
        <title>About | Joe Kozak</title>
        <meta
          name="description"
          content="Learn a little about me, Joe Kozak, and my story so far as a comedian and vocalist in the entertainment industry."
        />
      </Helmet>

      <main className="main-content">
        <div className="section-padded">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-12 about-me">
                <h2 className="title has-text-centered section-title">Welcome to my silly little world!</h2>
              </div>
              <div className="column is-12 content">
                <p className="has-text-centered">
                  I am an 11 year veteran in the entertainment industry specialising as a comedian and vocalist.
                </p>
                <p className="has-text-centered">
                  Having worked for all of the major British holiday resorts I moved to London where I appeared in
                  &lsquo;Made in Chelsea&rsquo; and &lsquo;Duck quacks don&apos;t echo&rsquo; as well as many of
                  London&apos;s biggest and best comedy clubs. It was here I became a voice of student radio show;
                  &lsquo;Monday morning glory&rsquo; and worked alongside some of the best in the UK&apos;s music and
                  arts industry.
                </p>
                <p className="has-text-centered">
                  After 5 months working as the lead presenter for Holiday Village in the Balearic Islands I returned to
                  the UK to join the team on board a cruise liner and then opted for dry land where I have been working
                  as an adult entertainer hosting &lsquo;Bonkers Bingo&rsquo; and adult only comedy nights as well as
                  developing a vocal set and some online content.
                </p>
                <p className="has-text-centered">
                  Take a look, have some fun and if you think I am what your night needs,{" "}
                  <Link to="/contact">give me a message!</Link>
                </p>
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
      </main>
    </>
  );
};

export default About;
