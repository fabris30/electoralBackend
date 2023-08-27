import express from 'express';
import "dotenv/config";
import "./database/connectdb.js";
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import electoresRouter from './routes/electores.route.js';



//crear servidor
const app =express();
app.use(express.json());
app.use(cookieParser());
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/electores',electoresRouter);

//arrancar servidor
const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log('Servidor funcionando 4000');
})