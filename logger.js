// src/utils/logger.js

// Define log levels with priority order
const LOG_LEVELS = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

// Define allowed log levels for each environment
const ENVIRONMENTS = {
  development: ['debug', 'info', 'warn', 'error'],
  staging: ['info', 'warn', 'error'],
  production: ['warn', 'error'],
};

// Get the current environment from the environment variable, default to 'development'
const currentEnv = process.env.REACT_APP_ENV || 'development';

// Get the allowed log levels for the current environment
const allowedLevels = ENVIRONMENTS[currentEnv] || ['warn', 'error'];

// Logger object with methods for each log level
const Logger = {
  debug: (message, ...args) => {
    if (allowedLevels.includes('debug')) {
      console.debug(`[DEBUG]: ${message}`, ...args);
    }
  },
  info: (message, ...args) => {
    if (allowedLevels.includes('info')) {
      console.info(`[INFO]: ${message}`, ...args);
    }
  },
  warn: (message, ...args) => {
    if (allowedLevels.includes('warn')) {
      console.warn(`[WARN]: ${message}`, ...args);
    }
  },
  error: (message, ...args) => {
    if (allowedLevels.includes('error')) {
      console.error(`[ERROR]: ${message}`, ...args);
    }
  },
};

export default Logger;
