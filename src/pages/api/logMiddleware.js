import winston from 'winston';
import fs from 'fs';

// Ensure the log file exists
fs.writeFileSync('logs.log', '');

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'logs.log' })
    ],
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    silent: false,
});

const loggingMiddleware = (handler) => async (req, res) => {
    // console.log(req)
    console.log("req.user in loggingMiddleware:", req.user);
    try {
        logger.info({
            timestamp: new Date().toISOString(),
            method: req.method,
            url: req.url,
            action: 'request',
            user: req.user,  // If you have user authentication
            data: req.body,
        });
        return await handler(req, res);
    } catch (error) {
        logger.error({
            timestamp: new Date().toISOString(),
            action: 'error',
            error: error.message,
        });
        throw error;
    }
};

export default loggingMiddleware;
