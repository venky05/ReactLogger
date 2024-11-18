

# React Logger

This is a custom logging utility for React applications that allows you to log messages with different levels (`debug`, `info`, `warn`, and `error`) based on the current environment (`development`, `staging`, `production`). It ensures that logs are appropriately filtered depending on the environment and provides a cleaner, more scalable way to manage logs in React applications.

## How to Use the Logger

To use this logger in your React application, simply import it and call the respective log method based on your needs:

```javascript
// In any React component or file where logging is required
import Logger from './utils/logger';

// Use different log levels based on the environment
Logger.debug('This is a debug message');  // Only in development
Logger.info('This is an info message');   // In development and staging
Logger.warn('This is a warning message'); // In all environments
Logger.error('This is an error message'); // In all environments
```

### Log Levels
- **debug**: Useful for debugging in development environments.
- **info**: For informational logs (used in development and staging).
- **warn**: For warnings that should be shown in all environments.
- **error**: For error messages that should always be logged.

## How to Set the Environment

To configure which environment the logger should work in, you need to set the environment variable `REACT_APP_ENV` in your `.env` file at the root of your project:

```makefile
REACT_APP_ENV=development
```

You can also set it to `staging` or `production` as needed:

```makefile
REACT_APP_ENV=staging
```

### Supported Environments
- **development**: Shows `debug`, `info`, `warn`, and `error` logs.
- **staging**: Shows `info`, `warn`, and `error` logs.
- **production**: Shows `warn` and `error` logs only.

## How to Run the Code

### Steps to Use in Your React App:
1. Clone the GitHub repository or copy the code into your React project.
2. Create a file named `logger.js` in the `src/utils/` directory and paste the logger code inside it.
3. Use the logger methods in your React components, as shown in the usage section above.
4. Set the appropriate environment in your `.env` file (e.g., `REACT_APP_ENV=development`).
5. Run your React app using either of the following commands:
   - `npm start`
   - `yarn start`
   
   Once you run your app, the logs will be filtered according to the current environment.

---

## Project Structure

```
my-react-app/
│
├── public/
├── src/
│   ├── utils/
│   │   └── logger.js      <-- Logger code here
│   ├── components/
│   └── App.js
├── .env                   <-- Set REACT_APP_ENV here
├── package.json
└── README.md              <-- This file
```

## Extending the Logger

- You can extend the logger to integrate with logging services like **Sentry**, **LogRocket**, or custom server-side logging.
- Consider adding additional log features, like log rotation or saving logs to external storage.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

This `README.md` explains the steps clearly for using the custom logger, setting up the environment, and running the code in your React app. Let me know if you'd like to adjust or add more details!
