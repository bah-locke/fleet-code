import React from "react";

const cardItemSize = {
  width: 315,
  height: 192
}

const Card = ({object, children}) => {

  return (
    <li className="relative" style={{ maxWidth: cardItemSize.width }}>
      <div
        style={cardItemSize}
        className="flex items-center focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 group rounded-lg overflow-hidden bg-transparent"
      >
        {object.image_url ? (
          <img
            src={object.image_url}
            alt={object.name}
            className="object-cover h-full w-full pointer-events-none"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full m-auto text-gray-300 bg-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
            />
          </svg>
        )}
      </div>
      {children}
    </li>
  );

};

export default Card;