const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fallback = require('express-history-api-fallback')
const jsonParser = bodyParser.json();

const app = express();
const root = `${__dirname}/public`

app.use(jsonParser)
app.use(express.static(root))
app.use(fallback('index.html', { root: root }))


// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './index.html'))
// })

app.listen(process.env.PORT || 8080, () => {
  console.log("Listening on port 8080")
})
