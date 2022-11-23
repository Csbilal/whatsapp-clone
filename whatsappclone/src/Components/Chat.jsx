import { Avatar, IconButton } from "@mui/material";
import React, { useState } from "react";
import "../css/chat.css";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SerchOutlined from "@mui/icons-material/SearchOutlined";
import InsertEmotionIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import axios from "axios";
const Chat = ({ messagess }) => {
  const [input, setInput] = useState("");

  const sendSms = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9000/messges/new", {
        message: input,
        name: "bilal",
        timestamp: "this is timestamp",
        received: true,
      });
    } catch (error) {
      console.log(error);
    }
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chatheader">
        <Avatar />
        <div className="chat_info">
          <h4>Room name</h4>
          <p>last Scene at...</p>
        </div>
        <div className="chat-headerright">
          <IconButton>
            <SerchOutlined />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chatBody">
        {messagess.map((sms) => {
          return (
            <p className={`chat-msg ${sms.received && "chat-reciver "} `}>
              <span className="chat-name"> {sms.name}</span>
              {sms.message}
              <span className="chat_timestamps">
                {new Date().toUTCString()}
              </span>
            </p>
          );
        })}

        {/* <p className="chat-msg chat-reciver">
          <span className="chat-name"> usman</span>
          This is a message
          <span className="chat_timestamps">{new Date().toUTCString()}</span>
        </p> */}
      </div>

      <div className="Chat_footer">
        <InsertEmotionIcon />
        <form action="">
          <input
            value={input}
            placeholder="enter a message"
            type="text"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>
          <button type="submit" onClick={sendSms}>
            send a meassge
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
