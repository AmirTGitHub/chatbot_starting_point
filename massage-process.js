const DF = require("dialogflow");
const uuid = require("uuid");

const projectId = process.env.projectId;
const languageCode = "en-uk";

/// if you are deploying this on the same google project as your DF you don't need this part
let privateKey = process.env.DIALOGFLOW_PRIVATE_KEY;
let clientEmail = process.env.DIALOGFLOW_CLIENT_EMAIL;
let clientId = process.env.DIALOGFLOW_CLIENT_ID;
let tokenUri = process.env.DIALOGFLOW_TOKEN_URI;
let config = {
  credentials: {
    private_key: privateKey,
    client_email: clientEmail,
    client_id: clientId,
    token_uri: tokenUri,
  },
};

// create a new DF instance and pass the credentials to it
const sessionClient = new DF.SessionsClient(config);

const processMessage = async (message, sessionId) => {
  const sessionPath = sessionClient.sessionPath(projectId, sessionId);
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode,
      },
    },
  };
  try {
    const data = await sessionClient.detectIntent(request);
    // this is the response from DF
    const result = data[0].queryResult;
    console.log(result);
    let text;
    if (result.fulfillmentText === "") {
      text = "I'm a bot and I can't understand what are you talking about";
    } else {
      text = result.fulfillmentText;
    }
    const response = {
      speech: text,
      id: sessionId,
      user: "bot",
    };
    return response;
  } catch (error) {
    console.log({ error });
  }
};

module.exports = processMessage;
