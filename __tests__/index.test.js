const { exec, execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

jest.setTimeout(15000); // Set a global timeout of 15 seconds for all tests

describe('Index file', () => {
    let originalConsoleLog;
    let serverProcess;

    beforeAll((done) => {
        // Mock process.env variables
        process.env.PORT = 3000;
        process.env.SESSION_SECRET = 'test_secret';

        // Mock console.log
        originalConsoleLog = console.log;
        console.log = jest.fn();

        // Start the server
        serverProcess = exec('node index.js', { cwd: path.join(__dirname, '..') }, (error) => {
            if (error) {
                console.error('Server failed to start:', error);
                done(new Error('Server failed to start'));
                return;
            }
        });

        // Give the server some time to start up
        setTimeout(done, 5000); // 5 seconds delay before running tests
    });

    afterAll((done) => {
        if (serverProcess) {
            serverProcess.kill();
        }
        // Restore the original console.log
        console.log = originalConsoleLog;
        done();
    });

    it('should set up the app and listen on the correct port', (done) => {
        setTimeout(() => {
            try {
                execSync('curl -I http://localhost:3000');
                expect(true).toBe(true);
                done();
            } catch (error) {
                // If there's an error, the app is not running correctly
                expect(true).toBe(false);
                done();
            }
        }, 2000); // Increased delay to ensure the server has time to start
    });

    it('should have the correct configuration', () => {
        // Check that some expected files or settings are present
        const expectedFile = path.join(__dirname, '..', 'views', 'index.ejs');
        expect(fs.existsSync(expectedFile)).toBe(true);
    });
});