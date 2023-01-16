const express = require("express");
const morgan = require("morgan");
const cloudinary = require("cloudinary");

require("dotenv").config();
var cors = require("cors");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.API_SECRET,
});

const nfts = require("./src/routes");

const app = express();
const port = process.env.PORT;

app.use(cors()); // Use this after the variable declaration
app.use(morgan("dev"));
app.use(express.json());

app.use("/nft", nfts);

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});