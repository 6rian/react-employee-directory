const express = require('express');
const path = require('path');

const app = express();

// Server static assets from client
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api', (req, res) => {
  res.json({message: 'hello world'});
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on ${port}`));
