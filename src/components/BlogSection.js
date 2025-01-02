import React from "react";
import "../styles/BlogSection.css";
import { GoArrowUpRight } from "react-icons/go";

const BlogPostsSection = () => {
  const posts = [
    {
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rhye",
      date: "20 Jan 2024",
      image:
        "https://s3-alpha-sig.figma.com/img/92f9/d44d/896aad9fd5981c841633a846ddb6994b?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TOCFac1tXVcHcHE3FDjgdGmpjAhC6Obm8Bm0EnXpYCQ7GTuLWsLx8Hk8M1T-rJW1AelTjXJtf8-vQIWIxjvFWz1iywzgy2C3Ae93TsKwdS2uE0Mc2HZFdUISK8ZUgoo~aBBx9Y7~J3IHWY95VNBDfInxUajd2-IBqjo2NAqnYGrxzzvFOxsEn2IYsvSDFrjBJ08LE32hEQ8cdGndDoGAZvfIIUUw4MFjtFjpgjt~2dH7pahA9HLsBdhHt3j4b0PEytPgVUDrGGPIV8ubjb3aABhW6WwiJQ7x~BZYIvbEoGyroO5lgDRaMLoFT4GoJ6wdPcQQExu8uDnqiKYw9Th3Dg__", // Replace with actual image URL
    },
    {
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      image:
        "https://s3-alpha-sig.figma.com/img/a4c5/2ab3/a3c522719b54dd45b1795921034a3f00?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P-kzyel8ZqZmXPEmpmu0IxjuH~NP6YMJMoBjldJWJOHDddvGTXnxPygoC75h~R7UBENvB~3SUrvgoiiJ6lGrPgYxDBNkC4Eu8uHbdWp-OtxU~VXxb7NGr8~eBS3OZjqA~yRMo279L2eP0rDVmROIBC9o2fSn60VYygsZkPTXDQfgyFVVaq-iBYUypGCZX~wB6rFNLXLpoHbbJBVgfhB46J2bbKj2QtPzb9397M2d2kAH1OQ~N1~-~ilutqyvIogeVdlEQqbCA9L4M29RRW8eHc97cfj5XoTJw6WYAtXrefCrXrtlqh3G0Lv~FAwtQcrx-77E5Ejds12JUpepHBFKWA__", // Replace with actual image URL
    },
    {
      category: "Software Engineering",
      title: "Building your API stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Lana Steiner",
      date: "18 Jan 2024",
      image:
        "https://s3-alpha-sig.figma.com/img/e2d0/7def/1dbd591c5182a37dfedc9ff110ae94d9?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V8uSFvTjDN56pu87yDy8EzyuiPe2Idy-g1QkAxm-ChX59f8dj1MHlGrWiDcn13ZlnT0ej6f705xhSfEpdRo2Opy0Y1svHyQ72zoii4tVc2qucKwH~RXq5oLpsKTl3mMZZXAeyktx8v77jcp~GS8OjwwgCqNircOx2HV1sxNwQfA6M2286un0nH6kaFbYiKd0G6lRlW572YjSfVa4OT38hCmjGJ4s9SU~vyuqMxD55kawrpQqfUHQMFvDEv4Qc2h5qJFcH6f-ztGbQIXRZYAND3HPBNhQtKDqltkTrl9p8P8IGWhg7OJ3HN5DYC1XK-poRNUYEbsihqGlGIjYlstlAw__", // Replace with actual image URL
    },
  ];

  return (
    <div className="blog-posts-section">
      {posts.map((post, index) => (
        <div key={index} className="blog-card">
          <img src={post.image} alt={post.title} className="blog-card-image" />
          <div className="blog-card-content">
            <h4 className="blog-card-category">{post.category}</h4>
            <h3 className="blog-card-title">
              {post.title} <GoArrowUpRight />
            </h3>
            <p className="blog-card-description">{post.description}</p>
            <div className="blog-card-author">
              <img
                src="https://s3-alpha-sig.figma.com/img/27a8/497d/5cb712a39a846f3d49443b8283852dca?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mXBIp1AgaLCWY0J-0xBhx~VQj93SmDO3etNuKztfwH0r~hMB4doog4cNLk0tGziTuLVk7ycYWa6r8uHbkkIM5axDt5lvyPXuZ0zeAvvyRdRnKwMIf-CSQtatQB4kP9-JHGl6ED5w8YvfxaeRFJm~E47BPd0YUDeiDRpiPh7LKFv2dIyEcLrcFhta1hSHLfxcW2ipRM6swaz33pGEczu-bHMGwKkqeTcmdg9oiLLtdKAWBa2siENpobuogbl3QXbEsgb5VUYTkyUEHd1zSVZGcLJDwmCAIuUxtRdL2tcyiPMA~BvSofX7frwP~RbcecHAYUwAeda7Gr3M-iHNC0OArQ__" // Replace with author's profile picture URL
                alt={post.author}
                className="author-image"
              />
              <div>
                <p className="author-name">{post.author}</p>
                <p className="post-date">{post.date}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPostsSection;
