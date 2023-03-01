import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import AllPosts from "./posts/AllPosts";
import AllUsers from "./users/AllUsers";
import EditPost from "./EditPost/EditPost";
import { fetchUsers } from "./features/usersSlice";
import NewPostForm from "./EditPost/NewPostForm";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadUsers = async () => {
      await dispatch(fetchUsers());
    };
    loadUsers();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/EditPost/:postId" element={<EditPost />} />
        <Route path="/" element={<AllUsers />} />
        <Route exact path="posts" element={<AllPosts />} />
        <Route path="/NewPostForm" element={<NewPostForm />} />
      </Routes>
    </>
  );
}

export default App;
