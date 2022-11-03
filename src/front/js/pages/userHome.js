import React from "react";
import { Navbar } from "../component/navbar";
import { ShowPost } from "../component/post/showPosts";
import { Picker } from "../component/picker.jsx";

const UserHome = () => {
  return (
    <div className="home">
      <Navbar />
      {/* <ShowPost /> */}
      <Picker />
    </div>
  );
};

export default UserHome;
