import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => console.log("Connected at MongoDB"))
  .catch((error) => console.log(error));
