require("dotenv").config({ path: ".env" });

const express = require("express");
const bodyParser = require("body-parser");
const uuid = require("uuid");

//this is the connection to dialogflow
const processMessage = require("./massage-process");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/sent", async (req, res) => {
  const message = req.body.userMessage.text;
  //Assigning a sessionID to a new user
  let sessionId;
  if (req.body.sessionId === null) {
    sessionId = uuid.v4();
  } else {
    sessionId = req.body.sessionId;
  }
  console.log(req.body);
  //passing message and sessionid to dialogflow
  const processedMessage = await processMessage(message, sessionId);
  console.log({ processedMessage });
  // return the response for dialogflow to the users
  res.json(processedMessage);
});
app.all("/", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

//serve the static files for local development
app.use("/", express.static("./public"));

const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`server is running on the http://localhost:${port}`)
);
