const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const db = require("./config/dbConnect.js");
require('dotenv').config();

const { PORT } = process.env;

db.on("error", console.log.bind(console, 'Error on connecting to MongoDB'));
db.once("open", () => {
  console.log('MongoDB is connected');
})

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
