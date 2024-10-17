import express from 'express'
import mongoose from 'mongoose'
import connection from './src/config/db.js';
import router from './src/router/flipkard.router.js';
import cors from 'cors'

const app=express();
const port = process.env.PORT || 3000;


app.use(cors())

app.use('/flipkard',router)






app.listen(port,async()=>{
    try {
        await connection
        console.log("MongoDB conncted")
    } catch (error) {
        console.log(error)
        
    }
    console.log(`Server Is Rounnig Port ${port} `)
})







