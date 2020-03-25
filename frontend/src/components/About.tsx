import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
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
                      .interpolate((x) => `scale(${x})`)
                  }}
                >
                  Welcome to my silly little world!
                </animated.h2>
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
      </animated.main>
    </>
  );
};

export default About;
