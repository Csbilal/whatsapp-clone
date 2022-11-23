const express = require("express");
const dbconfig = require("./dbConfig");
const SMSModal = require("./Modal/whatsappSmsModal");
const Pusher = require("pusher");
const { default: mongoose } = require("mongoose");
const cors = require("cors");
const app = express();

const pusher = new Pusher({
  appId: "1489972",
  key: "d1d1c8ca6cfde2a0f85c",
  secret: "5bb4bcca73d2dd43da3f",
  cluster: "eu",
  useTLS: true,
});
const port = process.env.PORT || 9000;
app.use(express.json());
app.use(cors());

app.get("/getallmeassges", (req, res) => {
  SMSModal.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

const db = mongoose.connection;
db.once("open", () => {
  // console.log("db is connected");
  const msgCollection = db.collection("whatsappmessages");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log("a change occur", change);
    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      });
    } else {
      console.log("error trigeriing in puhser");
    }
  });
});

app.post("/messges/new", (req, res) => {
  const dbMessage = req.body;
  SMSModal.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

if (process.env.NODE_ENV == "production") {
  const path = require("path");
  app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "whatsappclone", "build")));
    res.sendFile(
      path.resolve(__dirname, "whatsappclone", "build", "index.html")
    );
  });
}

app.listen(port, () => console.log(`server is runnnig on port ${port}`));
