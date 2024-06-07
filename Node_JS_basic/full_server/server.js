import route from './routes/index';

const express = require('express');

/* eslint-disable */
const app = express();
const port = 1245;

app.use('/', route)

app.listen(port)

export default app;