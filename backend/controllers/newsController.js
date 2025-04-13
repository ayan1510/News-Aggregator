//News fetch with Redis

const axios = require('axios');
const redisClient = require('../utils/redisClient');

exports.getNews = async (req, res) => {
  const { category } = req.query;
  const cacheKey = `news:${category || 'general'}`;

  redisClient.get(cacheKey, async (err, data) => {
    if (data) {
      return res.json(JSON.parse(data));
    }

    const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
      params: {
        category: category || 'general',
        country: 'us',
        apiKey: process.env.NEWS_API_KEY,
      }
    });

    redisClient.setEx(cacheKey, 3600, JSON.stringify(response.data));
    res.json(response.data);
  });
};
