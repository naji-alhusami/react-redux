import React from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { createPost } from "../features/postsSlice";
function NewPostForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const postData = {
      title: formData.get("title"),
      body: formData.get("body"),
    };
    dispatch(createPost(postData));
    navigate(-2);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" required />
      <label htmlFor="body">Body</label>
      <textarea id="body" name="body" required />

      <button type="submit">Create Post</button>
    </form>
  );
}
export default NewPostForm;
