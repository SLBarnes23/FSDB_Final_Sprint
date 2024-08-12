// __tests__/logEvents.test.js
const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const EventEmitter = require('events');
const myEmitter = require('../services/logEvents'); // Import the EventEmitter instance

// Mock the console methods
console.log = jest.fn();
console.error = jest.fn();

describe('Event Emitter Logging', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    // Ensure no event listeners are leaking
    myEmitter.removeAllListeners('event');
  });

  it('should log an info message to the console', async () => {
    // Create a promise to handle the console.log callback
    const logPromise = new Promise((resolve, reject) => {
      console.log.mockImplementation((message) => {
        try {
          expect(message).toContain('Event received: Test event, Level: INFO, Message: Test info message');
          resolve();
        } catch (error) {
          reject(error);
        }
      });

      // Emit an info event
      const testEvent = 'Test event';
      const testLevel = 'INFO';
      const testMessage = 'Test info message';

      myEmitter.emit('event', testEvent, testLevel, testMessage);
    });

    await logPromise; // Wait for the promise to resolve or reject
  }, 10000); // Ensure this is enough time 
});