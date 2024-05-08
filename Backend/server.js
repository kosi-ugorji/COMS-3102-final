const express = require('express')
const mongoose = require('mongoose')
const notesRoutes = require('./routes/noteRoutes')
const cors=require("cors");

require('dotenv').config()

const app = express()


const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.use(express.json())
app.use((req, ers, next) =>{
  console.log(req.path, req.method)
  next()
})

app.use('/api', notesRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(() => {
  app.listen(5010, () => {console.log("Connected to db and listening on port", process.env.PORT)})
})
.catch((error) => {
  console.log(error)
})




