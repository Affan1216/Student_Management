import { createServer } from 'node:http';
import express from 'express';
import db from './db/conn.mjs';

const connectDb = db;
const app = express();

app.use(express.json());// middleware to parse JSON bodies

app.get('/', (req,res)=>{
    res.send('API is Running')
})


const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

const PORT = process.env.PORT || 5050;
app.listen(PORT ,()=>{
    console.log(`Server is running on port ${PORT}`)
})
