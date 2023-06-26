# User Information Page

This is a web application built using Vue.js that displays user information. It allows users to perform CRUD operations (create, read, update, delete) on user data through a RESTful API: http://134.122.96.252:15500/webdev/api. 

For each operations, following methods/Endpoints are available: 

- `GET /users/`: Returns a list of users.
- `GET /users/{id}`: Returns a single user.
- `POST /users/`: Creates a new user.
- `PUT /users/{id}`: Updates a user.
- `DELETE /users/{id}`: Deletes a user.
- `GET /countries`: Returns information related to user details.


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Tools and Libraries](#tools-and-libraries)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [Accessibility](#accessibility)
- [Additional Features](#additional-features)
- [Future Improvements](#future-improvements)
- [Learnings](#learnings)

## Installation

Open the terminal and clone the repository: `git clone https://github.com/ArshiaSaleem98/VueProject.git`

Install all the needed dependencies by using the command: `npm install`

## Usage

### Running the Application

To Run the Vue application use the command: `npm run serve`

Access the application in your browser at `http://localhost:8080` or if you want to serve the app to another port then you can use the following command: `npm run serve -- --port {port you want}`

### Running Tests

To run the test using Cypress, follow these steps:

1. Make sure you have installed previously all the needed dependencies by using the command: `npm install`
2. Open the new terminal
3. Navigate to the project root directory
4. Run the following command to open the Cypress test runner: `npm run test` (This command will launch the Cypress test runner and also run the `json-server` on `http://localhost:8080`).
5. The Cypress test runner window will open, allowing you to view and run the tests.


## Tools and Libraries

The following tools, libraries, and frameworks are being used in the development of this application:

- Vue.js: JavaScript framework for building user interfaces.
- Vue Router: Library for implementing routing in Vue.js.
- Axios: Library used to make HTTP requests.
- Bootstrap: CSS framework for styling the application.
- Preprocessor: SCSS to enhance styling and maintainability.
- Cypress: JavaScript testing framework for End-to-end testing to simulate user interactions within the application.
- Mocha: JavaScript testing framework for Cypress.
- Chai: Assertion library for Cypress.
- JSON Server: Mock API server for testing.
- ESLint: JavaScript linter for maintaining code quality.
- Babel: JavaScript compiler for transpiling code.

## Project Structure
```
├ cypress/            
|   ├─ components/     => Cypress components, contain all the test files `.cy.js` to test: get, add, edit and delete operations.
|   ├─ fixtures/       => Fixtures for test data
|   └─ support/        => Cypress support files, like commands that are being used in test files
├ public/              => Any static assets are placed here.
└ src/
    ├─ assets/         => Project assets (e.g., images, styles)
    ├─ components/     => Vue global components
    ├─ router/         => Vue-router configuration
    ├─ services/       => API services files for making HTTP requests
    ├─ utils/          => Global constants and helper functions
    ├─ views/          => Layouts for view
    ├─ App.vue         => Main App component
    └─ main.js         => Main Vue instance
    └─ config.js       => Custom configuration file to define the base URL for Vue app and for testing
    └─ vue.config.js   => Vue CLI configuration file
```

# App Layout and Design

The application features a simple and intuitive layout that allows users to view and manage user data effectively. Here is an overview of the app's layout and design:

- `Home Page`: The homepage is the main interface for the application. It is designed with a clean and easy-to-understand layout.
- `User Table`: The user data is displayed in a table format on the Home Page, providing a structured view of the user information. Each row represents a user, and the columns represent different user attributes.
- `Edit and Delete Buttons`: For each user in the table, there are two buttons available: "Edit" and "Delete". Clicking the "Edit" button enables the user to modify the corresponding user's fields within the table. Once the necessary edits are made, the user can save the changes by clicking the "Save" button.
- `Adding a User`: To add a new user, there is a button located above the user table. When the user clicks on this button, a side modal or form opens up, providing a convenient space to create a new user. The form includes fields to enter relevant user details. After filling in the required information, the user can add the new user by pressing the "Add" button. The newly added user will immediately appear in the user table.

The app's layout and design prioritize simplicity, making it user-friendly and easily accessible. Users can interact with the table, edit user information, delete users, and add new users effortlessly.

