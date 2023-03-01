import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ userId, name }) => {
  const navigate = useNavigate();

  const handleUserClick = (userId) => {
    navigate(`/posts?userId=${userId}`);
  };

  return (
    <button
      className="text-black hover:bg-gray-200 hover:text-white-100"
      key={userId}
      onClick={() => handleUserClick(userId)}
    >
      <div className="rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <h1 className="font-bold text-xl mb-2 text-center">
            USER ID: {userId}
          </h1>
          <p className="text-gray-700 text-base text-center">{name}</p>
        </div>
      </div>
    </button>
  );
};
export default Card;
