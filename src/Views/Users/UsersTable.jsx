import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import { Table } from "reactstrap";
import { useHistory } from "react-router-dom";

function UsersTable() {
  const [users, setUsers] = useState([]);
  let history = useHistory();
  const getUsers = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((res) =>
      setUsers(res.data)
    );
  };
  useEffect(() => getUsers(), []);

  return (
    <div className="mt-3">
      <Table striped hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>username</th>
            <th>name</th>
            <th>email</th>
            <th>website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/users/" + user.id)}
              key={user.id}
            >
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UsersTable;
