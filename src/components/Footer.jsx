import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-center">
      <footer className=" border-gray-400 w-full sticky bottom-0">
        
        <div className="w-full  bg-secondary-200 mx-auto max-w-screen-xl pt-2 md:flex md:items-center md:justify-center">
          <span className="text-sm text-white dark:text-gray-400">
            © 2023. All Rights Reserved, Design by René Torres.
          </span>
        </div>
      </footer>
    </div>
  );
}
