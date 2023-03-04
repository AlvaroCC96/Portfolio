import React from "react";
import Section from "./common/Section";
import css from "../assets/logos/css3.svg";
import django from "../assets/logos/django.svg";
import git from "../assets/logos/git.svg";
import github from "../assets/logos/github.svg";
import html from "../assets/logos/html5.svg";
import javascript from "../assets/logos/javascript.svg";
import jira from "../assets/logos/jira.svg";
import laravel from "../assets/logos/laravel.svg";
import MySQL from "../assets/logos/mysql.svg";
import php from "../assets/logos/php.svg";
import postgresql from "../assets/logos/postgresql.svg";
import python from "../assets/logos/python.svg";
import react from "../assets/logos/react.svg";
import vscode from "../assets/logos/visualstudio.svg";
import node from "../assets/logos/nodejs_small.svg";

const Tools = () => {
  const TOOLS = [
    {
      id: 1,
      image: html,
      title: "HTML",
    },
    {
      id: 2,
      image: css,
      title: "CSS",
    },
    {
      id: 3,
      image: javascript,
      title: "Javascript",
    },
    {
      id: 4,
      image: react,
      title: "React.js",
    },
    {
      id: 5,
      image: node,
      title: "Node.js",
    },
    {
      id: 6,
      image: php,
      title: "Php",
    },
    {
      id: 7,
      image: laravel,
      title: "Laravel",
    },
    {
      id: 8,
      image: python,
      title: "Python",
    },
    {
      id: 9,
      image: django,
      title: "Django",
    },
    {
      id: 10,
      image: MySQL,
      title: "MySQL",
    },
    {
      id: 11,
      image: postgresql,
      title: "PostgreSQL",
    },
    {
      id: 12,
      image: vscode,
      title: "Visual Studio Code",
    },
    {
      id: 13,
      image: git,
      title: "Git",
    },
    {
      id: 14,
      image: github,
      title: "GitHub",
    },
    {
      id: 15,
      image: jira,
      title: "Jira",
    },
  ];

  return (
    <Section title="Tools" subtitle="These are technologies I've worked with:">
      <div className="grid gap-10 grid-cols-3 md:grid-cols-3 lg:grid-cols-5 pt-5">
        {TOOLS.map(({ id, image, title }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center p-5 shadow-lg dark:bg-slate-400 dark:text-slate-800 dark:shadow-gray-100 rounded-xl duration-300 ease int-out hover:scale-110"
          >
            <img
              src={image}
              alt={title}
              className="w-36 h-36 md:w-20 md:h-20"
            />
            <h3 className="text-xs lg:text-xl">{title}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Tools;
