const path = require("path")
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const { v2: cloudinary } = require("cloudinary");

const fileRouter = require("./router/file-router.js");
const connectDB = require("./helpers/db.js");

const app = express();

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.join(__dirname, "public", )))

app.use("/api/files", fileRouter);

app.get("/download/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "download", "[id].html"))
})

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

connectDB().then(() => {
app.listen(process.env.PORT, () => {
  console.log("Server is running");
});
});


