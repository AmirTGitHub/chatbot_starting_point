# Chatbot starting point

This is a super simple project tto start developing the chatbot project.

# How to run this

first you need a dialogflow project so you need to go to [dialogflow website](https://dialogflow.cloud.google.com/) and login witth you google account. When you have created the DF you need to go to [gcp project](https://console.cloud.google.com/) coresponded to the DF project to first enable the [DF api](https://console.cloud.google.com/flows/enableapi?apiid=dialogflow.googleapis.com) and then follow this tuturil to [set up authentication with a service account](https://cloud.google.com/docs/authentication/getting-started) and download the `json key file`.
Now its time to clone this repo
when cloned the repo first rename the `test.env` file to `.env` file
fianly run the below command on the root of the folder

```
npm install
```

and for runing the project run the below command and go to [localhost:5000](http://localhost:5000/)

```
npm start
```
