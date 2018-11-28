const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.json({name: 'MERN App API'})
})

app.get('*', (req,res) => {
 res.sendFile(path.join(__dirname, 'build/index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
 console.log('Listening on port', port);
});
