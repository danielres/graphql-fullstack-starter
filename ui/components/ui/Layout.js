import React from "react";
import classnames from "classnames";

export default ({ children }) => {
  return (
    <div className="flex flex-col h-screen bg-gray-200">
      <nav className="bg-black text-white mb-8">
        <div className="container px-4 py-4 mx-auto">Nav</div>
      </nav>
      <div className="container mx-auto flex-grow flex flex-col">
        <main className="px-4 py-4 flex-grow bg-white shadow-lg rounded">
          {children}
        </main>
        <footer className="px-4 py-4 text-gray-600">Footer</footer>
      </div>
    </div>
  );
};
