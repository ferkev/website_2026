import React from "react";

export type CardProps = {
  theme: string;
  titleProjet: string;
  description: string;
  tags?: string[];
  links?: string[];
};

export const Card = ({
  theme = "Portfolio",
  titleProject = "Creative Portfolio — Editorial",
  description = "Story-driven portfolio with strong typography, accessibility, andsubtle motion.",
  tags = [""],
  links = [""],
}) => {
  return (
    <article className="proj">
      <div className="media">
        <span className="label">{theme}</span>
      </div>
      <div className="projBody">
        <h3>{titleProject}</h3>
        <p>{description}</p>
        <div className="meta">
          {tags?.map((tag: string) => {
            return <span key={tag}>{tag}</span>;
          })}
        </div>
      </div>
      <div className="projFoot">
        {links?.map((link) => {
          return (
            <a className="link" key={link} href="#">
              {link}
            </a>
          );
        })}
      </div>
    </article>
  );
};
