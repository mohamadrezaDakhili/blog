import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "reactstrap";
import { Link } from "react-router-dom";

function PostCard({ post, user }) {
  return (
    <Card>
      <CardHeader>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </CardHeader>
      <CardBody>{post.body}</CardBody>
      <CardFooter>user: {user ? user.username : post.userId}</CardFooter>
    </Card>
  );
}

export default PostCard;
