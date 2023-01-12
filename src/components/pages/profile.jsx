import React from "react";
import { getUserInfo } from "../../helpers/localStorage";

const Profile = () => {
  const user = getUserInfo();
  console.log("🚀 ~ file: profile.jsx:6 ~ Profile ~ user", user);
  return (
    <div>
      <p>Username:{}</p>
      <p>Username:{}</p>
      <p>Username:{}</p>
      <p>Username:{}</p>
      <p>Username:{}</p>
    </div>
  );
};

export default Profile;
