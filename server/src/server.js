import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyparser from 'body-parser';
import Promise from 'bluebird';
import morgan from 'morgan';

import auth from './routes/auth';
import users from './routes/users';
import admin from './routes/admin';
import income from './routes/income';

dotenv.config();
const app = express();

app.set('port', process.env.PORT);


mongoose.set('useCreateIndex', true);
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser: true});

app.use(bodyparser.json());
app.use(morgan('dev'));

app.use('/api/auth', auth);
app.use('/api/users', users);
app.use('/api/admin', admin);
app.use('/api/income', income);

app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(app.get('port'), ()=>{
    console.log('Server is running on port', app.get('port'));
})
