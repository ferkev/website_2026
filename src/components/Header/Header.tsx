import React from "react";

interface HeaderProps {
  avatar: string;
  name: string;
  jobTitle: string;
  skills: string[];
  contact: {
    email: string;
    phone: string;
    location: string;
  };
}

export const Header: React.FC<HeaderProps> = ({
  avatar,
  name,
  jobTitle,
  skills,
  contact,
}) => {
  return (
    <header className="w-[75%] card header">
      <div className="brand">
        <div className="mark" aria-hidden="true"></div>
        <div>
          <strong>Kevin LE FRANC</strong>
          <span>Freelance · Web Design & Dev</span>
        </div>
      </div>

      <nav aria-label="Primary">
        <a href="#work">Work</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <div className="cta">
          <a className="btn primary w-full" href="#contact">
            Get a quote
          </a>
        </div>
      </nav>
    </header>
  );
};
