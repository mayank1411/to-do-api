const express = require('express');
const app = express();
require('dotenv').config();
const connect = require('./db/connect');
const todos = require('./routers/todo')
const PORT = 5000 || process.env.PORT

app.use(express.json());
app.use('/api/todo', todos);


const start = async()=>{
      try {
            await connect.connectDB(process.env.MONGO_URI);
            app.listen(PORT, ()=>{
                  console.log(`app is running on port ${PORT}...`)
            })
      } catch (error) {
            console.log(error);
      }
}

start();