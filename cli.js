const { program } = require('commander')
const startProxy = require('./index')
const cache = require('./cache')

program
  .option('--port <number>', 'Port to run proxy server')
  .option('--origin <url>', 'Origin server to forward requests')
  .option('--clear-cache', 'Clear the cache')

program.parse(process.argv)
const options = program.opts()

if (options.clearCache) {
  cache.clear()
  console.log('✅ Cache cleared.')
} else if (options.port && options.origin) {
  startProxy(Number(options.port), options.origin)
} else {
  console.log(' --port and --origin to start the proxy server or --clear-cache.')
}
