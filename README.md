# MyReads Project

This project was built on the starter template of MyReads project. I added all of the interactivity and functionalities using React components with JS ES6. The components are placed in the Components directory.

## How to start it

To get started developing right away:

-   install all project dependencies with `npm install`
-   start the development server with `npm start`

## What You're Getting

```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json
├── .igitignore # Git ignore for this app ignoring files and directories like, node_modules
├── public
│   ├── favicon.ico # React Icon, as it was.
│   └── index.html # As it was
└── src
    ├── Components
        ├── App.js # Parent component of all components
        ├── MainPage (sorted by hierarchy) # Contains components handling the main page
            ├── MainPage.js # Parent component of all main page components
            ├── Shelf.js # Handles each shelf on the main page
            ├── BookListing.js # Handles the book listings
            ├── MoveBook.js # Handles the moving of books using the dropdown
        ├── SearchPage (sorted by hierarchy) # Contains components handling the search page
            ├── SearchPage.js # Parent component of the search page
            ├── SearchResults.js # Handles the search results
    ├── App.css # Styles for the app
    ├── App.test.js # Did not do testing
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── icons # The icons used for this app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```
