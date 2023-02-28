import React from "react";
import PostCard from "./PostCard";
import { useSelector} from "react-redux";
import { useSearchParams } from "react-router-dom";

function AllPosts() {
  const [searchParams] = useSearchParams();
  const posts = useSelector((state) => state.posts.posts);

  // Get the userId URL parameter from the location search string
  const userIdParam = searchParams.get("userId");

  const filteredPosts = posts.filter((post) => {
    // console.log(post);
    if (userIdParam) {
      return post.userId === parseInt(userIdParam);
    } else {
      return true; // return all posts if no userIdParam is present
    }
  });

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {filteredPosts.map((post) => {
        // if (post.userId) {
          // console.log(post.userId, post.id);
          return (
              <PostCard
                key={post.id}
                id={post.id}
                userId={post.userId}
                header={post.title}
                text={post.body}
              />
          );
        // }
      })}
    </div>
  );
}
export default AllPosts;
