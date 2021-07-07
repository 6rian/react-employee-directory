const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/api');

const app = express();

// Server static assets from client
app.use(express.static(path.join(__dirname, 'client/build')));

app.use('/api', apiRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on ${port}`));
