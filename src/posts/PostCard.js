import React from "react";
import { Link, useLocation } from "react-router-dom";

const Card = ({ id, header, text, userId }) => {
  // console.log(id, userId);

  const location = useLocation();

  // Get the userId URL parameter from the location search string
  const searchParams = new URLSearchParams(location.search);
  const postIdParam = searchParams.get("id");
  // console.log(userId);

  return (
    <Link to={`/EditPost?userId=${userId}&id=${id}`}>
      <div
        className="rounded overflow-hidden shadow-lg"
        onClick={()=>console.log(userId, id)}
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
