const path = require('path');
const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

console.log(__dirname + '/../public');
console.log(publicPath);

app.listen(3000, () => {
   console.log(`Listening on port ${port}.`);
});