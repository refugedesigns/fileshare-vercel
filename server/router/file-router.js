import express from "express"
import multer from "multer"


import { postUpload } from "../controllers/file-controller.js"

const router = express.Router()

const storage = multer.diskStorage({})

const upload = multer({
    storage
})

router.post("/upload", upload.single("myFile"), postUpload)

export default router