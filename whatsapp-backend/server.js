const express = require("express");
const mongoose = require("mongoose");
const Messages = require("./dbMessages");
const app = express();
const port = 8001;
const Pusher = require("pusher");
require("dotenv").config();
const cors = require("cors");
const pusher = new Pusher({
  appId: "1574015",
  key: "887924064f717a8de8a2",
  secret: "4bf31dd5253ccd247db9",
  cluster: "ap2",
  useTLS: true,
});

const connection_url = process.env.MONGO_URI;

mongoose.connect(connection_url);

const db = mongoose.connection;
db.once("open", () => {
  console.log("connected to db");
  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log(change);
    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      });
    } else {
      console.log("error triggering pusher");
    }
  });
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

app.get("/messages/sync", async (req, res) => {
  try {
    const messages = await Messages.find({});
    res.status(200).send(messages);
  } catch (err) {
    res.status(400).send(err);
  }
});

app.post("/messages/new", async (req, res) => {
  const dbMessage = req.body;
  try {
    const newmsg = await Messages.create(dbMessage);
    res.status(201).send(newmsg);
  } catch (errr) {
    res.status(400).send(err);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
