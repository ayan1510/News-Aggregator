// utils/redisClient.js
const redis = require("redis");
require("dotenv").config(); // Only needed if not loaded in main server file

const redisClient = redis.createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379", // fallback just in case
});

redisClient.on("error", (err) => {
  console.error("❌ Redis Client Error", err);
});

redisClient.connect()
  .then(() => console.log("✅ Redis connected"))
  .catch((err) => console.error("❌ Redis connection failed:", err));

module.exports = redisClient;
