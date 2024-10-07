import React, { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=10"
        );
        setUsers(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching", error);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.login.uuid}>
          <img src={user.picture.large} alt="" />
          <h3>{user.name.first}</h3>
          <p>{user.name.last}</p>
          <p>{user.email}</p>
          <p>{user.location.city}</p>
          <p>{user.location.country}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;
