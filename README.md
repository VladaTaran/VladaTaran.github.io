This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Project src structure

    .
    ├── components              # Custom components for project
    │   ├── gameOver.jsx          # Component
    │   ├── guessWord.jsx         # Component
    |   ├── header.jsx            # Component
    |   ├── lose.jsx              # Component
    |   ├── main.jsx              # Component
    |   ├── nextRound.jsx         # Component
    │   └── win.jsx               # Component
    ├── images                  # Project images
    │   ├── blue.png              # Image
    |   ├── dark-blue.png         # Image
    │   └── ...                   # etc.
    └── App.css                 # Global CSS styles which is not using as theme
    └── App.js                  # Main component with html structure
    └── App.test.js             # Tests for main component rendering
    └── data.json               # Initation of data from backend, json format
    └── helpers.js              # Keyboard settings for ukrainian language
    └── index.css               # Styles for main App component
    └── index.js                # Entry point for project
    └── serviceWorker.js        # Initial React settings for service worker
