# 🚀 Caching Proxy Server

A lightweight caching reverse proxy built with Node.js. It forwards requests to an origin server, caches responses for faster performance, and tracks cache metrics.

---

## ✨ Features

- Reverse proxy for any HTTP API or server
- Transparent response caching using `node-cache`
- Cache TTL: 1 hour by default
- Cache statistics for debugging and monitoring
- Command line flags for configuration
- Docker support for easy deployment

---

## 📦 Installation

Clone the repository:

```
git clone https://github.com/your-username/caching-proxy.git
cd caching-proxy
```

Install dependencies:

```
npm install
```

---

## 🏁 Usage

Start the proxy:

```
node cli.js --port 3000 --origin https://api.example.com
```

Clear cache:

```
node cli.js --clear-cache
```

Make requests through the proxy:

```
curl http://localhost:3000/your/api/path
```

---

## 📊 Cache Metrics

The proxy exposes a statistics endpoint:

```
GET http://localhost:3000/cache/stats
```

Example response:

```json
{
  "hits": 5,
  "misses": 12,
  "keys": 3
}
```

---

## 🧰 CLI Options

| Flag | Description | Required |
|------|-------------|:-------:|
| `--port` | Local port to run proxy server | ✅ |
| `--origin` | Upstream origin server | ✅ |
| `--clear-cache` | Flush all cached entries | ❌ |

---

## 🐳 Docker Deployment

Build the Docker image:

```
docker build -t caching-proxy .
```

Run the container:

```
docker run -p 3000:3000 caching-proxy
```

Or with Docker Compose:

```
docker compose up --build
```

---

## 📂 Project Structure

```
.
├── cli.js
├── index.js
├── cache.js
├── Dockerfile
├── package.json
└── README.md
```

---

## ✅ Future Improvements

- Support additional HTTP methods (POST, PUT, DELETE)
- Limit cache size or auto-eviction policy
- Logging to external monitoring services
- Redis or Memcached support
- UI dashboard for cache insights


