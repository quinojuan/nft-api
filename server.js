const express = require("express");
const morgan = require("morgan");
var cors = require('cors')


const studentRoutes = require("./src/routes");

const app = express();
const port = 3001;

app.use(cors()) // Use this after the variable declaration
app.use(morgan("dev"));
app.use(express.json());

app.use("/nft", studentRoutes);

app.listen(port, () => {
  console.log(`server listening on port: ${port}`);
});
