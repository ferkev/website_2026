import React from "react";

export const Hero = () => {
  return (
    <div className="card hero">
      <div className="pill">
        <span className="dot"></span> Available for new projects
      </div>
      <h1>
        Clean, modern websites with a smooth color feel — made to be scanned
        fast.
      </h1>
      <p className="sub">
        I build landing pages, business websites and portfolios that load
        quickly, look premium, and guide users to action.
      </p>

      <div className="heroActions">
        <a className="btn primary" href="#work">
          View projects
        </a>
        <button className="btn" id="copyEmailBtn" type="button">
          Copy email
        </button>
        <a className="btn" href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
};
