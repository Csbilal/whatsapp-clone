import React from "react";
import { Avatar } from "@mui/material";
const SidebaChat = () => {
  return (
    <div className="sideBarChat">
      <Avatar />
      <div className="sidebarchat_info">
        <h4>Room name</h4>
        <p>This is the last message</p>
      </div>
    </div>
  );
};

export default SidebaChat;
