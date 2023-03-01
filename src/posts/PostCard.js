import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, header, text }) => {


  return (
    <Link to={`/EditPost/${id}`}>
      <div
        className="rounded overflow-hidden shadow-lg"
      >
        <div className="px-6 py-4">
          <h1 className="font-bold text-xl mb-2">{header}</h1>
          <p className="text-gray-700 text-base">{text}</p>
        </div>
      </div>
    </Link>
  );
};
export default Card;
