const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const jsonParser = bodyParser.json();

const app = express();

app.use(express.static('public'))
app.use('/assets', express.static('assets'))
app.use('/style', express.static('style'))
app.use(jsonParser)

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'))
})

app.listen(process.env.PORT || 8080, () => {
  console.log("Listening on port 8080")
})
