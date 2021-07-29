import express from "express"
import multer from "multer"


import { postUpload, getFile } from "../controllers/file-controller.js"

const router = express.Router()

const storage = multer.diskStorage({})

const upload = multer({
    storage
})

router.post("/upload", upload.single("myFile"), postUpload)

router.get("/:id", getFile)

export default router