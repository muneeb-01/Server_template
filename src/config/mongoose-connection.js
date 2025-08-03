import mongoose from "mongoose";
import dotenv from "dotenv";
import debug from "debug";

const dbgr = debug("development:mongoose");
dotenv.config();

const uri = process.env.MONGOOSE_URI;
mongoose
  .connect(uri)
  .then(() => {
    dbgr("Mongoose connected from app.js");
  })
  .catch((error) => {
    console.log(error);
    dbgr("Mongoose connection error");
  });

module.exports = mongoose.connection;
