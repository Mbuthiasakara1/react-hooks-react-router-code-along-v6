import React from "react";
import { Link } from "react-router-dom";
function UserCard({ user }) {
  return (
    <article>
      <h2>{user.name}</h2>
      <link to="/profile">View Profile</link>
    </article>
  );
}
export default UserCard;
