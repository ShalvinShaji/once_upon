import React from "react";

const Footer = () => {
  return (
    <footer className=" rounded-lg shadow ">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex  justify-center items-center">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 me-3">
          © 2024{" "}
          <a href="#" className="hover:underline">
            OnceUpon™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
