import React from "react";
import UserCard from "./UserCard";
import { useSelector } from "react-redux";

const Users = () => {
  const users = useSelector((state) => state.users.users);

  return (
    <>
      <h1 className="text-center text-5xl m-5">Choose User Name:</h1>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {users.map((user) => {
          return <UserCard key={user.id} userId={user.id} name={user.name} />;
        })}
      </div>
    </>
  );
};

export default Users;
