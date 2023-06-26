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
- [App Layout and Design](#app-layout-and-design)
- [Additional Features](#additional-features)
- [Future Improvements and Enhancements](#future-improvements-and-enhancements)

## Installation

Open the terminal and clone the repository: `git clone https://github.com/ArshiaSaleem98/VueProject.git`

Install all the needed dependencies by using the command: `npm install`

## Usage

### Running the Application

To Run the Vue application use the command: `npm run serve`

Access the application in your browser at `http://localhost:8080` or if you want to serve the app to another port then you can use the following command: `npm run serve --port {port you want}`

### Running Tests

To run the test using Cypress, follow these steps:

1. Make sure you have installed previously all the needed dependencies by using the command: `npm install`
2. Open the new terminal
3. Navigate to the project root directory
4. Run the following command to open the Cypress test runner: `npm run test` (This command will launch the Cypress test runner and also run the `json-server` on `http://localhost:3000`).
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

## App Layout and Design

<img width="500" alt="image" src="https://github.com/ArshiaSaleem98/VueProject/assets/45390300/ca297a97-3f53-4bbe-9791-0d78723c6968">

<img width="500" alt="image" src="https://github.com/ArshiaSaleem98/VueProject/assets/45390300/6ac941c6-b11a-4629-b094-8d318cd6a797">

The application has a simple and intuitive layout that allows users to view and manage user data effectively. Here is an overview of the app's layout and design:

- `Home Page`: The homepage is the main interface for the application. It is designed with a clean and easy-to-understand layout.
  
- `User Table`: The user data is displayed in a table format on the Home Page, providing a structured view of the user information. Each row represents a user, and the columns represent different user attributes.
  
- `Edit and Delete Buttons`: For each user in the table, there are two buttons available: "Edit" <img width="20" alt="Screenshot 2023-06-26 at 01 40 10" src="https://github.com/ArshiaSaleem98/VueProject/assets/45390300/47ec078c-5cab-4ca4-b5a9-c9429cee8dec"> and "Delete" <img width="20" alt="Screenshot 2023-06-26 at 01 41 06" src="https://github.com/ArshiaSaleem98/VueProject/assets/45390300/0f58ce58-3cb1-4c87-8400-742a68d9789a">. Clicking the "Edit" <img width="20" alt="Screenshot 2023-06-26 at 01 40 10" src="https://github.com/ArshiaSaleem98/VueProject/assets/45390300/47ec078c-5cab-4ca4-b5a9-c9429cee8dec"> button enables the user to modify the corresponding user's fields within the table. Once the necessary edits are made, the user can save the changes by clicking the "Save" 
 <img width="20" alt="Screenshot 2023-06-26 at 01 41 15" src="https://github.com/ArshiaSaleem98/VueProject/assets/45390300/d28cd8d8-075c-4270-af9e-cdc5609f1a18"> button.

- `Adding a User`: To add a new user, there is a button located above the user table <img width="60" alt="image" src="https://github.com/ArshiaSaleem98/VueProject/assets/45390300/2e0df64f-32a4-4d34-9ba0-7cc967e14f57">. When the user clicks on this button, a side modal or form opens up, providing a convenient space to create a new user. The form includes fields to enter relevant user details. After filling in the required information, the user can add a new user by pressing the "Add" button. The newly added user will immediately appear in the user table.

The app's layout and design prioritize simplicity, making it user-friendly and easily accessible. Users can interact with the table, edit user information, delete users, and add new users effortlessly.

### Form Validation

The application includes form validation to ensure that users enter valid and complete information when adding user details. Form validation helps maintain data integrity and prevents incorrect or incomplete user information from being saved.

When adding a new user, the form includes validation to ensure that all required fields are filled. In this case (Name and CC) fields are required fields. If these required fields are missing, the form displays a warning message prompting the user to fill in the necessary information.

By implementing form validation, the application ensures that the user data remains consistent and accurate. 

### Responsive Design and Device Compatibility

The application is a responsive-based layout that adapts to different screen sizes, ensuring optimal user experience across desktop, tablet, and mobile devices. Here is an overview of the app's layout and design:

- `Desktop and Tablet Mode:`
  
In desktop and tablet mode, the application represents user data in a table format, allowing users to view and manage user information efficiently. The layout is designed to maximize screen space and present a comprehensive overview of user attributes.

- `Mobile Mode:`

<img width="250" alt="image" src="https://github.com/ArshiaSaleem98/VueProject/assets/45390300/fcbc6a38-7e76-4d48-93f4-6e802131994d">
  
In mobile mode, the application adopts a more compact and user-friendly design by utilizing a card-based layout. Each user is represented as a card, displaying key information in a concise and visually appealing manner. This mobile-friendly design ensures easy navigation and readability on smaller screens.

## Future Improvements and Enhancements

Here are some enhancements/improvements that can be made to further get the better user experience of the application:

### Search Functionality

Implementing a search input field to allow users to easily find specific users, especially when dealing with a large amount of data. This would enhance the usability of the application and save users time when searching for specific information.

### Pagination

Introduce pagination functionality to display a limited number of users per page. This will improve performance by reducing the amount of data rendered on a single page, particularly when dealing with a large number of users. It will also enhance navigation and make it easier for users to browse through the user list.

### Enhanced Error Handling

Implement robust error handling mechanisms to provide informative and user-friendly error messages in case of any failures or unexpected scenarios. This will help users understand the cause of the issue and provide guidance on how to resolve it.

### Styling with Different Frameworks and Styled Components

Explore using different styling frameworks and tools to enhance the visual appeal and maintainability of the application's UI. Considering options like: `Tailwind CSS`, `Material UI` etc

In addition to using styling frameworks, considering incorporating styled components into the application will be also useful. As Styled components allow having component-specific styles using a CSS-in-JS approach, making it easier to manage and customize the styling of individual components.

## Thank You for Reading!

Thank you for taking the time to explore the project. I hope you found the information useful and gained insights into its features and functionality. If you have any questions or feedback, please don't hesitate to reach out.

I appreciate your interest and support!

Best regards,

