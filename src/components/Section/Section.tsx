import React from "react";
import { Card } from "../Card/Card";

export const Section = () => {
  const projects = [
    {
      theme: "Portfolio",
      titleProject: "Creative Portfolio — Editorial",
      description:
        "Story-driven portfolio with strong typography, accessibility, and subtle motion.",
      tags: ["Design system", "A11y", "Motion"],
      links: ["Preview", "Details"],
    },
    {
      theme: "E-commerce",
      titleProject: "Modern e-commerce — Fashion",
      description:
        "Fast and stylish e-commerce template with a focus on product imagery and smooth interactions.",
      tags: ["Performance", "UX", "Mobile-first"],
      links: ["Preview", "Details"],
    },
    {
      theme: "Landing Page",
      titleProject: "SaaS Landing — Tech Startup",
      description:
        "Clean and conversion-focused landing page designed for SaaS products, with clear CTAs and engaging visuals.",
      tags: ["Conversion", "UI/UX", "Responsive"],
      links: ["Preview", "Details"],
    },
  ];

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
            theme={project.theme}
            titleProject={project.titleProject}
            description={project.description}
            tags={project.tags}
            links={project.links}
          />
        ))}
      </div>
    </section>
  );
};
