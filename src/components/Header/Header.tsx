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

/**
 * 
 * @param param0 position: sticky;
        top: 14px;
        z-index: 20;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 12px 14px;
        border-radius: 999px;
 * @returns 
 */

export const Header: React.FC<HeaderProps> = ({
  avatar,
  name,
  jobTitle,
  skills,
  contact,
}) => {
  return (
    <header className="m-auto sticky top-4 z-20 flex items-center justify-between bg-white gap-3 py-3 px-3 w-1/2 rounded-2xl">
      <div className="flex items-center">
        <img src={avatar} alt={name} className="rounded-full" />
        
        <div className="flex flex-col">
          <p className="">Your name</p>
          <p className="">Freelance - Dev</p>
        </div>
      </div>

      <div className="flex items-center">
        <nav className="flex gap-2">
          <p>Skills</p>
          <p>Works</p>
          <p>Contact</p>
        </nav>
      </div>
    </header>
  );
};
