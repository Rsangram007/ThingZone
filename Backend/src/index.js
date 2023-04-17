const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8000;
const Router=require("./Router/Router")
mongoose
  .connect(
    "mongodb+srv://Rsangram890:hPZbgpmJvegZil8Q@cluster0.osqcdhn.mongodb.net/ThingZone?retryWrites=true&w=majority"
  )
  .then(() => console.log("MongoDb is Connected"))
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use(express.json())
app.use("/",Router)
app.listen(PORT, () => {
  console.log("Backend Server is Running"+PORT);
});
