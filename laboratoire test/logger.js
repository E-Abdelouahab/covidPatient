const winston = require('winston');
 
const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log',
     level: 'error',
     format: winston.format.combine(winston.format.timestamp(),winston.format.json())
     }),
    // new winston.transports.File({ filename: 'combined.log' }),
 
  ],
});
 
module.exports = logger;