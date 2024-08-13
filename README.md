Recipe Search Engine
--------------------

Project Overview and Installation:

The Recipe Search Engine is a Node.js application designed so users can search for recipes by name and/or ingredient!
Users can also submit their own recipes to the site for others to try.

This application utilizes both Google and Facebook authentication for logins, and the application stores encryoted login info in both postgreSQL and MongoDB databases. As well as using postgreSQL and MongoDB for storing recipe information.

For a user to get started with the app first install the application files to your device from out GitHub repository. Make sure you also have a ".env" file in the root directory, the file itself will not be included in the package, however you can enter your own data with this template;

SESSION_SECRET=
JWT_SECRET=
FACEBOOK_APP_ID=
FACEBOOK_APP_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
PGUSER=postgres
PGHOST=localhost
PGDATABASE=recipe_ideas
PGPASSWORD=
PGPORT=5432
PORT=3000
MDBLOCAL=mongodb://localhost:27017

Once all files are installed, you must create the postgreSQL and MongoDB databases using the provided files in the "FSDB_Final_Sprint/services/DDL" path, use the ".sql" to create the postgreSQL tables and insert the necessary data. Use the ".json" files to create the MongoDB data (*ensure that, when creating the MongoDB database, the database name is "Recipeideas" and the 2 collections are "Logins" and "Recipes"*).

After both databases have been created, and all files including the .env file are installed, open a terminal window and run command "npm start", after a few seconds you will see a message alerting you that the application is running on localhost:3000. To view the running application, go into your preferred search engine and type the url "localhost:3000", you will then be brought to the home page!


Usage:

Congratulations! You've successfully installed and ran our Recipe Search Engine. Now, to login and start using our app, navigate to the "login" button on the home page, from here you can login using either your Facebook or Google account, either way once you've logged in successfully, you're data is encrypted and stored so if there are any errors, our team can make your experience better!

Once you're logged in, you will be redirected back to the home page and can start searching for recipes! Simply click the "All Recipes" button and you'll find a list of any recipe that's been added to our database through the "Add Recipe" function. You can search either using the searchbar provided, the API included in the files by adding the desired ingredient to the end of the URL, or in the postgreSQL database in the "recipes" table using a SELECT query!

The "Add Recipe" function is also simple! Just fill out the form with ingredients and measurements, then hit submit and other users will be able to enjoy your favourite recipes!

If you'd like to learn more about our app and our team, there's an about section accessible from the home page as well!

There is also an option to switch the site over to dark mode if you have trouble reading text on light backgrounds. And to switch it back simply click the same button!

Once you're done, click the exit button on our home page to log out :)

We hope you enjoy the app!

----------------------------------

This app was created under the MIT license
