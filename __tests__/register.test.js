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
const templatePath = path.join(__dirname, '../views/register.ejs');
const template = fs.readFileSync(templatePath, 'utf8');

describe('register.ejs', () => {
    it('should contain registration form elements', () => {
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
        expect(rendered).toContain('<h2>Register</h2>');
        expect(rendered).toContain('<form action="/auth/new" method="POST">');
        expect(rendered).toContain('<label for="username">Name</label>');
        expect(rendered).toContain('<label for="email">Email</label>');
        expect(rendered).toContain('<label for="password">Password</label>');
        expect(rendered).toContain('<input type="submit" value="Register">');
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
