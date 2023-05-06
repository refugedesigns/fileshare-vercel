const express = require("express");
const multer = require("multer");

const {
  postUpload,
  getFile,
  getDownload,
  postLink,
} = require("../controllers/file-controller.js");

const router = express.Router();

const storage = multer.diskStorage({});

const upload = multer({
  storage,
});

router.post("/upload", upload.single("myFile"), postUpload);

router.get("/:id", getFile);

router.get("/download/:id", getDownload);

router.post("/email", postLink);

module.exports =  router;
