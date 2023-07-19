const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workoutRoutes')
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server is listining on the port 8080 and connected to the database");
    });
})
.catch(err=>{
    console.log(err.message);
})


const app = express();

app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

app.use('/app/workout',workoutRoutes);
