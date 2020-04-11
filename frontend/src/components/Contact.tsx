import * as React from "react";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button } from "./Button";
import { animated, useSpring } from "react-spring";
import * as ReactGA from "react-ga";

import "./../assets/scss/App.scss";

const renderSuccess: JSX.Element = (
  <div className="notification is-primary has-text-centered">
    Thank you for your enquiry. I&apos;ll get back to you shortly!
  </div>
);

const Contact = (): JSX.Element => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccessful] = useState(false);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + location.search);
  }, []);

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  const handleSubmit = (event): void => {
    event.preventDefault();
    setLoading(true);
    fetch("https://api.joekozak.co.uk", {
      body: new URLSearchParams(new FormData(event.target) as URLSearchParams),
      method: "POST"
    })
      .then((response: Response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response: Response) => response.json())
      .then((json: string | boolean) => {
        if (json === true) {
          setSuccessful(true);
        } else {
          setError(json as string);
        }
        setLoading(true);
      })
      .catch(() => setError("There was an error sending your email, please try again."));
  };

  const renderForm: JSX.Element = (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name" className="label">
          Name
        </label>
        <div className="control">
          <input id="name" className="input" type="text" placeholder="Name&hellip;" name="name" disabled={loading} />
        </div>
      </div>
      <div className="field">
        <label htmlFor="email" className="label">
          Email
        </label>
        <div className="control">
          <input
            id="email"
            className="input"
            type="email"
            placeholder="Email address&hellip;"
            name="email"
            disabled={loading}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="phone" className="label">
          Telephone
        </label>
        <div className="control">
          <input
            id="phone"
            className="input"
            type="tel"
            placeholder="Telephone number &hellip;"
            name="phone"
            disabled={loading}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="message" className="label">
          Message
        </label>
        <div className="control">
          <textarea id="message" className="textarea" placeholder="Enquiry&hellip;" name="message" readOnly={loading} />
        </div>
      </div>
      <p className="label">Preferred contact method</p>
      <div className="field">
        <div className="control">
          <label className="radio">
            <input type="radio" name="preferredMethod" value="email" disabled={loading} checked={true} /> Email
          </label>
          <label className="radio">
            <input type="radio" name="preferredMethod" value="phone" disabled={loading} /> Telephone
          </label>
        </div>
      </div>
      {error === "" ? null : <div className="notification is-danger">{error}</div>}
      <div className="field">
        <div className="control ">
          <Button text="SEND" disabled={loading} />
        </div>
      </div>
    </form>
  );

  return (
    <>
      <Helmet>
        <title>Contact | Joe Kozak</title>
        <meta name="description" content="Contact Joe Kozak for enquiries and bookings." />
      </Helmet>

      <animated.main className="main-content" style={props}>
        <div className="section-dark resume">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-12 has-text-centered">
                <h2 className="title section-title">Get in Touch</h2>
                <p>For enquiries, please use the form below or give me a call on (+44) 07570045985.</p>
              </div>
              <div className="column is-8 is-offset-2">{success ? renderSuccess : renderForm}</div>
            </div>
          </div>
        </div>
      </animated.main>
    </>
  );
};

export default Contact;
