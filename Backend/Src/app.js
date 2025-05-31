import express from 'express'
import { nanoid } from 'nanoid'
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import urlSchema from './Models/shortUrl.model.js'
dotenv.config('./.env')
import connectDB from './Config/mongo.config.js'
import short_url from './Routes/short_url.route.js'
const app=express()
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/api/create',short_url)

app.listen(PORT,()=>{
   connectDB()
})