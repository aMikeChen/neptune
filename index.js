const express = require('express')
const app = express()
const coin = require('./src/coin')
const redis = require('./src/redis')

app.get('/', function (req, res) {
  redis.getValue('BTC-USD').then((result) => {
    if(result == null) {
      coin.getLatestPrice('BTC', 'USD')
      .then((price) => {
        redis.setValue('BTC-USD', price, 'EX', 10)
        res.send(price.toString())
      })
    } else {
      res.send(result.toString())
    }
  })
})

app.listen(3000)
