// db.js
import mongoose from 'mongoose';
import 'dotenv/config';

const url = process.env.url;

// Create a connection function
const connection =  mongoose.connect(`${url}`);
    

// Export the connection function
export default connection;
