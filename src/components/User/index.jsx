import React from "react";
import "./index.css";

function User({ user }) {
  return (
    <div className="card">
      <img src={user.image} alt="" />
      <div className="user-info">
        <h3>
          {user.firstName} {user.lastName}
        </h3>
        <h3>Email: {user.email}</h3>
        <h3>Phone: {user.phone}</h3>
        <div className="addres">
          <li>Region: {user.address.region}</li>
          <hr />
          <li>Zip: {user.address.zip}</li>
        </div>
        <div className="cars">
          <li>{user.cars}</li>
        </div>
      </div>
    </div>
  );
}

export default User;
