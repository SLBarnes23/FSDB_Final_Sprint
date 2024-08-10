const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

describe('Index file', () => {
    let originalConsoleLog;

    beforeAll(() => {
        // Mock process.env variables
        process.env.PORT = 3000;
        process.env.SESSION_SECRET = 'test_secret';

        // Mock console.log
        originalConsoleLog = console.log;
        console.log = jest.fn();

        // Ensure that index.js is executed to initialize app
        require('../index');
    });

    afterAll(() => {
        // Restore the original console.log
        console.log = originalConsoleLog;
    });

    it('should set up the app and listen on the correct port', () => {
        // This test will check if the app starts up without errors
        try {
            execSync('curl -I http://localhost:3000');
            expect(true).toBe(true);
        } catch (error) {
            // If there's an error, the app is not running correctly
            expect(true).toBe(false);
        }
    });

    it('should have the correct configuration', () => {
        // Check that some expected files or settings are present
        const expectedFile = path.join(__dirname, '../views/index.ejs');
        expect(fs.existsSync(expectedFile)).toBe(true);
    });
});