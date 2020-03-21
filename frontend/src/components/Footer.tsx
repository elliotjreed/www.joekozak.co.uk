import * as React from "react";

const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          &copy; {new Date().getFullYear()} <em>Joe Kozak</em>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
