# User-Management-App
A single-page web application, built using the Angular framework, that displays lists of users fetched from Reqres API.

## How to run the project in Development Mode
The project uses [Node.js >= 6.x](https://nodejs.org/en/) and the [Angular CLI](https://cli.angular.io/).

After Node is installed in your system, follow the below steps.

1. After cloning the app, navigate to the directory of the app.
2. Now install all modules listed as dependencies in `package.json` by running the command `npm install`
3. Launch the app with this command `ng serve --open`

A new browser window open automatically displaying the app.  If it doesn't, navigate to [http://localhost:4200/] in your browser


## Technology
- Angular
- Typescript
- Bootstrap
- Reqres API


## Notes
- To login to the app, use these credentials:
 -- email: eve.holt@reqres.in
 -- password: cityslicka

- Adding new users or editing existing users don't affect the users list as the data fetched and posted to Reqres API doesn't match.