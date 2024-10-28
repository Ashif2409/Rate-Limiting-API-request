# Token Bucket Rate Limiting Middleware for API

This repository contains a simple implementation of a **Token Bucket** rate-limiting middleware for an API built with Node.js. It allows you to limit the number of requests a client can make within a certain time window. If the rate limit is exceeded, the client will receive a `429 Too Many Requests` response.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/token-bucket-rate-limiter.git
   cd RateLimiter_Using_TokenBucket
2. Install the dependencies:
   ```bash
   npm install
3. Run the application
   ```bash
   node app.js
#Environment Variables
The behavior of the rate limiter can be customized using environment variables:

REFILL_TOKEN: Number of tokens added per refill interval (default: 1).
TIME: Time interval (in seconds) for refilling tokens (default: 12).
BUCKET_SIZE: Maximum number of tokens in the bucket (default: 5).

#Algorithm Overview
The Token Bucket algorithm is used to manage rate limiting. Each client is associated with a "bucket" that holds tokens. Each request consumes one token. Tokens are refilled at a specified rate. Once a bucket is empty, further requests from the client are blocked until more tokens are added.
