/*
* APP
* Entry point file
*/

import { forEach } from 'lodash';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import SourceMapSupport from 'source-map-support';

//routes
import searchRoutes from './routes/search.server.route';

//express
const app = express();
// allow-cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// configure app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
const port = process.env.PORT || 3001;

// add Source Map Support
SourceMapSupport.install();

app.use('/api', searchRoutes);
app.get('/', (req, res) => {
    return res.end('This is a search-app for MELI');
});

// catch 404
app.use((req, res, next) => {
    res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});

// start the server
app.listen(port, () => {
    console.log(`Search Server Listening at ${port}`);
});