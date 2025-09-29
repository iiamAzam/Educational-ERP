import express from "express"
import admincontroller from "../controllers/authController.js"
const router = express.Router()

router.post("/",admincontroller)


export default router




