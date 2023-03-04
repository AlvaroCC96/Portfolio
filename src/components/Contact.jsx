import React from "react";
import Section from "./common/Section";

const Contact = () => {
  return (
    <Section title="Contact 📞">
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <div>
          <p className="max-w-s md:max-w-lg font-extralight">
            I would love to connect with you over a cup of coffee and have a
            conversation. Let's set up a time to meet and talk ☕
          </p>
        </div>
        <div className=" text-left w-full">
          <form
            action="https://getform.io/f/ad6c18d5-4c4f-4068-9156-d60d6db5cc4e"
            method="POST"
          >
            <div className="gap-4 w-full">
              <div className="flex flex-col my-2">
                <label className="capitalize text-sm py-2 font-extralight">
                  Name:
                </label>
                <input
                  required={true}
                  type="text"
                  name="name"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-600 dark:bg-gray-900 dark:text-white"
                />
              </div>

              <div className="flex flex-col my-2">
                <label className="capitalize text-sm py-2 font-extralight">
                  phone:
                </label>
                <input
                required={true}
                  type="text"
                  name="phone"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-600 dark:bg-gray-900 dark:text-white"
                />
              </div>

              <div className="flex flex-col my-2">
                <label className="capitalize text-sm py-2 font-extralight">
                  email:
                </label>
                <input
                required={true}
                  type="email"
                  name="email"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-600 dark:bg-gray-900 dark:text-white"
                />
              </div>

              <div className="flex flex-col my-2">
                <label className="capitalize text-sm py-2 font-extralight">
                  message:
                </label>
                <textarea
                required={true}
                  name="message"
                  rows="10"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-600 dark:bg-gray-900 dark:text-white resize-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-center">
                <button className="my-8 bg-gradient-to-r from-rose-600 to-violet-500 text-white px-6 py-3 uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                  Send message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
