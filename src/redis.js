const redis = require("redis");
const util = require("util")

const client = redis.createClient();

function setValue(key, value, ...args) {
  client.set(key, value, ...args)
}

function getValue(key) {
  const getAsync = util.promisify(client.get).bind(client);

  return getAsync(key).catch(console.error);
}

module.exports.setValue = setValue
module.exports.getValue = getValue
