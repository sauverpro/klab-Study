const express = require('express')
const app = express()
const bodyParser = require("body-parser")
import mongoose from 'mongoose';
require("dotenv").config();

app.use(bodyParser.json());
const port= process.env.PORT || 8000
import mainRouter from './src/routes';

const logger = require("./src/middleware/logger.middlewares")
app.use('/',logger)
app.use('/api/v1',mainRouter)

  mongoose.connect(process.env.ANOTHER_DB).then((res)=>{
    console.log("database connected");
  })


app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`))