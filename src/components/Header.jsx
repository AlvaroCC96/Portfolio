import React from "react";
import { MdNightsStay, MdWbSunny, } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className=" bg-slate-300 dark:bg-gray-900 text-gray-900 dark:text-teal-300">
      <nav className="flex justify-between items-center p-5">
        <h1 className="text-lg"> <span> <FontAwesomeIcon icon={faCode} /> FullStack Developer </span> </h1>
        <div onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <MdWbSunny className="text-2xl cursor-pointer" />
          ) : (
            <MdNightsStay className="text-2xl cursor-pointer" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
