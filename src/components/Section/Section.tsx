import React from "react";
import { Card } from "../Card/Card";
import { projects } from "../../data/data";
export const Section = () => {
  return (
    <section className="card" id="work">
      <div className="sectionHead">
        <div>
          <h2>Selected work</h2>
          <p>Short descriptions. Clear tags. Easy scan.</p>
        </div>
      </div>
      <div className="projects">
        {projects.map((project, index) => (
          <Card
            key={index}
            id={project.id}
            theme={project.theme}
            title={project.title}
            description={project.description}
            tags={project.tags}
            links={project.links}
          />
        ))}
      </div>
    </section>
  );
};
