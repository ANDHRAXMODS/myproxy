const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// ఉదాహరణకు google.com కి రీడైరెక్ట్ చేస్తుంది (దీనిని మీకు కావలసిన సైట్‌కి మార్చుకోవచ్చు)
app.use('/', createProxyMiddleware({
    target: 'https://www.google.com',
    changeOrigin: true,
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Proxy running on port ${PORT}`);
});
