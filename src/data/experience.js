import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer, faLaptopCode, faVirusCovid, faBug, faDollarSign, faBook } from '@fortawesome/free-solid-svg-icons';

const experience = [
  {
    name: "FCAB - FERROCARRIL DE ANTOFAGASTA A BOLIVIA.",
    date: "January 2020 - March 2020",
    icon: <FontAwesomeIcon icon={faComputer} />,
    job: "Professional Practice",
    description:
      "Development and implementation of a module that allows the evaluation of railway operators through a existing system. The system was made with OctoberCMS, based on the PHP Laravel Framework, with a database MySQL.",
  },
  {
    name: "HOSPITAL REGIONAL DE ANTOFAGASTA.",
    date: "August 2020 - January 2021",
    icon: <FontAwesomeIcon icon={faLaptopCode} />,
    job: "Project title",
    description:
      "Development of a system for the administration and management of the list waiting for the cardiology area through a web page, made using the Asp.NET Core MVC framework and SQLServer/SQlite database.",
  },
  {
    name: "SEREMI DE SALUD ANTOFAGASTA.",
    date: "February 2021 - July 2021.",
    icon: <FontAwesomeIcon icon={faVirusCovid} />,
    job: "Computer Engineer",
    description:
      "Development of solutions that allow streamlining the TTA strategy (Testing, Traceability and Isolation) during the C-19 contingency, generating tools like Scrappers with Python and Selenium. As well as the analysis of information through Dataframes and Google Data Studio.",
  },
  {
    name: "REDCAPITAL.",
    date: "September 2021 - October 2022",
    icon: <FontAwesomeIcon icon={faDollarSign} />,
    job: "Backend Developer",
    description:
      "Design, develop and integrate modules in Laravel 6/7 to automate Factoring processes, Credits with and without guarantee, with the objective of improving the efficiency in the financial management of the company.",
  },
  {
    name: "TECH-K.",
    date: "November 2022 - December 2022.",
    icon: <FontAwesomeIcon icon={faBug} />,
    job: "Backend Developer",
    description:
      "Development of Scrapers through Django, Request and Beautiful Soup. Automating WebScraping processes in pharmacies and shops, consolidating the information on servers AWS S3 and PostgreSQL database",
  },
  {
    name: "UNIVERSIDAD CATÓLICA DEL NORTE.",
    date: "March 2021 - Currently.",
    icon: <FontAwesomeIcon icon={faBook} />,
    job: "University Teacher",
    description:
      "Teacher of Introduction to Programming courses for various engineering of the university.",
  },
];

export default experience;