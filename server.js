const express = require("express"),
  path = require("path"),
  nodeMailer = require("nodemailer"),
  bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("Console here.");
  res.render("index");
});

app.post("/send-email", (req, res) => {
  let transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "gmarchesi888@gmail.com",
      pass: "watchWeight66"
    }
  });
  let mailOptions = {
    from: "Brooklyn For Warren <gmarchesi888@gmail.com>",
    to: req.body.to,
    subject: "You're Going to *Event Name Here!*",
    text: req.body.body,
    html: "See you at the next Warren event!"
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message %s sent: %s", info.messageId, info.response);
    res.render("index");
  });
});

app.listen(port, (req, res) => console.log("Server running on port", port));
