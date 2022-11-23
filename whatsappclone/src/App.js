import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import axios from "axios";
function App() {
  const [messagess, setMessages] = useState([]);
  console.log(messagess, "------------messagess");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:9000/getallmeassges");
        setMessages(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    var pusher = new Pusher("d1d1c8ca6cfde2a0f85c", {
      cluster: "eu",
    });

    var channel = pusher.subscribe("messages");
    channel.bind("inserted", function (newMesaage) {
      setMessages([...messagess, newMesaage]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messagess]);

  return (
    <div className="app">
      <div className="app-body">
        <Sidebar></Sidebar>
        <Chat messagess={messagess}></Chat>
      </div>
    </div>
  );
}

export default App;
