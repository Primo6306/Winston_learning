
import { format, createLogger, transports } from 'winston';
const { timestamp, combine, printf } = format;
var module = { exports: {} };

const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} User: Alex ${level}: ${message}`;
});

const logConfiguration = {
  
  format: combine(
    timestamp({ format: 'DD-MMM-YYYY HH:mm:ss' }), 
    logFormat
    ),
    
  transports: [
      new transports.File({
          filename: 'logs/ProjectLogs.log'
      })
  ]
  
};

export const logger = createLogger(logConfiguration);

logger.error("Error on the project log");
logger.info("Project log is not available");
logger.




