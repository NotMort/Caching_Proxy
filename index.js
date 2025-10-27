const express = require('express')
const axios = require('axios')
const cache = require('./cache')

function startProxy(port, origin) {
  const app = express()
app.get('/cache/stats', (req, res) => {
  res.json(cache.stats())
})

app.use(async (req, res) => {
    const cacheKey = req.originalUrl

    if (cache.has(cacheKey)) {
      cache.addHit()
      console.log(`✅ HIT: ${cacheKey}`)

      const cached = cache.get(cacheKey)
      res.set(cached.headers)
      res.set('X-Cache', 'HIT')
      res.status(cached.status).send(cached.data)
    } else {
      cache.addMiss()
      console.log(`🚫 MISS: ${cacheKey}`)

      try {
        const url = `${origin}${req.originalUrl}`
        const response = await axios.get(url)

        const data = {
          data: response.data,
          headers: response.headers,
          status: response.status
        }

        cache.set(cacheKey, data)
        res.set(response.headers)
        res.set('X-Cache', 'MISS')
        res.status(response.status).send(response.data)
      } catch (error) {
        res.status(error.response?.status || 500).send(error.message)
      }
    }
  })

  app.listen(port, () => {
    console.log(`Caching proxy at http://localhost:${port}, forwarding to ${origin}`)
  })
}

module.exports = startProxy
