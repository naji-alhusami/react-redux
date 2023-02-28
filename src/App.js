import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import AllPosts from "./posts/AllPosts";
import Navbar from "./navbar/Navbar";
import EditPost from "./EditPost/EditPost";
import { fetchPosts } from "./features/postsSlice";
import NewPostForm from "./EditPost/NewPostForm";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadPosts = async () => {
      await dispatch(fetchPosts());
    };
    loadPosts();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/EditPost" element={<EditPost />} />
        <Route path="?userId=:userId" element={<AllPosts />} />
        <Route path="/" element={<AllPosts />} />
        <Route path="/NewPostForm" element={<NewPostForm />} />
      </Routes>
    </>
  );
}

export default App;
