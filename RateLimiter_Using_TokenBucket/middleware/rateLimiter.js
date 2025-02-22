// Token Bucket configuration
const TOKEN_REFILL = process.env.REFILL_TOKEN || 1; 
const REFILL_TIME = process.env.TIME || 12; 
const BUCKET_SIZE = process.env.BUCKET_SIZE || 5; 

const bucket = {};

// TokenBucket class definition
class TokenBucket {
    constructor() {
        console.log("TokenBucket initialized");
    }

    hasToken(ip) {
        const entry = bucket[ip] || { cnt: BUCKET_SIZE, date: Date.now() }; 
        
        // Calculate the elapsed time since the last token update
        const currentTime = Date.now();
        const timeElapsed = currentTime - entry.date;

        // Refill tokens based on the time elapsed
        const newTokens = Math.floor((TOKEN_REFILL / REFILL_TIME) * (timeElapsed / 1000));
        entry.cnt = Math.min(entry.cnt + newTokens, BUCKET_SIZE); 
        entry.date = currentTime; 

        // Check if there are available tokens
        if (entry.cnt > 0) {
            entry.cnt--; 
            bucket[ip] = entry; 
            return true; 
        } else {
            bucket[ip] = entry; 
            return false; 
        }
    }
}

// Create a single instance of TokenBucket
const tokenBucket = new TokenBucket();

// Middleware function for rate limiting
const rateLimitMiddleware = (req, res, next) => {
    const ip = req.ip; 
    
    if (tokenBucket.hasToken(ip)) {
        next(); 
    } else {
        res.status(429).send("Too many requests. Please try again later.");
    }
};

module.exports=rateLimitMiddleware;
