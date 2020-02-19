const express = require('express');
const cors = require('cors');
const initDb = require('./src/initializeDatabase');

const app = express();
app.use(express.json());
app.use(cors());

initDb.initializeDatabase();

app.use('/api', require('./src/routes'));

app.listen(3000);