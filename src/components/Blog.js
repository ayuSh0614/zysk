import React from "react";
import "../styles/blog.css";

const BlogHeader = () => {
  return (
    <div className="blog-header-container">
      <div className="blog-header-left">
        <h4 className="blog-subtitle">Our blog</h4>
        <h1 className="blog-title">Lastest blog posts</h1>
        <p className="blog-description">
          Tool and strategies modern teams need to help their companies grow.
        </p>
      </div>
      <div className="blog-header-right">
        <button className="view-all-posts-btn">View all posts</button>
      </div>
    </div>
  );
};

export default BlogHeader;
