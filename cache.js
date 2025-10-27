const NodeCache = require('node-cache')
const proxyCache = new NodeCache({ stdTTL: 3600 })

let hits = 0
let misses = 0

module.exports = {
  get: (key) => proxyCache.get(key),
  set: (key, value) => proxyCache.set(key, value),
  has: (key) => proxyCache.has(key),
  clear: () => {
    proxyCache.flushAll()
    hits = 0
    misses = 0
  },
  addHit: () => hits++,
  addMiss: () => misses++,
  stats: () => ({
    hits,
    misses,
    keys: proxyCache.keys().length
  })
}
