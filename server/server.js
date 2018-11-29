require('./config/config')

console.log(process.env.MONGODB_URI)

const express = require('express');
const morgan = require('morgan')
const helmet = require('helmet')
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../build')

app.use(express.static(publicPath))
app.use(morgan('tiny'))
app.use(helmet())

app.get('/api', (req, res) => {
  res.json({name: 'React-Express App API'})
})

app.get('*', (req,res) => {
 res.sendFile(`${publicPath}/index.html`);
});

app.listen(PORT, () => {
 console.log(`Running on port ${PORT}`);
});
