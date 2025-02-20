import express from 'express';
// import { get } from './get';
// import { post } from './post';

const app=express();
app.use(express.json());
// app.get('/',get);
// app.post('/',post);
app.listen(3000,()=>console.log('Server is running on port 3000'));
