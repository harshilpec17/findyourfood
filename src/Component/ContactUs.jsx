import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ContactUs = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  const [emailToggle, setEmailToggle] = useState(false);
  const [gitData, setGitData] = useState([]);

  const fetchGitData = async () => {
    const data = await fetch(`https://api.github.com/users/harshilpec17`);
    const json = await data.json();
    setGitData(json);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchGitData();
  }, []);

  return (
    <>
      <div className="w-full text-[#D1D7E0] pt-16 md:pt-24 pb-10  dark:bg-sky-950 ">
        <div className="container mx-auto py-8 bg-black rounded-lg">
          <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
            <div className="col-span-4 sm:col-span-3">
              <div className="bg-[#12100E] shadow rounded-lg p-6">
                <div className="flex flex-col items-center">
                  <img
                    src={gitData.avatar_url}
                    alt="profile"
                    className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                  ></img>
                  <h1 className="text-2xl font-bold">{gitData.name}</h1>
                  <p className="text-gray-400">Frontend Developer</p>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-center mt-3 -mb-2">
                    Find me on
                  </h3>
                  <div className="flex justify-center items-center gap-6 my-6">
                    <div
                      onClick={() =>
                        openInNewTab(
                          "https://www.linkedin.com/in/harshil-s-854570248/"
                        )
                      }
                    >
                      <img
                        src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-1024.png"
                        alt="Linkedin Logo"
                        className="md:w-12 w-8 bg-white cursor-pointer"
                      />
                    </div>
                    <div
                      onClick={() =>
                        openInNewTab("https://github.com/harshilpec17")
                      }
                    >
                      <img
                        src="https://cdn1.iconfinder.com/data/icons/picons-social/57/github_rounded-1024.png"
                        alt="GitHub Logo"
                        className="md:w-12 w-8 bg-white cursor-pointer"
                      />
                    </div>
                    <div onClick={() => setEmailToggle(!emailToggle)}>
                      <img
                        src="https://cdn.iconscout.com/icon/free/png-512/free-email-532-433830.png?f=webp&w=512"
                        alt="Email"
                        className="md:w-12 w-8 bg-white cursor-pointer"
                      ></img>
                    </div>
                  </div>
                  {emailToggle ? (
                    <h1 className="bg-orange-400 text-black font-bold p-1 text-center rounded-md">
                      harshilsuthar1995@gmail.com
                    </h1>
                  ) : null}

                  <div className="flex flex-col items-center justify-between">
                    <h2 className="text-xl font-bold mt-4  text-red-400">
                      Language and Library
                    </h2>
                    <div className=" flex flex-col gap-3 mt-4">
                      <img
                        alt="HTML"
                        src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
                      ></img>
                      <img
                        alt="CSS"
                        src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                      ></img>
                      <img
                        alt="Javascript"
                        src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                      ></img>

                      <img
                        alt="NodeJS"
                        src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                      ></img>

                      <img
                        alt="React"
                        src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                      ></img>
                      <img
                        alt="React Router"
                        src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"
                      ></img>
                      <img
                        alt="Redux"
                        src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"
                      ></img>
                      <img
                        alt="Tailwind CSS"
                        src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
                      ></img>
                      <img
                        alt="parcel"
                        src="https://img.shields.io/badge/Parcel-F9DC3e?style=for-the-badge&logo=parcel&logoColor=black"
                      ></img>
                      <img
                        alt="Vercel"
                        src="https://img.shields.io/badge/vercel-%23121011.svg?style=for-the-badge&logo=vercel&logoColor=white"
                      ></img>
                      <img
                        alt="ES Lint"
                        src="https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white"
                      ></img>
                      <img
                        alt="GitHub"
                        src="https://img.shields.io/badge/GitHub-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-9">
              <div className="bg-[#12100E] shadow rounded-lg p-6">
                <div className="my-2">
                  <h2 className="text-2xl font-bold mb-2 text-red-400">
                    Overview
                  </h2>

                  <span className="text-xl">
                    Food delivery web app is a dynamic and user-friendly
                    platform designed to connect users with local restaurants
                    for quick and convenient food ordering.
                  </span>
                </div>
                <div className="mt-4">
                  <h2 className="text-2xl font-bold text-red-400">
                    Key Features:
                  </h2>
                </div>
                <div className="my-2 text-xl">
                  <p className="py-1">
                    <span className="font-semibold text-yellow-200">
                      Lazy Loading:
                    </span>{" "}
                    Enhances performance by implementing lazy loading for
                    content-heavy pages like the Contact Us section, ensuring
                    fast loading times.
                  </p>
                  <p className="py-1">
                    <span className="font-semibold text-yellow-200">
                      Filters:
                    </span>{" "}
                    Users can sort restaurants and food items based on criteria
                    such as price, rating, delivery speed, and search keywords.
                  </p>
                  <p className="py-1">
                    <span className="font-semibold text-yellow-200">
                      Promoted Restaurants:
                    </span>{" "}
                    Utilizes Higher Order Components (HOC) to highlight promoted
                    restaurants, increasing visibility and engagement.
                  </p>{" "}
                  <p className="py-1">
                    <span className="font-semibold text-yellow-200">
                      Dark and Light Mode:
                    </span>{" "}
                    The app offers users the option to switch between dark and
                    light modes, enhancing accessibility and customization.
                  </p>{" "}
                  <p className="py-1">
                    <span className="font-semibold text-yellow-200">
                      Internet Connectivity Check:
                    </span>{" "}
                    Provides visual feedback to the user indicating whether they
                    are currently connected to the internet or not.
                  </p>{" "}
                  <p className="py-1">
                    <span className="font-semibold text-yellow-200">
                      Menu Items:
                    </span>{" "}
                    Displays menu items specific to each restaurant, providing a
                    tailored browsing experience for users.
                  </p>{" "}
                  <p className="py-1">
                    <span className="font-semibold text-yellow-200">
                      Cart Management:
                    </span>{" "}
                    Users can easily manage their orders with features like
                    adding, removing, and adjusting item quantities, as well as
                    calculating the subtotal.
                  </p>
                  <p className="py-1">
                    <span className="font-semibold text-yellow-200">
                      Check JSON Function:
                    </span>{" "}
                    Includes a feature to verify and parse JSON data, minimizing
                    errors and ensuring accurate information display.
                  </p>
                  <p className="py-1">
                    <span className="font-semibold text-yellow-200">
                      Error Handling:
                    </span>{" "}
                    Robust error handling mechanisms are implemented to
                    gracefully manage and display errors, providing users with
                    informative feedback and maintaining a smooth user
                    experience.
                  </p>
                  <p>
                    <span className="font-semibold text-yellow-200">
                      Shimmer UI:
                    </span>{" "}
                    Shimmer UI effects are integrated to enhance the loading
                    experience, providing users with visual feedback while
                    content is being fetched or processed.
                  </p>
                </div>

                <div className="mt-4">
                  <h2 className="text-2xl font-bold text-red-400">
                    Technology
                  </h2>
                </div>
                <div className="my-2 text-xl">
                  <ul className="text-gray-100">
                    <li className="py-1">
                      <span className="font-bold py-1 text-blue-300">
                        React:{" "}
                      </span>{" "}
                      The app's front end is developed using React, a popular
                      JavaScript library for building user interfaces, enabling
                      fast and interactive components.
                    </li>
                    <li className="py-1">
                      <span className="font-bold text-blue-300">
                        HTML & CSS:
                      </span>{" "}
                      The app's structure and styling are created using HTML and
                      CSS, ensuring a clean and visually appealing layout.
                    </li>
                    <li className="py-1">
                      <span className="font-bold text-blue-300">
                        Tailwind CSS:
                      </span>{" "}
                      Tailwind CSS is used for rapid UI development, providing
                      utility classes to style elements and components
                      efficiently.
                    </li>
                    <li className="py-1">
                      <span className="font-bold text-blue-300">
                        React Router:
                      </span>{" "}
                      React Router is utilized for navigation, enabling dynamic
                      routing and rendering of different components based on the
                      URL.
                    </li>

                    <li className="py-1">
                      <span className="font-bold text-blue-300">
                        Redux Toolkit:
                      </span>{" "}
                      Redux Toolkit is employed for state management, allowing
                      the app to manage complex state logic and data flow
                      efficiently.
                    </li>
                    <li className="py-1">
                      <span className="font-bold text-blue-300">Vercel:</span>{" "}
                      Vercel is used for deployment, providing a seamless and
                      efficient platform for hosting the app and managing its
                      deployment lifecycle.
                    </li>
                    <li className="py-1">
                      <span className="font-bold text-blue-300">
                        Live Food API:
                      </span>{" "}
                      Integrates with a live food API to fetch real-time
                      restaurant and menu data
                    </li>

                    <li className="py-1">
                      <span className="font-bold text-blue-300">Parcel:</span>{" "}
                      Used as a web application bundler for optimized asset
                      management and faster loading times.
                    </li>
                  </ul>
                </div>

                <h2 className="text-2xl text-green-500 bg-white px-2 py-1 font-bold mt-6 mb-4">
                  Experience
                </h2>
                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-purple-500 font-semibold text-2xl">
                      Find Your Movie
                    </span>
                    <p>
                      <span
                        onClick={() =>
                          openInNewTab("https://findyourmovie.vercel.app/")
                        }
                        className="text-blue-400 text-lg underline cursor-pointer mr-2"
                      >
                        findyourfood.vercel.app
                      </span>
                    </p>
                  </div>
                  <p className="pt-2">
                    <span className="text-gray-100 text-xl ">
                      The Movie Recommendation Web App is an innovative platform
                      designed to provide personalized movie recommendations
                      based on the user's mood. Powered by the{" "}
                      <span className="text-orange-400 font-bold">
                        GPT-3.5 Turbo{" "}
                      </span>
                      model, the app leverages advanced natural language
                      processing to understand user inputs and generate relevant
                      movie suggestions.
                    </span>
                  </p>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-purple-500 font-semibold text-2xl">
                      Find Your Video
                    </span>
                    <p>
                      <span
                        onClick={() =>
                          openInNewTab("https://findyourvideo.vercel.app/")
                        }
                        className="text-blue-400 text-lg underline cursor-pointer mr-2"
                      >
                        findyourvideo.vercel.app
                      </span>
                    </p>
                  </div>
                  <p className="text-gray-100 text-xl pt-2">
                    Application providing core functionalities to users with a
                    familiar interface for browsing, recommendation, watching,
                    and interacting with videos. Leveraging Youtube API such as{" "}
                    <span className="font-semibold text-pink-400">
                      Search recommendation, Most popular video API, Random user
                      API, Comment API.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
