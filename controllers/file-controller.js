const { v2: cloudinary } = require("cloudinary");
const File = require("../models/file.js");
const mongoose = require("mongoose");
const https = require("https");
const nodemailer = require("nodemailer");
const emailTemplate = require("../utils/email-template.js");
const sendEmail = require("../helpers/sendEmail.js");

const postUpload = async (req, res, next) => {
  console.log(req.file);
  if (!req.file) {
    const error = new Error("Hey bro! We need the file!");
    error.statusCode = 422;
    throw error;
  }

  let uploadedFile;

  try {
    uploadedFile = await cloudinary.uploader.upload(req.file.path, {
      folder: "fileShare",
      resource_type: "auto",
    });
  } catch (err) {
    const error = new Error("File upload failed!");
    error.statusCode = 500;
    next(error);
  }

  const { originalname } = req.file;
  const { secure_url, bytes, format } = uploadedFile;

  const file = new File({
    filename: originalname,
    sizeInBytes: bytes,
    secure_url,
    format,
  });

  const savedFile = await file.save();

  res.status(201).json({
    message: "file uploaded successfully :)",
    id: savedFile._id,
    downloadLink: `${
      process.env.BASE_URL
    }/download/${savedFile._id.toString()}`,
  });
};

const getFile = async (req, res, next) => {
  const id = req.params.id;

  let file;
  try {
    file = await File.findById({ _id: mongoose.Types.ObjectId(id) });

    console.log(file);
    if (!file) {
      const error = new Error("No file found!");
      error.statusCode = 422;
      throw error;
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
      err.message = "Server Error!";
      next(err);
    }
  }

  console.log(file);
  const { filename, format, sizeInBytes } = file;

  res.status(200).json({
    filename,
    format,
    sizeInBytes,
    id: file._id.toString(),
  });
};

const getDownload = async (req, res, next) => {
  const id = req.params.id;

  let file;
  try {
    file = await File.findById({ _id: mongoose.Types.ObjectId(id) });

    console.log(file);
    if (!file) {
      const error = new Error("No file found!");
      error.statusCode = 422;
      throw error;
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
      err.message = "Server Error!";
      next(err);
    }
  }

  https.get(file.secure_url, (fileStream) => fileStream.pipe(res));
};

const postLink = async (req, res, next) => {
  const { id, emailFrom, emailTo } = req.body;

  let file;
  try {
    file = await File.findById({ _id: mongoose.Types.ObjectId(id) });

    if (!file) {
      const error = new Error("No file found!");
      error.statusCode = 422;
      throw error;
    }
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
      err.message = "Server Error!";
      next(err);
    }
  }


  const { filename, sizeInBytes } = file;

  const fileSize = `${(+sizeInBytes / (1024 * 1024)).toFixed(2)} MB`;
  const downloadLink = `${
    process.env.API_BASE_ENDPOINT_CLIENT
  }/download/${file._id.toString()}`;

  const emailInfo = {
    fromEmail: emailFrom,
    toEmail: emailTo,
    subject: "Download your File",
    url: downloadLink,
    templateId: 2
  }

  try {
    const sendFile = await sendEmail(emailInfo)
    console.log(sendFile)
  } catch (error) {
    console.error(error)
  }



  file.sender = emailFrom;
  file.receiver = emailTo;

  await file.save();

  return res.status(200).json({ message: "Email sent successfully" });
};

module.exports = {
  postUpload,
  getDownload,
  getFile,
  postLink,
};
