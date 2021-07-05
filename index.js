const express = require('express')
const app = express()
const coin = require('./src/coin')

app.get('/', function (req, res) {
  coin.getLatestPrice('BTC', 'USD')
      .then((price) => {
        res.send(price.toString())
      })
})

app.listen(3000)
