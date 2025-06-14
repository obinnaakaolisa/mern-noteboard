import {Ratelimit} from '@upstash/ratelimit';
import {Redis} from '@upstash/redis';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

// This code sets up a rate limiter using Upstash Redis and the Ratelimit library.
// It allows a maximum of 10 requests per 10 seconds for each user.
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),   // Initialize Redis client from environment variables
  limiter: Ratelimit.slidingWindow(5, '10 s'), // Allow 10 requests per 10 seconds
});

export default ratelimit;