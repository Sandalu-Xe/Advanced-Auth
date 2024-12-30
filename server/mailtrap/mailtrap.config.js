import {MailtrapClient} from "mailtrap";


import dotenv from "dotenv";

dotenv.config()

const TOKEN = process.env.MAILTRAP_TOKEN;
const ENDPOINT= process.env.MAILTRAP_ENDPOINT;

// const ENDPOINT = "https://send.api.mailtrap.io/";

const client = new MailtrapClient({
  token: TOKEN,
//   endpoint: ENDPOINT,

});


const sender = {
  email: "hello@demomailtrap.com",
  name: "sandalu",
};
const recipients = [
  {
    email: "sandaluthushan20@gmail.com",
  }
];

client
  .send({
    from: sender,
    to: recipients,
    subject: "You are awesome!",
    html: "Congrats for sending test email with Mailtrap!",
    category: "Integration Test",
  })
  .then(console.log, console.error);