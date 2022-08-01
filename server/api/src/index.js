const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const connectDB = require("../db/connect");

const authRoute = require("../routes/auth");
const usersRoute = require("../routes/users");
const messagesRoute = require("../routes/messages");

dotenv.config();
app.use(express.json());

const port = process.env.PORT || 8080;

app.use("/api/v1/auth", authRoute);
app.use("/users", usersRoute);
app.use("/messages", messagesRoute);

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Servidor iniciado en el puerto: ${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
