const ejs = require('ejs');
const path = require('path');
const fs = require('fs');

// Mock partials
const mockHeader = '<header>Mock Header</header>';
const mockNav = '<nav>Mock Nav</nav>';
const mockStatus = '<div>Mock Status</div>';
const mockAuth = '<div>Mock Auth</div>';
const mockFooter = '<footer>Mock Footer</footer>';

// Load the EJS template
const templatePath = path.join(__dirname, '../views/login.ejs');
const template = fs.readFileSync(templatePath, 'utf8');

describe('login.ejs', () => {
    it('should contain login form elements', () => {
        // Replace partials with mock content
        const mockedTemplate = template
            .replace('<%- include(\'./partials/header.ejs\') %>', mockHeader)
            .replace('<%- include(\'./partials/nav.ejs\') %>', mockNav)
            .replace('<%- include(\'./partials/status.ejs\') %>', mockStatus)
            .replace('<%- include(\'./partials/auth.ejs\') %>', mockAuth)
            .replace('<%- include(\'./partials/footer.ejs\') %>', mockFooter);

        // Render the template with an empty context
        const rendered = ejs.render(mockedTemplate, {});

        // Check if the rendered template contains the expected elements
        expect(rendered).toContain('<h2>Login</h2>');
        expect(rendered).toContain('<form action="/auth" method="post">');
        expect(rendered).toContain('<label for="username"></label>');
        expect(rendered).toContain('<input type="text" name="username" placeholder="Username" id="username" required>');
        expect(rendered).toContain('<label for="password"></label>');
        expect(rendered).toContain('<input type="password" name="password" placeholder="Password" id="password" required>');
        expect(rendered).toContain('<input type="submit" value="Login">');
        expect(rendered).toContain('<div class="textbox"><i class="fa-brands fa-facebook"></i><a href="/auth/facebook"> Login with Facebook</a></div>');
        expect(rendered).toContain('<div class="textbox"><i class="fa-brands fa-google"></i><a href="/auth/google"> Login with Google</a></div>');
        expect(rendered).toContain('<button id="darkModeToggle">Toggle Dark Mode</button>');
    });

    it('should include mocked partials content', () => {
        // Replace partials with mock content
        const mockedTemplate = template
            .replace('<%- include(\'./partials/header.ejs\') %>', mockHeader)
            .replace('<%- include(\'./partials/nav.ejs\') %>', mockNav)
            .replace('<%- include(\'./partials/status.ejs\') %>', mockStatus)
            .replace('<%- include(\'./partials/auth.ejs\') %>', mockAuth)
            .replace('<%- include(\'./partials/footer.ejs\') %>', mockFooter);

        // Render the template with an empty context
        const rendered = ejs.render(mockedTemplate, {});

        // Check if the rendered template contains the mocked partials
        expect(rendered).toContain(mockHeader);
        expect(rendered).toContain(mockNav);
        expect(rendered).toContain(mockStatus);
        expect(rendered).toContain(mockAuth);
        expect(rendered).toContain(mockFooter);
    });
});