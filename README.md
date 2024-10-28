# Token Bucket Rate Limiting Middleware for API

This repository contains a simple implementation of a **Token Bucket** rate-limiting middleware for an API built with Node.js. It allows you to limit the number of requests a client can make within a certain time window. If the rate limit is exceeded, the client will receive a `429 Too Many Requests` response.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/token-bucket-rate-limiter.git
   cd token-bucket-rate-limiter
