import ratelimit from '../config/upstash.js';

const rateLimiter = async (req, res, next) => {

    try {
        const { success } = await ratelimit.limit("my-limit-key");

        if (!success) {
            return res.status(429).json({ status: 429, message: 'Too Many Requests. Please try again later!' });
        }

        next();

    } catch (error) {
        console.error('Rate Limiter Error:', error);
        next(error);
        return res.status(500).json({ status: 500, message: 'Internal Server Error' });
    }
};

export default rateLimiter