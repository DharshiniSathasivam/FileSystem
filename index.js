
 import express from "express"
 import indexRouter from './src/Router/index.js'

 const PORT = process.env.PORT || 8000;

 const app = express()
 app.use('/',indexRouter)

 app.listen(PORT,()=>{
    console.log(`success ${8000}`)
 })