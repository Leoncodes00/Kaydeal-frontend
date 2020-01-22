import React from "react";

const UserInfo = props => {
  return (
    <div>
      <h1>Name: {props.user.name}</h1>
      <h1>Email: {props.user.email}</h1>
      <h2>Messages: {props.user.messages}</h2>
    </div>
  );
};
export default UserInfo;
