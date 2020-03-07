const express = require('express');
const session = require('express-session');

const app = express();

const {
    PORT = 3000
} = process.env

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));