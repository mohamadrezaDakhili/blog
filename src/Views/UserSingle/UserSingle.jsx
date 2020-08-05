import React from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Card, CardHeader } from "reactstrap";
import { CardBody } from "reactstrap";
import PostCard from "../../Component/PostCard/PostCard";

function UserSingle() {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  const [pending, setPending] = useState(true);
  const { id } = useParams();
  const getUser = () => {
    return new Promise((resolve, reject) => {
      Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  const getUserPosts = () => {
    Axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + id).then(
      (res) => {
        setPosts(res.data);
      }
    );
  };
  useEffect(() => {
    getUser().then((user) => {
      setUser(user);
      getUserPosts();
    });
  }, []);
  return (
    <div>
      {pending ? (
        <div></div>
      ) : (
        <Card>
          <CardHeader></CardHeader>
          <CardBody>
            <p>{user.username}</p>
          </CardBody>
        </Card>
      )}
      {posts.map((post) => (
        <PostCard key={post.id} post={post} user={user} />
      ))}
    </div>
  );
}

export default UserSingle;
