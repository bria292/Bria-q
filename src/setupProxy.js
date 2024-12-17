const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/football-api',
    createProxyMiddleware({
      target: 'https://api.football-data.org',
      changeOrigin: true,
      pathRewrite: {
        '^/football-api': '/v4', // rewrite path
      },
    })
  );
}; 