import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Row, Col } from "reactstrap";
import PostCard from "../../Component/PostCard/PostCard";

function PostArchive() {
  const [posts, setPosts] = useState([]);
  const getPosts = () => {
    Axios.get("https://jsonplaceholder.typicode.com/posts").then((res) =>
      setPosts(res.data)
    );
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="mt-3">
      <Row xs={1}>
        {posts.map((post) => (
          <Col key={post.id} className="mt-3">
            <PostCard post={post} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default PostArchive;
