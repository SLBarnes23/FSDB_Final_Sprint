const fs = require('fs');
const { format } = require('date-fns');
const myEmitter = require('../services/logEvents'); // Adjust the path if necessary

// Mock fs methods
jest.mock('fs', () => ({
  ...jest.requireActual('fs'),
  existsSync: jest.fn(),
  mkdir: jest.fn(),
  appendFile: jest.fn(),
}));

// Mock console methods
console.log = jest.fn();
console.error = jest.fn();

describe('Event Emitter Logging', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks before each test
  });

  it('should log an error message to the console', async () => {
    // Mock fs methods
    fs.existsSync.mockReturnValue(true);

    // Emit the event
    await new Promise((resolve) => {
      myEmitter.emit('event', 'Test event', 'ERROR', 'Test error message');
      setImmediate(resolve); // Allow async operations to complete
    });

    // Debugging output
    console.log('console.error calls:', console.error.mock.calls);

  });

  it('should log a non-error message to the console', async () => {
    // Mock fs methods
    fs.existsSync.mockReturnValue(true);

    // Emit the event
    await new Promise((resolve) => {
      myEmitter.emit('event', 'Test event', 'INFO', 'Test info message');
      setImmediate(resolve); // Allow async operations to complete
    });

    // Debugging output
    console.log('console.log calls:', console.log.mock.calls);

    // Assertions
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Event received: Test event, Level: INFO, Message: Test info message'));
    expect(console.error).not.toHaveBeenCalled(); // Ensure console.error was not called
  });
});