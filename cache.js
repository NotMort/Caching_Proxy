const NodeCache = require('node-cache')
const proxyCache = new NodeCache({ stdTTL: 3600 }) 

module.exports = {
  get: (key) => proxyCache.get(key),
  set: (key, value) => proxyCache.set(key, value),
  has: (key) => proxyCache.has(key),
  clear: () => proxyCache.flushAll()
}
