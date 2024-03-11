import React from "react";
import { useNavigate, useRouteError } from "react-router";

const Error = () => {
  const navigate = useNavigate();
  let error = useRouteError();
  console.error(error);

  return (
    <div className="bg-gradient-to-r from-purple-800 to-blue-400">
      <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
        <div className="bg-gray-950 shadow overflow-hidden sm:rounded-lg pb-8">
          <div className="text-center pt-8">
            <h1 className="text-7xl font-bold text-purple-400">
              {" "}
              {error.status && error.statusText
                ? error.status + error.statusText
                : "🤯"}
            </h1>
            <h1 className="text-5xl font-medium py-8 text-white">
              {error.data ? error.data : "Uh-oh! Something went wrong. 🛠️"}
            </h1>

            <p className="text-2xl pb-8 px-12 font-medium text-white">
              Our team has been notified, and we're working to fix it. Please
              try again later. If the issue persists, contact us. Thanks for
              your patience!
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6"
            >
              HOME
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-md"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
