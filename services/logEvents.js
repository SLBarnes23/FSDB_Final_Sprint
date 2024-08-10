// Node.js common core global modules
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

// NPM installed Modules
const { format, getYear } = require('date-fns');
const { v4: uuid } = require('uuid'); //guid

const EventEmitter = require('events');
const myEmitter = new EventEmitter(); 

myEmitter.on('event', async (event, level, message) => {
  const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
  const logItem = `${dateTime}\t${level}\t${event}\t${message}\t${uuid()}`;
  
  try {
      // Determine the log folder based on the log level
      const logFolder = level === 'ERROR' ? '../logs/errors/' : `../logs/${getYear(new Date())}/`;

      // Check if the folder exists, and create it if it doesn't
      if (!fs.existsSync(path.join(__dirname, logFolder))) {
          await fsPromises.mkdir(path.join(__dirname, logFolder), { recursive: true });
      }

      // Define the log file name and path
      const fileName = level === 'ERROR' ? 'error_log.log' : `${format(new Date(), 'yyyyMMdd')}_http_events.log`;

      // Append the log item to the appropriate file
      await fsPromises.appendFile(path.join(__dirname, logFolder, fileName), logItem + '\n');

      // Optionally, log to the console for immediate error visibility
      if (level === 'ERROR') {
          console.error(logItem);
      }

  } catch (err) {
      console.error('Failed to write log:', err);
  }
}); 

module.exports = myEmitter;
