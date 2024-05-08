// import express from "express"
// import controller from "../controller/index.js"

// const router =express.Router()

// router.get('/',controller.readWriteFile)

// export default router;

// src/Router/index.js
import express from "express"
import controller from "../controller/index.js"

const router = express.Router()

router.get('/',controller.readWriteFile)

export default router;