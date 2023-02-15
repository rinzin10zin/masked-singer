import dotenv from "dotenv";
dotenv.config();
// import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import singerRouter from "./routes/singerRoutes.js";

const { MONGO_URL, PORT, NODE_ENV } = process.env;
const app = express();
const endpoint = "/api/v1/tms";

app.use(express.json());
app.use(express.static("public"));
app.use(endpoint, singerRouter);

//code here

// listen to server and connect db
const startServer = async () => {
  try {
    mongoose.set(`strictQuery`, true);
    mongoose.connect(MONGO_URL);
    app.listen(PORT, () => {
      if (NODE_ENV === "development") {
        console.log(
          `Server is running @ ${PORT}
  http://localhost:${PORT}${endpoint}`
        );
      } else {
        console.log("Server is running...");
      }
    });
  } catch (error) {
    console.error(error);
  }
};
startServer();
