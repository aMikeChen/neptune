const axios = require('axios')

const URL = 'https://sandbox-api.coinmarketcap.com'
const API_KEY = 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c'

async function getLatestPrice(symbol, convert) {
  const res = await axios.get(`${URL}/v1/cryptocurrency/quotes/latest`, {
    params: {
      symbol,
      convert,
    },
    headers: {
      Accept: 'application/json',
      'X-CMC_PRO_API_KEY': API_KEY,
    },
  })

  return res.data.data[symbol].quote[convert].price
}

module.exports.getLatestPrice = getLatestPrice
