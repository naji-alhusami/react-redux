import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  useSearchParams,
  useNavigate,
  useHistory,
  Link,
} from "react-router-dom";

import { fetchComments } from "../features/commentsSlice";
import { fetchPosts, editPost, deletePost } from "../features/postsSlice";

const EditPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const history = useHistory();

  let [searchParams] = useSearchParams();
  const postId = parseInt(searchParams.get("id"));
  const posts = useSelector((state) => state.posts.posts);
  const post = posts.find((post) => post.id === postId);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  useEffect(() => {
    const loadComments = async () => {
      await dispatch(fetchComments(postId));
    };
    loadComments();
  }, [postId]);

  const comments = useSelector((state) => state.comments.comments);
  // console.log(comments);

  // console.log(post);

  const editPostHandler = (updatedPost) => {
    dispatch(editPost(updatedPost));
  };

  const deletePostHandler = (id, userId) => {
    dispatch(deletePost(id)).then(() => {
      dispatch(fetchPosts()).then(() => {
        // navigate(`?userId=${userId}`);
        console.log(post);
      });
    });
    console.log("done");

    // return navigate(`/`);
  };

  if (!post) {
    return "Loading";
  }
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between py-6">
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center">
          <svg className="fill-current w-4 h-4 mr-2" viewBox="0 0 20 20">
            <path d="M11 3.41L9.59 2 4 7.59l1.41 1.41L10 5.83l4.58 4.58L16 7.59z" />
          </svg>
          Back
        </button>
        <h1 className="text-3xl font-bold leading-tight">Posts</h1>
        <Link to="/NewPostForm">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            New Post
          </button>
        </Link>
      </div>
      <div className="flex flex-col mb-6">
        <p className="text-lg font-medium">Title</p>
        <textarea
          className="border border-gray-400 p-2 rounded-md"
          defaultValue={post.title}
          onChange={(e) => setTitle(e.target.value)}
        ></textarea>
      </div>
      <div className="flex flex-col">
        <p className="text-lg font-medium">Detail</p>
        <textarea
          className="border border-gray-400 p-2 rounded-md"
          defaultValue={post.body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
      <div className="flex items-center justify-between py-6">
        <button
          onClick={() => deletePostHandler(post.id, post.userId)}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <svg className="fill-current w-4 h-4 mr-2" viewBox="0 0 20 20">
            <path d="M11 3.41L9.59 2 4 7.59l1.41 1.41L10 5.83l4.58 4.58L16 7.59z" />
          </svg>
          Delete
        </button>
        <button
          onClick={() => editPostHandler(post)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Update
        </button>
      </div>
      <div className="flex flex-col">
        <p className="text-lg font-medium">Comments:</p>
        <ol className=" p-2 rounded-md">
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                <h2>{comment.email}</h2>
                <p>{comment.body}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default EditPost;
