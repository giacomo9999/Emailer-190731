const express = require("express"),
  path = require("path"),
  nodeMailer = require("nodemailer");

const app = express();
const port = 3000;
app.listen((req, res) => console.log("Server running on port" , port));
