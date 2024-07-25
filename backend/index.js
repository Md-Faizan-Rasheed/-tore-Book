import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

import cors from "cors"
const app = express();

app.use(express.json())

app.use(cors())

dotenv.config();
const PORT = process.env.PORT || 4001;
const URI = process.env.MONGODB_URL;

try {
  mongoose.connect(URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error", error);
}


///Defining routes
app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
