import React, { type FC } from "react";

export type CardProps = {
  id: string;
  theme: string;
  title: string;
  description: string;
  tags?: string[];
  links?: string[];
};

export const Card: FC<CardProps> = ({
  id,
  theme = "Portfolio",
  title = "Creative Portfolio — Editorial",
  description = "Story-driven portfolio with strong typography, accessibility, andsubtle motion.",
  tags = [""],
  links = [""],
}) => {
  return (
    <article className="proj">
      <div
        className="media"
        style={{
          backgroundImage: `url(./img/${id.toLowerCase()}.png)`,
          backgroundSize: "cover",
        }}
      >
        <span className="label">{theme}</span>
      </div>
      <div className="projBody">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="meta">
          {tags?.map((tag: string) => {
            return (
              <span key={tag} className="tag">
                {tag}
              </span>
            );
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
