import express from 'express';
import "dotenv/config";
import "./database/connectdb.js";
import cookieParser from 'cookie-parser';
import cors from 'cors'; 

import authRouter from './routes/auth.route.js';
import electoresRouter from './routes/electores.route.js';
import conteoRouter from './routes/conteo.route.js';




//crear servidor
const app =express();

const whiteList = [process.env.ORIGIN1]
/* app.use(cors({
    origin: function(origin, callback){
    if(whiteList.includes(origin)){
        return callback(null, origin);
    }
        return callback("error de cors origin"+ origin + "no autorizado");
    },
   // Credentials: true,
})); */
/*app.use(cors({
    Credentials: true,
}));*/
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/electores',electoresRouter);
app.use('/api/v1/conteo', conteoRouter);

//arrancar servidor
const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log('Servidor funcionando 4000');
})