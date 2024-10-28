const express = require('express');
const app = express();
const rateLimitMiddleware=require('./middleware/rateLimiter')

// Apply the middleware to your routes
app.get('/api/resource', rateLimitMiddleware, (req, res) => {
    res.send("This is a rate-limited resource.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
