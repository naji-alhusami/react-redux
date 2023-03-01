import React, { useEffect } from "react";
import PostCard from "./PostCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../features/postsSlice";
import { useSearchParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";

function AllPosts() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const loadPosts = async () => {
      await dispatch(fetchPosts());
    };
    loadPosts();
  }, []);

  const posts = useSelector((state) => state.posts.posts);

  const userIdParam = searchParams.get("userId");

  const filteredPosts = posts.filter((post) => {
    if (userIdParam) {
      return post.userId === parseInt(userIdParam);
    } else {
      return true;
    }
  });


  return (
    <>
      <Navbar
        postsNumber={filteredPosts.length}
      />
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {filteredPosts.map((post) => {
          return (
            <PostCard
              key={post.id}
              id={post.id}
              userId={post.userId}
              header={post.title}
              text={post.body}
            />
          );
        })}
      </div>
    </>
  );
}
export default AllPosts;
