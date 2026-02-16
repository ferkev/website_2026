import React from "react";

export const Contact = () => {
  function toast(arg0: string) {
    throw new Error("Function not implemented.");
  }

  return (
    <section className="card" id="contact">
      <div className="sectionHead">
        <div>
          <h2>Contact</h2>
          <p>Quick message = quick reply.</p>
        </div>
      </div>

      <div className="contactGrid">
        <div className="panel">
          <p style={{ margin: "0", color: "var(--muted)" }}>
            <strong style={{ color: "var(--text)" }}>Best for:</strong>
            <br />
            Landing pages · Business websites · Portfolios · Redesigns · Speed
            improvements
          </p>
          <div
            style={{
              marginTop: "12px",
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <a className="btn primary" href="mailto:ferkev@live.fr">
              Email me
            </a>
            <a className="btn" href="#work">
              See work
            </a>
          </div>
        </div>

        <div className="panel">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast("Mockup form — connect later 🙂");
            }}
          >
            <label>
              Name
              <input required placeholder="Your name" />
            </label>
            <label>
              Email
              <input required type="email" placeholder="you@example.com" />
            </label>
            <label>
              Message
              <textarea
                required
                rows={4}
                placeholder="Tell me what you need (type of site + deadline + budget)."
              ></textarea>
            </label>
            <div
              style={{
                marginTop: "12px",
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <button className="btn primary" type="submit">
                Send
              </button>
              <button className="btn" type="button" id="prefillBtn">
                Prefill
              </button>
            </div>
            <p
              style={{
                margin: "12px 0 0",
                color: "var(--muted)",
                fontSize: "13px",
              }}
            >
              (This is a mockup — connect to Formspree/Netlify later.)
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
