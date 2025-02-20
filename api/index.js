import express from 'express';
// import mongodb from 'mongodb';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user_route.js';
import signupRoutes from './routes/signup_route.js';
dotenv.config();
// import { get } from './get';
// import { post } from './post';

mongoose.connect(process.env.mongourl)
.then(
    ()=>
    {
        console.log('Connected to database');
    }
)
.catch(
    (err)=>{
        console.log(err);
    }   );
const app=express();
app.use(express.json());
// app.get('/',get);
// app.post('/',post);
app.listen(3000,()=>console.log('Server is running on port 3000'));
app.use('/user',userRoutes);
app.use('/auth',signupRoutes);