// PostList.js
import React, { useEffect } from 'react';

const PostList = ({ posts, fetchPosts }) => {
  useEffect(() => {
  
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <h2>Post List</h2>
      <ul>
      
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>: {post.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
