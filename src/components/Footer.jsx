import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-center">
      <footer className=" dark:bg-gray-500 fixed bottom-0">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            © 2023. All Rights Reserved, Design by René Torres.
          </span>
        </div>
      </footer>
    </div>
  );
}
