const redis = require('redis');
const client = redis.createClient();

client.on('error', err => console.error('Redis error:', err));

async function cacheGet(key) {
  return new Promise((resolve, reject) => {
    client.get(key, (err, data) => {
      if (err) reject(err);
      else resolve(data ? JSON.parse(data) : null);
    });
  });
}

async function cacheSet(key, value, ttl = 3600) {
  client.setex(key, ttl, JSON.stringify(value));
}

module.exports = { cacheGet, cacheSet };