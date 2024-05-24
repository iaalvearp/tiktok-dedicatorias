import express from 'express';
import path from 'node:path';
const bodyParser = require('body-parser');

export const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '../app/views'));

// middleware