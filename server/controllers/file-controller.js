import { v2 as cloudinary } from "cloudinary";
import File from "../models/file.js";

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
