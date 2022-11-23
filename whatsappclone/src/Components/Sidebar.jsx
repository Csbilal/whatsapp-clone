import React from "react";
import "../css/siderbar.css";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SerchOutlined from "@mui/icons-material/SearchOutlined";
import { Avatar, IconButton } from "@mui/material";
import SidebaChat from "./SidebaChat";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfKDvnb_SrPfLwmQnvUI8Qex_ZSS9ueEOISQCgrkYA&s"></Avatar>
        <div className="headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="siderserch">
        <div className="siderbarsearch_container">
          <SerchOutlined sx={{ padding: "10px", color: "gray" }} />
          <input type="text" placeholder="search or start new chat" />
        </div>
      </div>
      <div>
        <div className="sidebarchat">
          <SidebaChat></SidebaChat>
          <SidebaChat></SidebaChat>

          <SidebaChat></SidebaChat>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
