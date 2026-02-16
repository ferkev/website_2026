import React from "react";

export const Aside = () => {
  return (
    <div className="relative top-0 gap-10 flex flex-col">
      <aside className="card sticky h-full" style={{ padding: "18px" }}>
        <div className="stats mb-23">
          <div className="stat">
            <strong>Fast delivery</strong>
            <span>Clear scope</span>
          </div>
          <div className="stat">
            <strong>Quality</strong>
            <span>Clean UI & code</span>
          </div>
          <div className="stat">
            <strong>SEO ready</strong>
            <span>Best practices</span>
          </div>
          <div className="stat">
            <strong>Support</strong>
            <span>Maintenance</span>
          </div>
        </div>

        <div
          className="relative flex items-center justify-start"
          style={{ gap: "10px" }}
        >
          <a className="btn primary" href="#contact">
            Start a project
          </a>
          <a className="btn" href="#work">
            See work
          </a>
        </div>
      </aside>
    </div>
  );
};
