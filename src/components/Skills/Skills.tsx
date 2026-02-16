import React from "react";

export const Skills = () => {
  return (
    <section className="card" id="skills">
      <div className="sectionHead">
        <div>
          <h2>Skills</h2>
          <p>Simple. Honest. Easy to read.</p>
        </div>
      </div>

      <div className="skills">
        <span className="pillTag">HTML</span>
        <span className="pillTag">CSS</span>
        <span className="pillTag">JavaScript</span>
        <span className="pillTag">Astro</span>
        <span className="pillTag">React</span>
        <span className="pillTag">UI/UX</span>
        <span className="pillTag">Figma</span>
        <span className="pillTag">SEO basics</span>
        <span className="pillTag">Accessibility</span>
        <span className="pillTag">Performance</span>
      </div>
    </section>
  );
};
