require('./config/config')

const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan')
const helmet = require('helmet')
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../build')


// Middleware
app.use(bodyParser.json())
app.use(express.static(publicPath))
app.use(morgan('tiny'))
app.use(helmet())

app.get('*', (req, res) => {
 res.sendFile(`${publicPath}/index.html`);
});

app.listen(PORT, () => {
 console.log(`Server unning on port ${PORT}`);
});

module.exports = { app }
