const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const stuffRoutes = require("./routes/stuff");
const userRouter = require("./routes/user");
const path = require("path");

const app = express();

const db =
  "mongodb+srv://openclass:openclass@cluster0-058s1.mongodb.net/test?retryWrites=true&w=majority";

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas!");
  })
  .catch(error => {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(error);
  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/stuff", stuffRoutes);
app.use("/api/auth", userRouter);

module.exports = app;
