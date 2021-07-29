import { v2 as cloudinary } from "cloudinary";
import File from "../models/file.js";
import mongoose from 'mongoose'



export const postUpload = async (req, res, next) => {
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

  res
    .status(201)
    .json({
      message: "file uploaded successfully :)",
      id: savedFile._id,
      downloadLink: `${process.env.API_BASE_ENDPOINT_CLIENT}/download/${savedFile._id.toString()}`,
    });
};

export const getFile = async(req, res, next) => {
  const id = req.params.id

  let file;
  try {
    file = await File.findById({_id: mongoose.Types.ObjectId(id)})

    console.log(file)
      if(!file) {
        const error = new Error("No file found!")
        error.statusCode = 422
        throw error
      }
  }catch(err) {
    if(!err.statusCode) {
      err.statusCode = 500
      err.message = "Server Error!"
      next(err)
    }
  }
  

  console.log(file)
  const { filename, format, sizeInBytes } = file

  res.status(200).json({
    filename,
    format,
    sizeInBytes,
    id: file._id.toString()
  })

}
