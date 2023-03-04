import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaArrowDown,
} from "react-icons/fa";
import avatar from "../assets/profile_img.svg";
import {Animated} from "react-animated-css";

const Hero = () => {
  const SOCIAL = [
    {
      id: 1,
      link: "https://www.instagram.com/_alvarohh_/",
      icon: <FaInstagram />,
    },
    {
      id: 2,
      link: "https://www.facebook.com/cabrosolitario/",
      icon: <FaFacebook />,
    },
    {
      id: 3,
      link: "https://www.linkedin.com/in/alvarocc96/",
      icon: <FaLinkedin />,
    },
  ];

  window.addEventListener("scroll", function () {
    const downArrow = document.querySelector(".down-arrow");
    if (this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
  });

  return (
    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
      <h2 className="text-5xl text-rose-600 uppercase font-bold">
        Álvaro Lucas Castillo Calabacero
      </h2>
      <h3 className="py-3 text-2xl">FullStack Developer</h3>

      {/* avatar and resumen */}
      <div>
        <img src={avatar} alt="avatar" className="w-60 h-60 md:w-72 md:h-72 " />
      </div>
      <p className="max-w-xl font-light text-gray-500">
        Hello <span className="animate-pulse text-4xl">😄</span>, I'm a Software
        Engineer. My objective is to be a contribution to the team, delivering
        my knowledge and strengths, as well as growing personally and
        professionally.
      </p>
      <div>
        <a
          className="flex items-center justify-center mt-10 px-2 bg-gradient-to-r from-rose-600 to-violet-500 text-white py-2 rounded-lg"
          href="/Cv_AlvaroCastillo_Dev.pdf"
          download={true}
        >
          Download CV<span className="animate-pulse text-4xl">💻</span>
        </a>
      </div>

      {/* social icons */}
      <div className="flex justify-evenly pt-8 lg:py-16 text-3xl w-full md:w-1/3">
        {SOCIAL.map(({ id, link, icon }) => (
          <a
            href={link}
            key={id}
            target="_blank"
            rel="noopener noreferrer"
            className=" cursor-pointer duration 300 hover:text-rose-600"
          >
            {icon}
          </a>
        ))}
      </div>
      
      {/* arrow down animation */}
      <div className="mt-3 down-arrow">
        <FaArrowDown className="text-gray-400 text-2xl animate-bounce" />
      </div>
    </section>
    </Animated>
  );
};

export default Hero;
